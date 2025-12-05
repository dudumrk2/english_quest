import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Stack,
    IconButton,
    Grid,
    Alert,
    Divider
} from '@mui/material';
import {
    VolumeUp,
    CheckCircle,
    Cancel,
    Translate as TranslateIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';
import { lessons } from '../data/lessons';

export function TaskVocabulary({ lesson, onComplete, initialAnswers = {}, onSaveAnswers, onClearAnswers }) {
    const [words, setWords] = useState([]);
    const [answers, setAnswers] = useState(initialAnswers);
    const [showFeedback, setShowFeedback] = useState(false);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Aggregate vocabulary from the current week
        const weekWords = [];
        const seenWords = new Set();

        lessons.forEach(l => {
            if (l.week === lesson.week && l.content.vocabulary) {
                l.content.vocabulary.forEach(v => {
                    // Avoid duplicates based on the English word (case-insensitive)
                    const normalizedWord = v.word.toLowerCase().trim();
                    if (!seenWords.has(normalizedWord)) {
                        seenWords.add(normalizedWord);
                        weekWords.push(v);
                    }
                });
            }
        });

        // Shuffle words for better practice? Maybe keep them in order for now.
        setWords(weekWords);
        setWords(weekWords);
    }, [lesson.week]);

    const handleAnswerChange = (word, value) => {
        const newAnswers = { ...answers, [word]: value };
        setAnswers(newAnswers);
        if (onSaveAnswers) {
            onSaveAnswers(newAnswers);
        }
    };

    const handleClear = () => {
        if (window.confirm('Are you sure you want to clear all answers?')) {
            setAnswers({});
            setShowFeedback(false);
            setCompletedCount(0);
            if (onClearAnswers) {
                onClearAnswers();
            }
        }
    };

    const speak = (text) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    const handleCheck = () => {
        setShowFeedback(true);
        let correct = 0;

        words.forEach(w => {
            const userAnswer = answers[w.word]?.trim() || '';
            if (checkAnswer(userAnswer, w.translation)) {
                correct++;
            }
        });

        setCompletedCount(correct);

        if (correct === words.length) {
            setTimeout(() => onComplete(), 2000);
        }
    };

    const checkAnswer = (user, correct) => {
        if (!user) return false;
        // Simple fuzzy match: remove special chars, lowercase
        const normalize = (s) => s.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase().trim();
        const userNorm = normalize(user);

        // Handle multiple correct answers split by "/"
        const correctOptions = correct.split('/').map(normalize);
        return correctOptions.some(opt => opt === userNorm || userNorm.includes(opt));
    };

    const getStatusColor = (word) => {
        if (!showFeedback) return 'primary.main';
        const isCorrect = checkAnswer(answers[word.word], word.translation);
        return isCorrect ? 'success.main' : 'error.main';
    };

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: 3,
                    mb: 4,
                    background: 'linear-gradient(135deg, #1cb5e0 0%, #000851 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <TranslateIcon sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700}>
                            Weekly Vocabulary Review
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                            Week {lesson.week} • {words.length} Words to Review
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                {Object.keys(answers).length > 0 && (
                    <Button
                        startIcon={<DeleteIcon />}
                        color="error"
                        onClick={handleClear}
                        sx={{ textTransform: 'none' }}
                    >
                        Clear Answers
                    </Button>
                )}
            </Box>

            <Card elevation={3}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={4}>
                        {words.map((item, index) => {
                            const isCorrect = checkAnswer(answers[item.word], item.translation);
                            const isError = showFeedback && !isCorrect;

                            return (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            bgcolor: isError ? '#fff5f5' : isCorrect && showFeedback ? '#f0fdf4' : 'transparent',
                                            position: 'relative'
                                        }}
                                    >
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                                            <Typography variant="h6" fontWeight="bold">
                                                {item.word}
                                            </Typography>
                                            <IconButton onClick={() => speak(item.word)} color="primary" size="small">
                                                <VolumeUp />
                                            </IconButton>
                                        </Stack>

                                        <TextField
                                            fullWidth
                                            size="small"
                                            placeholder="תרגום לעברית..."
                                            dir="rtl"
                                            value={answers[item.word] || ''}
                                            onChange={(e) => handleAnswerChange(item.word, e.target.value)}
                                            error={isError}
                                            InputProps={{
                                                endAdornment: showFeedback && (
                                                    <Box sx={{ ml: 1 }}>
                                                        {isCorrect ? <CheckCircle color="success" fontSize="small" /> : <Cancel color="error" fontSize="small" />}
                                                    </Box>
                                                )
                                            }}
                                        />

                                        {isError && (
                                            <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block', fontWeight: 'bold' }} dir="rtl">
                                                נכון: {item.translation}
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Box mt={6}>
                        {showFeedback && completedCount < words.length && (
                            <Alert severity="warning" sx={{ mb: 2 }}>
                                You got {completedCount} out of {words.length} correct. Try to fix your mistakes!
                            </Alert>
                        )}

                        <Stack direction="row" spacing={2} justifyContent="center">
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => onComplete(true)}
                                sx={{ borderRadius: 8, px: 4 }}
                            >
                                Skip Review
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleCheck}
                                sx={{
                                    borderRadius: 8,
                                    px: 6,
                                    background: 'linear-gradient(135deg, #1cb5e0 0%, #000851 100%)'
                                }}
                            >
                                Check My Translations
                            </Button>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
