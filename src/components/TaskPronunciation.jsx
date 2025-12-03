import React, { useState, useRef } from 'react';
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
} from '@mui/icons-material';

// Robust "Safe Flip" Card Component (Reused)
function VocabFlipCard({ word, translation }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showBack, setShowBack] = useState(false);

    const handleFlip = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        setTimeout(() => {
            setShowBack(!showBack);
            setIsFlipped(!isFlipped);
        }, 150);

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    return (
        <Card
            onClick={handleFlip}
            elevation={3}
            sx={{
                height: 120,
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, background 0.3s ease',
                transform: isAnimating ? 'rotateY(90deg)' : 'rotateY(0deg)',
                background: showBack
                    ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' // Pink for Hebrew
                    : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green for English (matching theme)
                color: 'white', // Always white text on colored card
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                '&:hover': {
                    transform: isAnimating ? 'rotateY(90deg)' : 'scale(1.02)',
                    boxShadow: 6
                }
            }}
        >
            <CardContent sx={{ width: '100%', p: 2, '&:last-child': { pb: 2 } }}>
                <Typography
                    variant={showBack ? "h5" : "h6"}
                    fontWeight={700}
                    dir={showBack ? "rtl" : "ltr"}
                    sx={{
                        mb: 1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        color: 'white' // Explicit white
                    }}
                >
                    {showBack ? translation : word}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        opacity: 0.9,
                        display: 'block',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        color: 'white' // Explicit white
                    }}
                >
                    {showBack ? "Tap for English" : "Tap for Hebrew"}
                </Typography>
            </CardContent>
        </Card>
    );
}

export function TaskPronunciation({ lesson, onComplete }) {
    const [attempts, setAttempts] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [summary, setSummary] = useState('');
    const [readingComplete, setReadingComplete] = useState(false);
    const recognitionRef = useRef(null);

    const startRecording = () => {
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

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = 'en-US';
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;

        setIsRecording(true);
        setFeedback(null);

        recognitionRef.current.onstart = () => {
            setIsRecording(true);
        };

        recognitionRef.current.onend = () => {
            setIsRecording(false);
        };

        recognitionRef.current.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            analyzePronunciation(transcript);
        };

        recognitionRef.current.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            setIsRecording(false);
            setFeedback({
                transcript: "",
                accuracy: 0,
                message: "Could not hear you. Please try again."
            });
        };

        recognitionRef.current.start();
    };

    const stopRecording = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
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
                        >
                            "{lesson.content.text}"
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

                {/* Vocabulary Section (Optional) */}
                {lesson.content.vocabulary && lesson.content.vocabulary.length > 0 && (
                    <Card elevation={2}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                <TranslateIcon color="secondary" />
                                <Typography variant="h6" fontWeight={600}>
                                    Vocabulary
                                </Typography>
                                <Chip
                                    label={`${lesson.content.vocabulary.length} words`}
                                    size="small"
                                    color="secondary"
                                />
                            </Stack>
                            <Divider sx={{ mb: 3 }} />
                            <Grid container spacing={2}>
                                {lesson.content.vocabulary.map((vocab, idx) => (
                                    <Grid item xs={6} sm={4} md={3} key={idx}>
                                        <VocabFlipCard word={vocab.word} translation={vocab.translation} />
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                )}

                {/* Recording Action Area */}
                <Box textAlign="center" py={2}>
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
                    <Typography variant="body1" color="text.secondary" mt={2}>
                        {isRecording ? "Listening... Speak clearly!" : "Tap microphone to start reading"}
                    </Typography>
                    <Typography variant="caption" display="block" color="text.disabled" mt={0.5}>
                        Attempts: {attempts} / 3
                    </Typography>
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
                            onChange={(e) => setSummary(e.target.value)}
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
                </Box>
            </Stack>
        </Box >
    );
}
