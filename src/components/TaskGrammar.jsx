import React, { useState, useEffect } from 'react';
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
import { triggerCelebration } from '../utils/confetti';


export function TaskGrammar({ lesson, onComplete, initialAnswers = {}, onSaveAnswers }) {
    const [answers, setAnswers] = useState(initialAnswers);
    const [showFeedback, setShowFeedback] = useState(false);

    const [attempts, setAttempts] = useState({});

    // Update local state and parent state
    const handleAnswerChange = (id, value) => {
        const newAnswers = { ...answers, [id]: value };
        setAnswers(newAnswers);
        if (onSaveAnswers) {
            onSaveAnswers(newAnswers);
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lesson.id]);

    const handleSubmit = () => {
        setShowFeedback(true);

        // Track attempts for incorrect answers
        const newAttempts = { ...attempts };
        let attemptsChanged = false;

        lesson.content.exercises.forEach(ex => {
            const isCorrect = answers[ex.id]?.toLowerCase().trim() === ex.answer.toLowerCase();
            if (!isCorrect) {
                newAttempts[ex.id] = (newAttempts[ex.id] || 0) + 1;
                attemptsChanged = true;
            }
        });

        if (attemptsChanged) {
            setAttempts(newAttempts);
        }

        const allCorrect = lesson.content.exercises.every(
            (ex) => answers[ex.id]?.toLowerCase().trim() === ex.answer.toLowerCase()
        );

        if (allCorrect) {
            triggerCelebration();
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
                        <Stack direction="row" spacing={1} alignItems="center" mb={3} justifyContent="space-between">
                            <Stack direction="row" spacing={1} alignItems="center">
                                <PracticeIcon color="primary" />
                                <Typography variant="h6" fontWeight={600}>
                                    Practice Exercises
                                </Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ mb: 4 }} />

                        <Stack spacing={4}>
                            {lesson.content.exercises.map((ex, idx) => {
                                // Check if this is a multiple choice exercise (has options)
                                if (ex.options && ex.options.length > 0) {
                                    const isCorrect = answers[ex.id] === ex.answer;
                                    const showResult = showFeedback;

                                    // Helper to highlight target word
                                    const renderQuestion = () => {
                                        if (!ex.targetWord) return ex.question;
                                        const parts = ex.question.split(ex.targetWord);
                                        return (
                                            <span>
                                                {parts.map((part, i) => (
                                                    <React.Fragment key={i}>
                                                        {part}
                                                        {i < parts.length - 1 && (
                                                            <Box component="span" sx={{
                                                                fontWeight: '800',
                                                                color: 'primary.main',
                                                                textDecoration: 'underline',
                                                                mx: 0.5
                                                            }}>
                                                                {ex.targetWord}
                                                            </Box>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </span>
                                        );
                                    };

                                    return (
                                        <Box key={ex.id} sx={{ mb: 4 }}>
                                            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                                                <Box component="span" sx={{ fontWeight: 'bold', color: 'text.secondary', minWidth: '24px' }}>
                                                    {idx + 1}.
                                                </Box>
                                                <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
                                                    {renderQuestion()}
                                                </Typography>
                                            </Stack>

                                            <Stack direction="row" spacing={2} sx={{ ml: 5 }}>
                                                {ex.options.map((option) => {
                                                    const isSelected = answers[ex.id] === option;
                                                    let color = 'primary';
                                                    let variant = isSelected ? 'contained' : 'outlined';

                                                    if (showResult) {
                                                        if (option === ex.answer) {
                                                            // Reveal correct answer only if selected OR max attempts reached
                                                            if (isSelected || (attempts[ex.id] || 0) >= 2) {
                                                                color = 'success';
                                                                variant = 'contained';
                                                            }
                                                        } else if (isSelected && option !== ex.answer) {
                                                            color = 'error';
                                                            variant = 'contained';
                                                        }
                                                    }

                                                    return (
                                                        <Button
                                                            key={option}
                                                            variant={variant}
                                                            color={color}
                                                            onClick={() => handleAnswerChange(ex.id, option)}
                                                            sx={{
                                                                minWidth: 120,
                                                                textTransform: 'none',
                                                                fontWeight: 600,
                                                                fontSize: '1rem'
                                                            }}
                                                        >
                                                            {option}
                                                        </Button>
                                                    );
                                                })}
                                            </Stack>

                                            {showResult && answers[ex.id] !== ex.answer && (
                                                <Alert severity="info" sx={{ mt: 2, ml: 5, maxWidth: 400 }} variant="outlined">
                                                    {(attempts[ex.id] || 0) >= 2 ? (
                                                        <span>
                                                            👀 The correct answer is: <strong>{ex.answer}</strong>
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            ❌ Try again!
                                                        </span>
                                                    )}
                                                </Alert>
                                            )}
                                        </Box>
                                    );
                                }

                                // Default fill-in-the-blank behavior
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
                                                            placeholder={`${ex.answer[0]}...`}
                                                            value={answers[ex.id] || ''}
                                                            onChange={(e) => handleAnswerChange(ex.id, e.target.value)}
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
                                                                        : '#ffffff', // White for dark mode visibility
                                                                },
                                                                // Default visible line
                                                                '& .MuiInput-underline:before': {
                                                                    borderBottom: '2px solid #94a3b8 !important' // Always visible
                                                                },
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

                                        {showError && answers[ex.id]?.trim() && (
                                            <Alert severity="info" sx={{ mt: 1, ml: 4, maxWidth: 400 }} variant="outlined">
                                                {(attempts[ex.id] || 0) >= 3 ? (
                                                    <span>
                                                        👀 The correct answer is: <strong>{ex.answer}</strong>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        💡 Hint: The answer starts with "{ex.answer[0]}". Check the rule above!
                                                        {ex.answer.includes(' ') && ' (Note: this answer has multiple words)'}
                                                    </span>
                                                )}
                                            </Alert>
                                        )}
                                    </Box>
                                );
                            })}
                        </Stack>

                        <Stack direction="row" spacing={2} mt={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                size="large"
                                onClick={() => onComplete(true)}
                                sx={{
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
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
                                onClick={handleSubmit}
                                sx={{
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
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}
