import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Divider,
    Alert,
    Stack,
    Paper,
} from '@mui/material';
import {
    School as GrammarIcon,
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    Lightbulb as TipIcon,
    Assignment as PracticeIcon,
} from '@mui/icons-material';

export function TaskGrammar({ lesson, onComplete }) {
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);

    const handleSubmit = () => {
        setShowFeedback(true);
        const allCorrect = lesson.content.exercises.every(
            (ex) => answers[ex.id]?.toLowerCase().trim() === ex.answer.toLowerCase()
        );

        if (allCorrect) {
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: 3,
                    mb: 4,
                    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <GrammarIcon sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700} sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                            Grammar Mission
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Stack spacing={4}>
                {/* Grammar Rule Card */}
                <Card elevation={3} sx={{ borderLeft: '6px solid #f6d365' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Stack direction="row" spacing={2} alignItems="start" mb={2}>
                            <TipIcon color="warning" sx={{ fontSize: 32, mt: 0.5 }} />
                            <Box>
                                <Typography variant="h5" fontWeight={700} gutterBottom>
                                    The Rule
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '1.2rem',
                                        lineHeight: 1.8,
                                        whiteSpace: 'pre-line',
                                        color: 'text.primary',
                                    }}
                                >
                                    {lesson.content.rule}
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>

                {/* Practice Exercises Card */}
                <Card elevation={2}>
                    <CardContent sx={{ p: 4 }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={3}>
                            <PracticeIcon color="primary" />
                            <Typography variant="h6" fontWeight={600}>
                                Practice Exercises
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 4 }} />

                        <Stack spacing={4}>
                            {lesson.content.exercises.map((ex, idx) => {
                                // Split question by '_____' or just use the question if no placeholder
                                const parts = ex.question.split(/_{3,}/);
                                const isCorrect = answers[ex.id]?.toLowerCase().trim() === ex.answer.toLowerCase();
                                const showError = showFeedback && !isCorrect;

                                return (
                                    <Box key={ex.id}>
                                        <Typography variant="h6" sx={{ lineHeight: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                                            <Box component="span" sx={{ fontWeight: 'bold', color: 'text.secondary', mr: 1 }}>
                                                {idx + 1}.
                                            </Box>
                                            {parts.map((part, i) => (
                                                <React.Fragment key={i}>
                                                    <span>{part}</span>
                                                    {i < parts.length - 1 && (
                                                        <TextField
                                                            variant="standard"
                                                            size="small"
                                                            value={answers[ex.id] || ''}
                                                            onChange={(e) => setAnswers({ ...answers, [ex.id]: e.target.value })}
                                                            error={showError}
                                                            sx={{
                                                                width: 140,
                                                                mx: 1,
                                                                '& .MuiInputBase-input': {
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '1.1rem',
                                                                    color: showFeedback
                                                                        ? isCorrect
                                                                            ? 'success.main'
                                                                            : 'error.main'
                                                                        : '#1a202c', // Force dark text
                                                                },
                                                                // Default visible line
                                                                '& .MuiInput-underline:before': {
                                                                    borderBottom: '2px solid #94a3b8 !important' // Always visible slate color
                                                                },
                                                                // Hover state
                                                                '& .MuiInput-underline:hover:before': {
                                                                    borderBottom: '2px solid #64748b !important' // Darker on hover
                                                                },
                                                                // Focus state (active)
                                                                '& .MuiInput-underline:after': {
                                                                    borderBottom: '3px solid #f6d365' // Theme color when typing
                                                                },
                                                            }}
                                                            InputProps={{
                                                                endAdornment: showFeedback && (
                                                                    <Box sx={{ ml: 1 }}>
                                                                        {isCorrect ? (
                                                                            <CheckIcon color="success" fontSize="small" />
                                                                        ) : (
                                                                            <CancelIcon color="error" fontSize="small" />
                                                                        )}
                                                                    </Box>
                                                                ),
                                                            }}
                                                        />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </Typography>

                                        {showError && (
                                            <Alert severity="error" sx={{ mt: 1, ml: 4, maxWidth: 400 }} variant="outlined">
                                                Correct answer: <strong>{ex.answer}</strong>
                                            </Alert>
                                        )}
                                    </Box>
                                );
                            })}
                        </Stack>

                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={handleSubmit}
                            sx={{
                                mt: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #f5c94c 0%, #fc8e6d 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: 4,
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Check Answers
                        </Button>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}
