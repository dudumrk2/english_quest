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
    Grid,
    TextField,
    Tooltip,
} from '@mui/material';
import {
    RecordVoiceOver as PronunciationIcon,
    Mic as MicIcon,
    MicOff as MicOffIcon,
    Lightbulb as TipIcon,
    CheckCircle as CheckIcon,
    GraphicEq as WaveIcon,
    Translate as TranslateIcon,
    Create as WriteIcon,
    VolumeUp as VolumeIcon,
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';

// Helper to render text with vocabulary tooltips
const renderTextWithTooltips = (text, vocabulary) => {
    if (!text || !vocabulary) return text;

    // Sort by length desc to match longest first
    const sortedVocab = [...vocabulary].sort((a, b) => b.word.length - a.word.length);

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create pattern: \b(word1|word2|...)\b
    const pattern = new RegExp(`\\b(${sortedVocab.map(v => escapeRegExp(v.word)).join('|')})\\b`, 'gi');

    const parts = text.split(pattern);

    return parts.map((part, index) => {
        const vocabMatch = sortedVocab.find(v => v.word.toLowerCase() === part.toLowerCase());

        if (vocabMatch) {
            return (
                <Tooltip
                    key={index}
                    title={<Typography variant="h6" sx={{ p: 1 }}>{vocabMatch.translation}</Typography>}
                    arrow
                    placement="top"
                    enterTouchDelay={0}
                >
                    <span
                        style={{
                            fontWeight: 'bold',
                            color: '#1976d2',
                            cursor: 'help',
                            borderBottom: '2px dotted #1976d2',
                            transition: 'all 0.2s',
                            display: 'inline-block',
                            margin: '0 2px',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#1976d2';
                            e.target.style.color = 'white';
                            e.target.style.borderRadius = '4px';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#1976d2';
                            e.target.style.borderRadius = '0px';
                        }}
                    >
                        {part}
                    </span>
                </Tooltip>
            );
        }
        return part;
    });
};

export function TaskPronunciation({ lesson, onComplete, initialAnswers = {}, onSaveAnswers, onClearAnswers }) {
    const [attempts, setAttempts] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [summary, setSummary] = useState(initialAnswers.summary || '');
    const [readingComplete, setReadingComplete] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const recognitionRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lesson.id]);

    const handleSummaryChange = (e) => {
        const value = e.target.value;
        setSummary(value);
        if (onSaveAnswers) {
            onSaveAnswers({ summary: value });
        }
    };

    // Clear logic moved to Dashboard

    const startRecording = async () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Speech recognition not supported in this browser. Please use Chrome or Edge.");
            setFeedback({
                transcript: "Simulation mode (browser not supported)",
                accuracy: 100,
                message: "Browser not supported, skipping check."
            });
            setReadingComplete(true);
            return;
        }

        // Start audio recording for playback
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
            };

            mediaRecorderRef.current.start();
        } catch (error) {
            console.error("Could not access microphone:", error);
        }

        // Start speech recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = 'en-US';
        recognitionRef.current.continuous = true; // Changed to continuous
        recognitionRef.current.interimResults = true;

        setIsRecording(true);
        setFeedback(null);
        setAudioURL(null);

        let finalTranscript = '';

        recognitionRef.current.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript + ' ';
                } else {
                    interimTranscript += transcript;
                }
            }
            // Store the accumulated transcript
            recognitionRef.current.finalTranscript = finalTranscript;
        };

        recognitionRef.current.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            if (event.error !== 'no-speech') {
                setIsRecording(false);
                if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                    mediaRecorderRef.current.stop();
                }
            }
        };

        recognitionRef.current.start();
    };

    const stopRecording = () => {
        if (recognitionRef.current) {
            const finalText = recognitionRef.current.finalTranscript || '';
            recognitionRef.current.stop();
            if (finalText.trim()) {
                analyzePronunciation(finalText.trim());
            } else {
                setFeedback({
                    transcript: "",
                    accuracy: 0,
                    message: "No speech detected. Please try again."
                });
            }
        }

        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }

        setIsRecording(false);
    };

    const analyzePronunciation = (transcript) => {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        // Simple analysis: word count match or similarity
        const targetWords = lesson.content.text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(/\s+/);
        const spokenWords = transcript.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(/\s+/);

        // Calculate simple overlap
        const overlap = targetWords.filter(word => spokenWords.includes(word)).length;
        const accuracy = Math.min(100, Math.round((overlap / targetWords.length) * 100));

        setFeedback({
            transcript,
            accuracy,
            message: accuracy > 70 ? "Excellent pronunciation!" : "Good try! Focus on clear articulation."
        });

        if (newAttempts >= 3 || accuracy > 80) {
            setReadingComplete(true);
            if (accuracy > 80) triggerCelebration();
        }
    };

    const handleComplete = () => {
        if (readingComplete && summary.trim().length > 0) {
            onComplete();
        }
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: 3,
                    mb: 4,
                    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                    color: '#1a4731',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <PronunciationIcon sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700} sx={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={500}>
                            Read Aloud Mission
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                {/* Clear logic moved to Dashboard */}
            </Box>

            <Stack spacing={4}>
                {/* Reading Text Card */}
                <Card elevation={3} sx={{ position: 'relative', overflow: 'visible' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="overline" color="text.secondary" fontWeight={600}>
                            Read this text aloud:
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography
                            variant="h5"
                            align="center"
                            sx={{
                                fontFamily: '"Georgia", serif',
                                lineHeight: 1.8,
                                color: '#1a202c', // Force dark text
                                my: 2,
                                p: 2,
                                bgcolor: '#f8fafc',
                                borderRadius: 2,
                                border: '1px solid #e2e8f0'
                            }}
                            component="div"
                        >
                            {renderTextWithTooltips(lesson.content.text, lesson.content.vocabulary)}
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
                        {/* Start/Stop Recording Button */}
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
                                onClick={isRecording ? stopRecording : startRecording}
                                disabled={attempts >= 3 && !feedback?.accuracy > 80}
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
                            borderColor: feedback?.accuracy > 70 ? 'success.main' : 'warning.main',
                            bgcolor: feedback?.accuracy > 70 ? '#f0fdf4' : '#fffbeb'
                        }}
                    >
                        <CardContent>
                            <Stack spacing={2}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6" fontWeight={600}>
                                        Analysis
                                    </Typography>
                                    <Chip
                                        label={`${feedback?.accuracy}% Accuracy`}
                                        color={feedback?.accuracy > 70 ? "success" : "warning"}
                                        icon={feedback?.accuracy > 70 ? <CheckIcon /> : <WaveIcon />}
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
                                        color={feedback?.accuracy > 70 ? "success" : "warning"}
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                    <Typography variant="body2" color={feedback?.accuracy > 70 ? "success.main" : "warning.dark"} mt={1} fontWeight={500}>
                                        {feedback?.message}
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Fade>

                {/* Hebrew Summary Section */}
                <Card elevation={2} sx={{ mt: 4 }}>
                    <CardContent sx={{ p: 3 }}>
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

                {/* Complete Button */}
                <Box mt={4}>
                    <Stack direction="row" spacing={2}>
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
                            disabled={!readingComplete || summary.trim().length === 0}
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
                            {readingComplete ? "Complete Lesson" : "Finish Reading First"}
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box >
    );
}
