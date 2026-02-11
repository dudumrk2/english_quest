import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Divider,
    Alert,
    Stack,
    IconButton,
    LinearProgress,
    Chip,
    Fade,
    TextField,
} from '@mui/material';
import {
    RecordVoiceOver as PronunciationIcon,
    Mic as MicIcon,
    MicOff as MicOffIcon,
    Lightbulb as TipIcon,
    CheckCircle as CheckIcon,
    GraphicEq as WaveIcon,
    Create as WriteIcon,
    VolumeUp as VolumeIcon,
    Stop,
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';
import { renderTextWithHighlight } from '../utils/textRenderer';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import {
    CHALLENGE_WORDS_COUNT,
} from '../data/constants';
import { PronunciationFeedback, TaskPronunciationProps } from '../types';

// Uses shared utilities from utils/textRenderer.tsx and hooks/useSpeechSynthesis.ts

// Helper to calculate accuracy
const calculateAccuracy = (original: string, transcript: string) => {
    const normalize = (text: string) => text.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/);
    const originalWords = normalize(original);
    const transcriptWords = normalize(transcript);

    let matches = 0;
    transcriptWords.forEach(word => {
        if (originalWords.includes(word)) matches++;
    });

    // Simple overlap percentage, capped at 100
    const accuracy = Math.min(100, Math.round((matches / Math.max(originalWords.length, 1)) * 100));
    return accuracy;
};

export function TaskPronunciation({ lesson, onComplete, initialAnswers = {}, onSaveAnswers }: TaskPronunciationProps) {
    const [attempts, setAttempts] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
    const [summary, setSummary] = useState(initialAnswers.summary || '');
    const [writtenSentences, setWrittenSentences] = useState(initialAnswers.sentences || ['', '', '', '', '']);
    const [readingComplete, setReadingComplete] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);

    // Use shared speech synthesis hook for audio playback
    const { isPlaying, highlightRange, toggle: toggleAudio, stop } = useSpeechSynthesis();

    // Refs for speech recording (used by toggleRecording)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const recognitionRef = useRef<any>(null);
    const transcriptRef = useRef('');

    // Get vocabulary words for the challenge (using constant)
    const challengeWords = React.useMemo(() => {
        const vocab = lesson.content.vocabulary || [];
        return vocab.slice(0, CHALLENGE_WORDS_COUNT).map(v => v.word.toLowerCase());
    }, [lesson.content.vocabulary]);

    useEffect(() => {
        // Initialize SpeechRecognition if available
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';
            recognitionRef.current = recognition;
        }

        return () => {
            if (recognitionRef.current) recognitionRef.current.abort();
        };
    }, []);

    const handlePlayAudio = () => {
        toggleAudio(lesson.content.text);
    };

    // Render text with vocabulary tooltips and word highlighting
    const renderContent = () => {
        return renderTextWithHighlight(
            lesson.content.text,
            lesson.content.vocabulary,
            highlightRange
        );
    };

    // NOTE: startRecording, stopRecording, and startRecordingWithEvents were removed
    // as dead code - they were superseded by toggleRecording below


    const toggleRecording = async () => {
        if (isRecording) {
            // STOP
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stop();
                mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            }
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            setIsRecording(false);
            setAttempts(prev => prev + 1);

            // Calculate accuracy
            // Wait a small moment for final recognition results if needed
            setTimeout(() => {
                const accuracy = calculateAccuracy(lesson.content.text, transcriptRef.current);
                let message = "Good effort!";
                if (accuracy > 80) message = "Excellent reading!";
                else if (accuracy > 50) message = "Good job, keep practicing!";
                else message = "Try to speak clearly and closer to the mic.";

                setFeedback({
                    transcript: transcriptRef.current || "(No speech detected)",
                    accuracy,
                    message
                });

                if (accuracy > 40) { // LENIENT passing score
                    setReadingComplete(true);
                    triggerCelebration();
                }
            }, 500);

        } else {
            if (isPlaying) {
                stop();
            }

            // START
            transcriptRef.current = '';
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                chunksRef.current = [];

                mediaRecorderRef.current.ondataavailable = (e) => {
                    if (e.data.size > 0) chunksRef.current.push(e.data);
                };

                mediaRecorderRef.current.onstop = () => {
                    const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                    const url = URL.createObjectURL(blob);
                    setAudioURL(url);
                };

                mediaRecorderRef.current.start();

                if (recognitionRef.current) {
                    recognitionRef.current.onresult = (event: any) => {
                        let currentTx = '';
                        for (let i = 0; i < event.results.length; ++i) {
                            currentTx += event.results[i][0].transcript;
                        }
                        transcriptRef.current = currentTx;
                    };
                    recognitionRef.current.start();
                } else {
                    // Fallback if no speech recognition (e.g. Firefox sometimes)
                    // Check browsers... Chrome/Edge have it.
                    console.warn("Speech Recognition not supported in this browser.");
                }

                setIsRecording(true);
                setFeedback(null);
            } catch (err) {
                console.error("Error:", err);
                alert("Microphone access denied or not available.");
            }
        }
    };

    // Handler for summary text
    const handleSummaryChange = (e: any) => {
        const val = e.target.value;
        setSummary(val);
        if (onSaveAnswers) {
            onSaveAnswers({ summary: val, sentences: writtenSentences });
        }
    };

    // Calculate which challenge words are used in valid sentences
    const usedWords = React.useMemo(() => {
        const used = new Set();
        writtenSentences.forEach(sentence => {
            if (!sentence.trim()) return;
            const words = sentence.trim().split(/\s+/);
            if (words.length < 5) return; // Only count if sentence is long enough

            const lowerSentence = sentence.toLowerCase();
            challengeWords.forEach(word => {
                if (lowerSentence.includes(word)) {
                    used.add(word);
                }
            });
        });
        return used;
    }, [writtenSentences, challengeWords]);

    const handleSentenceChange = (index: number, value: string) => {
        const newSentences = [...writtenSentences];
        newSentences[index] = value;
        setWrittenSentences(newSentences);
        if (onSaveAnswers) {
            onSaveAnswers({ summary, sentences: newSentences });
        }
    };

    const validateSentences = () => {
        return writtenSentences.every(sentence => {
            if (!sentence.trim()) return false;
            const words = sentence.trim().split(/\s+/);
            if (words.length < 5) return false;

            const hasChallengeWord = challengeWords.some(challengeWord =>
                sentence.toLowerCase().includes(challengeWord)
            );
            return hasChallengeWord;
        });
    };

    const handleComplete = () => {
        if (readingComplete && summary.trim().length > 0 && validateSentences()) {
            onComplete();
        }
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 1, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: { xs: 2, md: 3 },
                    mb: 4,
                    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                    color: '#1a4731',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <PronunciationIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700} sx={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={500} sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            Read Aloud Mission
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Stack spacing={4}>
                {/* Reading Text Card */}
                <Card elevation={3} sx={{ position: 'relative', overflow: 'visible' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                            <Typography variant="overline" color="text.secondary" fontWeight={600}>
                                Read this text aloud:
                            </Typography>
                            <Button
                                variant="outlined"
                                startIcon={isPlaying ? <Stop /> : <VolumeIcon />}
                                onClick={handlePlayAudio}
                                disabled={isRecording}
                                color={isPlaying ? "error" : "primary"}
                                size="small"
                            >
                                {isPlaying ? "Stop" : "Listen First"}
                            </Button>
                        </Stack>

                        <Divider sx={{ my: 2 }} />
                        <Typography
                            variant="h5"
                            align="center"
                            sx={{
                                fontFamily: '"Georgia", serif',
                                lineHeight: 1.8,
                                color: '#1a202c',
                                my: 2,
                                p: 2,
                                bgcolor: '#f8fafc',
                                borderRadius: 2,
                                border: '1px solid #e2e8f0'
                            }}
                            component="div"
                        >
                            {renderContent()}
                        </Typography>

                        {/* Tips */}
                        <Stack direction="row" spacing={1} mt={3} flexWrap="wrap" gap={1}>

                            {lesson.content.tips.map((tip, idx) => (
                                <Chip
                                    key={idx}
                                    icon={<TipIcon sx={{ fontSize: 16 }} />}
                                    label={tip}
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)' }}
                                />
                            ))}
                        </Stack>
                    </CardContent>
                </Card>

                {/* Recording Action Area */}
                <Box textAlign="center" py={2}>
                    <Stack spacing={2} alignItems="center">
                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                            {isRecording && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -10,
                                        left: -10,
                                        right: -10,
                                        bottom: -10,
                                        borderRadius: '50%',
                                        border: '2px solid #ef4444',
                                        animation: 'pulse 1.5s infinite',
                                        '@keyframes pulse': {
                                            '0%': { transform: 'scale(1)', opacity: 1 },
                                            '100%': { transform: 'scale(1.5)', opacity: 0 },
                                        },
                                    }}
                                />
                            )}
                            <IconButton
                                onClick={toggleRecording}
                                disabled={attempts >= 3 && readingComplete}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    bgcolor: isRecording ? '#ef4444' : 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: isRecording ? '#dc2626' : 'primary.dark',
                                        transform: 'scale(1.05)',
                                    },
                                    transition: 'all 0.2s',
                                    boxShadow: 4,
                                }}
                            >
                                {isRecording ? <MicOffIcon fontSize="large" /> : <MicIcon fontSize="large" />}
                            </IconButton>
                        </Box>

                        <Typography variant="body1" color="text.secondary">
                            {isRecording ? "🔴 Recording... Click again to stop" : "Click microphone to start reading"}
                        </Typography>

                        <Typography variant="caption" display="block" color="text.disabled">
                            Attempts: {attempts} / 3
                        </Typography>

                        {/* Playback Button */}
                        {audioURL && (
                            <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<VolumeIcon />}
                                onClick={() => {
                                    const audio = new Audio(audioURL);
                                    audio.play();
                                }}
                                sx={{ mt: 2 }}
                            >
                                Play My Recording
                            </Button>
                        )}
                    </Stack>
                </Box>

                {/* Feedback Section */}
                <Fade in={!!feedback}>
                    <Card
                        elevation={2}
                        sx={{
                            borderLeft: '6px solid',
                            borderColor: (feedback?.accuracy || 0) > 70 ? 'success.main' : 'warning.main',
                            bgcolor: (feedback?.accuracy || 0) > 70 ? '#f0fdf4' : '#fffbeb'
                        }}
                    >
                        <CardContent>
                            <Stack spacing={2}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6" fontWeight={600}>
                                        Analysis
                                    </Typography>
                                    <Chip
                                        label={`${feedback?.accuracy || 0}% Accuracy`}
                                        color={(feedback?.accuracy || 0) > 70 ? "success" : "warning"}
                                        icon={(feedback?.accuracy || 0) > 70 ? <CheckIcon /> : <WaveIcon />}
                                    />
                                </Stack>

                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        We heard:
                                    </Typography>
                                    <Typography variant="body1" fontStyle="italic" color="text.primary">
                                        "{feedback?.transcript}"
                                    </Typography>
                                </Box>

                                <Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={feedback?.accuracy || 0}
                                        color={(feedback?.accuracy || 0) > 70 ? "success" : "warning"}
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                    <Typography variant="body2" color={(feedback?.accuracy || 0) > 70 ? "success.main" : "warning.dark"} mt={1} fontWeight={500}>
                                        {feedback?.message}
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Fade>

                {/* Hebrew Summary Section */}
                <Card elevation={2} sx={{ mt: 4 }}>
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                            <WriteIcon color="warning" />
                            <Typography variant="h6" fontWeight={600}>
                                Summary in Hebrew - סיכום בעברית
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" mb={2} dir="rtl">
                            תרגם או סכם את הקטע שקראת בעברית
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            value={summary}
                            onChange={handleSummaryChange}
                            placeholder="כתוב את התרגום/סיכום שלך כאן..."
                            dir="rtl"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    fontFamily: '"Arial", sans-serif',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                },
                            }}
                        />
                    </CardContent>
                </Card>

                {/* Writing Challenge Section */}
                <Card elevation={2}>
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                            <WriteIcon color="primary" />
                            <Typography variant="h6" fontWeight={600}>
                                Writing Challenge
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />

                        <Alert severity="info" sx={{ mb: 3 }}>
                            Please write 5 sentences. Each sentence must be at least <strong>5 words long</strong> and include <strong>at least one word</strong> from the list below.
                        </Alert>

                        <Box sx={{ mb: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
                            <Typography variant="subtitle2" gutterBottom color="text.secondary">
                                Vocabulary Bank:
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {challengeWords.map((word, i) => {
                                    const isUsed = usedWords.has(word);
                                    return (
                                        <Chip
                                            key={i}
                                            label={word}
                                            size="small"
                                            color={isUsed ? "success" : "secondary"}
                                            variant={isUsed ? "filled" : "outlined"}
                                            icon={isUsed ? <CheckIcon /> : undefined}
                                        />
                                    );
                                })}
                            </Stack>
                        </Box>

                        <Stack spacing={2}>
                            {writtenSentences.map((sentence, idx) => {
                                const wordCount = sentence.trim() ? sentence.trim().split(/\s+/).length : 0;
                                const hasVocab = challengeWords.some(w => sentence.toLowerCase().includes(w));
                                const isValid = wordCount >= 5 && hasVocab;
                                const isDirty = sentence.length > 0;

                                return (
                                    <TextField
                                        key={idx}
                                        fullWidth
                                        label={`Sentence ${idx + 1}`}
                                        value={sentence}
                                        onChange={(e) => handleSentenceChange(idx, e.target.value)}
                                        placeholder={`Use a word from the bank...`}
                                        error={isDirty && !isValid}
                                        helperText={
                                            isDirty && !isValid
                                                ? (!hasVocab ? "Must include a vocabulary word" : "Must be at least 5 words")
                                                : ""
                                        }
                                        InputProps={{
                                            endAdornment: isValid && <CheckIcon color="success" fontSize="small" />
                                        }}
                                    />
                                );
                            })}
                        </Stack>
                    </CardContent>
                </Card>

                {/* Complete Button */}
                <Box mt={4}>
                    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={2}>
                        <Button
                            fullWidth
                            variant="outlined"
                            size="large"
                            onClick={() => onComplete(true)}
                            sx={{
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: 'text.secondary',
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                    bgcolor: 'rgba(0,0,0,0.05)'
                                }
                            }}
                        >
                            Skip Lesson
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={handleComplete}
                            disabled={!readingComplete || summary.trim().length === 0 || !validateSentences()}
                            sx={{
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                color: '#1a4731',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #36c96a 0%, #2ec7ab 100%)',
                                },
                                '&.Mui-disabled': {
                                    background: '#e2e8f0',
                                    color: '#94a3b8'
                                }
                            }}
                        >
                            {readingComplete && summary && validateSentences() ? "Complete Lesson" : "Finish All Tasks"}
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box >
    );
}
