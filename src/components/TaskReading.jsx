import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Chip,
    Grid,
    Card,
    CardContent,
    Divider,
    Alert,
    Stack,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    MenuBook as BookIcon,
    Translate as TranslateIcon,
    QuestionAnswer as QuestionIcon,
} from '@mui/icons-material';

export function TaskReading({ lesson, onComplete }) {
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);

    const handleSubmit = () => {
        setShowFeedback(true);
        const allCorrect = lesson.content.questions.every(
            (q) => answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()
        );

        if (allCorrect) {
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
            {/* Header */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 3,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
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
            </Paper>

            <Grid container spacing={3}>
                {/* Reading Text */}
                <Grid item xs={12} md={7}>
                    <Card
                        elevation={2}
                        sx={{
                            height: '100%',
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <CardContent sx={{ p: 4 }}>
                            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                <BookIcon color="primary" />
                                <Typography variant="h6" fontWeight={600}>
                                    Reading Passage
                                </Typography>
                            </Stack>
                            <Divider sx={{ mb: 3 }} />
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
                </Grid>

                {/* Vocabulary & Questions */}
                <Grid item xs={12} md={5}>
                    <Stack spacing={3}>
                        {/* Vocabulary Card */}
                        <Card
                            elevation={2}
                            sx={{
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <CardContent>
                                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                    <TranslateIcon color="secondary" />
                                    <Typography variant="h6" fontWeight={600}>
                                        Vocabulary
                                    </Typography>
                                    <Chip
                                        label={lesson.content.vocabulary.length}
                                        size="small"
                                        color="secondary"
                                    />
                                </Stack>
                                <Divider sx={{ mb: 2 }} />
                                <List dense>
                                    {lesson.content.vocabulary.map((vocab, idx) => (
                                        <ListItem
                                            key={idx}
                                            sx={{
                                                px: 0,
                                                borderBottom: idx < lesson.content.vocabulary.length - 1 ? '1px solid' : 'none',
                                                borderColor: 'divider',
                                            }}
                                        >
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body1" fontWeight={600} color="primary">
                                                        {vocab.word}
                                                    </Typography>
                                                }
                                                secondary={
                                                    <Typography variant="body2" color="text.secondary" dir="rtl">
                                                        {vocab.translation}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>

                        {/* Questions Card */}
                        <Card
                            elevation={2}
                            sx={{
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <CardContent>
                                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                    <QuestionIcon color="success" />
                                    <Typography variant="h6" fontWeight={600}>
                                        Comprehension Questions
                                    </Typography>
                                </Stack>
                                <Divider sx={{ mb: 3 }} />
                                <Stack spacing={3}>
                                    {lesson.content.questions.map((q) => {
                                        const isCorrect =
                                            answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase();
                                        const showError = showFeedback && !isCorrect;

                                        return (
                                            <Box key={q.id}>
                                                <Typography variant="body2" fontWeight={500} mb={1}>
                                                    {q.text}
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
                                                                    ? 'success.50'
                                                                    : 'error.50'
                                                                : 'background.paper',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        endAdornment: showFeedback && (
                                                            <Box>
                                                                {isCorrect ? (
                                                                    <CheckIcon color="success" />
                                                                ) : (
                                                                    <CancelIcon color="error" />
                                                                )}
                                                            </Box>
                                                        ),
                                                    }}
                                                />
                                                {showError && (
                                                    <Alert severity="error" sx={{ mt: 1 }}>
                                                        Correct answer: <strong>{q.answer}</strong>
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
                                        mt: 3,
                                        py: 1.5,
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                                        },
                                    }}
                                >
                                    Check Answers
                                </Button>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
