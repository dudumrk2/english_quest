import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Chip,
    Card,
    CardContent,
    Divider,
    Alert,
    Stack,
    Grid,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    MenuBook as BookIcon,
    Translate as TranslateIcon,
    QuestionAnswer as QuestionIcon,
    Create as WriteIcon,
} from '@mui/icons-material';

// Robust "Safe Flip" Card Component
function VocabFlipCard({ word, translation }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showBack, setShowBack] = useState(false);

    const handleFlip = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        // 1. Rotate to 90 degrees (edge on)
        // 2. Swap content
        // 3. Rotate back to 0 degrees

        setTimeout(() => {
            setShowBack(!showBack);
            setIsFlipped(!isFlipped);
        }, 150); // Swap content halfway through

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
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple for English
                color: 'white',
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
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
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
                        letterSpacing: '0.5px'
                    }}
                >
                    {showBack ? "Tap for English" : "Tap for Hebrew"}
                </Typography>
            </CardContent>
        </Card>
    );
}

export function TaskReading({ lesson, onComplete }) {
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);
    const [summary, setSummary] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lesson.id]);

    const handleSubmit = () => {
        setShowFeedback(true);
        const allCorrect = lesson.content.questions.every(
            (q) => answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()
        );

        if (allCorrect && summary.trim().length > 0) {
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: 3,
                    mb: 4,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <BookIcon sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                            Reading Comprehension
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Stack spacing={3}>
                {/* Reading Text */}
                <Card elevation={2}>
                    <CardContent sx={{ p: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                            <BookIcon color="primary" />
                            <Typography variant="h6" fontWeight={600}>
                                Reading Passage
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.8,
                                fontSize: '1.1rem',
                                whiteSpace: 'pre-line',
                                color: 'text.primary',
                            }}
                        >
                            {lesson.content.text}
                        </Typography>
                    </CardContent>
                </Card>

                {/* Vocabulary Section */}
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
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 2, textAlign: 'center', fontStyle: 'italic' }}
                        >
                            💡 Click on any card to see the Hebrew translation
                        </Typography>
                    </CardContent>
                </Card>

                {/* Questions Section */}
                <Card elevation={2}>
                    <CardContent sx={{ p: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                            <QuestionIcon color="success" />
                            <Typography variant="h6" fontWeight={600}>
                                Comprehension Questions
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Stack spacing={2.5}>
                            {lesson.content.questions.map((q, idx) => {
                                const isCorrect =
                                    answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase();
                                const showError = showFeedback && !isCorrect;

                                return (
                                    <Box key={q.id}>
                                        <Typography variant="body1" fontWeight={500} mb={1}>
                                            {idx + 1}. {q.text}
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            value={answers[q.id] || ''}
                                            onChange={(e) =>
                                                setAnswers({ ...answers, [q.id]: e.target.value })
                                            }
                                            placeholder="Type your answer..."
                                            error={showError}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: showFeedback
                                                        ? isCorrect
                                                            ? 'rgba(76, 175, 80, 0.08)'
                                                            : 'rgba(244, 67, 54, 0.08)'
                                                        : 'background.paper',
                                                },
                                            }}
                                            InputProps={{
                                                endAdornment: showFeedback && (
                                                    <Box>
                                                        {isCorrect ? (
                                                            <CheckIcon color="success" fontSize="small" />
                                                        ) : (
                                                            <CancelIcon color="error" fontSize="small" />
                                                        )}
                                                    </Box>
                                                ),
                                            }}
                                        />
                                        {showError && answers[q.id]?.trim() && (
                                            <Alert severity="info" sx={{ mt: 1 }} variant="outlined">
                                                💡 Hint: Look for the answer in the text. It starts with "{q.answer.substring(0, Math.min(4, q.answer.length))}..."
                                            </Alert>
                                        )}
                                    </Box>
                                );
                            })}
                        </Stack>
                    </CardContent>
                </Card>

                {/* Hebrew Summary Section */}
                <Card elevation={2}>
                    <CardContent sx={{ p: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                            <WriteIcon color="warning" />
                            <Typography variant="h6" fontWeight={600}>
                                Summary in Hebrew - סיכום בעברית
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" mb={2} dir="rtl">
                            סכם את הקטע שקראת בעברית (לפחות 2-3 משפטים)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="כתוב את הסיכום שלך כאן..."
                            dir="rtl"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    fontFamily: '"Arial", sans-serif',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                },
                            }}
                        />
                        {showFeedback && summary.trim().length === 0 && (
                            <Alert severity="warning" sx={{ mt: 2 }} variant="outlined">
                                Please write a summary in Hebrew to complete the lesson.
                            </Alert>
                        )}
                    </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    sx={{
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                        },
                    }}
                >
                    Check Answers & Complete Lesson
                </Button>
            </Stack>
        </Box>
    );
}
