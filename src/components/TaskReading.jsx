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
    Tooltip,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    MenuBook as BookIcon,
    Translate as TranslateIcon,
    QuestionAnswer as QuestionIcon,
    Create as WriteIcon,
} from '@mui/icons-material';

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
                            component="div"
                            sx={{
                                lineHeight: 2,
                                fontSize: '1.2rem',
                                whiteSpace: 'pre-line',
                                color: 'text.primary',
                            }}
                        >
                            {renderTextWithTooltips(lesson.content.text, lesson.content.vocabulary)}
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
