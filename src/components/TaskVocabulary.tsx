import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Stack,
    IconButton,
    TextField,
    Alert,
} from '@mui/material';
import {
    VolumeUp,
    CheckCircle,
    Cancel,
    Translate as TranslateIcon
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';
import { lessons } from '../data/lessons';
import { TaskVocabularyProps, VocabularyItem, VocabularyAnswers } from '../types';

export function TaskVocabulary({ lesson, onComplete, initialAnswers = {}, onSaveAnswers }: TaskVocabularyProps) {
    const [words, setWords] = useState<VocabularyItem[]>([]);
    const [answers, setAnswers] = useState<VocabularyAnswers['answers']>(initialAnswers?.answers || {});
    const [showFeedback, setShowFeedback] = useState(false);
    const [completedCount, setCompletedCount] = useState(0);
    const [attempts, setAttempts] = useState<Record<string, number>>({});

    useEffect(() => {
        window.scrollTo(0, 0);

        // Aggregate vocabulary from the current week
        const weekWords: VocabularyItem[] = [];
        const seenWords = new Set<string>();

        lessons.forEach((l) => {
            if (l.week !== lesson.week) return;

            const addWord = (item: VocabularyItem) => {
                const normalizedWord = item.word.toLowerCase().trim();
                if (!seenWords.has(normalizedWord)) {
                    seenWords.add(normalizedWord);
                    weekWords.push(item);
                }
            };

            // Type guard to check if content has vocabulary
            if ('vocabulary' in l.content && Array.isArray(l.content.vocabulary)) {
                l.content.vocabulary.forEach(addWord);
            }

            // Type guard to check if content has pairs
            if ('pairs' in l.content && Array.isArray(l.content.pairs)) {
                l.content.pairs.forEach(addWord);
            }
        });

        setWords(weekWords);
    }, [lesson.week]);

    const handleAnswerChange = (word: string, value: string) => {
        const newAnswers = { ...answers, [word]: value };
        setAnswers(newAnswers);
        if (onSaveAnswers) {
            onSaveAnswers({ answers: newAnswers });
        }
    };

    // Clear logic moved to Dashboard

    const speak = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    const handleCheck = () => {
        setShowFeedback(true);
        let correct = 0;
        const newAttempts = { ...attempts };

        words.forEach(w => {
            const userAnswer = answers?.[w.word]?.trim() || '';
            const isCorrect = checkAnswer(userAnswer, w.translation);

            if (isCorrect) {
                correct++;
            } else {
                // Increment attempts for incorrect answers
                newAttempts[w.word] = (newAttempts[w.word] || 0) + 1;
            }
        });

        setAttempts(newAttempts);
        setCompletedCount(correct);

        if (correct === words.length) {
            triggerCelebration();
            setTimeout(() => onComplete(), 2000);
        }
    };

    const checkAnswer = (user: string, correct: string) => {
        if (!user) return false;
        // Simple fuzzy match: remove special chars, lowercase
        const normalize = (s: string) => s.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase().trim();
        const userNorm = normalize(user);

        // Handle multiple correct answers split by "/"
        const correctOptions = correct.split('/').map(normalize);
        return correctOptions.some(opt => opt === userNorm || userNorm.includes(opt));
    };

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 1, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: { xs: 2, md: 3 },
                    mb: 4,
                    background: 'linear-gradient(135deg, #1cb5e0 0%, #000851 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <TranslateIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                            Weekly Vocabulary Review
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            Week {lesson.week} • {words.length} Words to Review
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                {/* Clear logic moved to Dashboard */}
            </Box>

            <Card elevation={3}>
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Grid container spacing={4}>
                        {words.map((item, index) => {
                            const isCorrect = checkAnswer(answers?.[item.word] || '', item.translation);
                            const isError = showFeedback && !isCorrect;
                            const attemptCount = attempts[item.word] || 0;

                            return (
                                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            border: '2px solid',
                                            borderColor: isError ? 'error.main' : isCorrect && showFeedback ? 'success.main' : 'divider',
                                            // Removed bgcolor change to avoid contrast issues
                                            position: 'relative',
                                            transition: 'border-color 0.3s'
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
                                            value={answers?.[item.word] || ''}
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

                                        {isError && attemptCount >= 3 && (
                                            <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block', fontWeight: 'bold' }} dir="rtl">
                                                נכון: {item.translation}
                                            </Typography>
                                        )}
                                        {isError && attemptCount < 3 && (
                                            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
                                                {item.context ? `hint: ${item.context}` : "Try again..."}
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
