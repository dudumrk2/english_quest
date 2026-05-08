import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
    Stack,
    Alert,
    Chip,
    LinearProgress,
    Divider,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    Lightbulb as TipIcon,
    Assignment as PracticeIcon,
    EmojiEvents as TrophyIcon,
    MenuBook as ReviewIcon,
} from '@mui/icons-material';
import type { GrammarDay, GrammarExercise, FillInExercise, MultipleChoiceExercise } from '../types/grammar-practice';
import { isAnswerCorrect } from '../utils/validation';
import { triggerCelebration } from '../utils/confetti';
import { GrammarIntro } from './GrammarIntro';

interface GrammarPracticeLessonProps {
    day: GrammarDay;
    initialAnswers?: Record<string, string>;
    onBack: () => void;
    onComplete: (dayId: number, answers: Record<string, string>) => void;
    onSaveAnswers?: (answers: Record<string, string>) => void;
}

export function GrammarPracticeLesson({
    day,
    initialAnswers = {},
    onBack,
    onComplete,
    onSaveAnswers,
}: GrammarPracticeLessonProps) {
    const [phase, setPhase] = useState<'intro' | 'practice'>('intro');
    const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
    const [showFeedback, setShowFeedback] = useState(false);
    const [attempts, setAttempts] = useState<Record<string, number>>({});
    const [lastChecked, setLastChecked] = useState<Record<string, string>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [day.id]);

    if (phase === 'intro') {
        return (
            <GrammarIntro
                day={day}
                onComplete={() => setPhase('practice')}
                onBack={onBack}
            />
        );
    }

    const handleChange = (id: string, value: string) => {
        const updated = { ...answers, [id]: value };
        setAnswers(updated);
        onSaveAnswers?.(updated);
    };

    const isExerciseCorrect = (ex: GrammarExercise, userAnswer: string): boolean => {
        if (!userAnswer) return false;
        const correct = isAnswerCorrect(userAnswer, ex.answer);
        if (correct) return true;
        if (ex.type === 'fill_in') {
            const acceptAlso = (ex as FillInExercise).acceptAlso;
            if (acceptAlso) {
                return acceptAlso.some(alt => isAnswerCorrect(userAnswer, alt));
            }
        }
        return false;
    };

    const handleCheckAll = () => {
        setShowFeedback(true);

        // Track attempts for incorrect answers
        const newAttempts = { ...attempts };
        const newLastChecked = { ...lastChecked };

        day.exercises.forEach(ex => {
            const currentVal = answers[ex.id]?.trim() || '';
            const lastVal = lastChecked[ex.id]?.trim() || '';
            const correct = isExerciseCorrect(ex, currentVal);

            if (!correct && currentVal !== '' && currentVal !== lastVal) {
                newAttempts[ex.id] = (newAttempts[ex.id] || 0) + 1;
            }
            newLastChecked[ex.id] = currentVal;
        });

        setAttempts(newAttempts);
        setLastChecked(newLastChecked);

        const allCorrect = day.exercises.every(ex =>
            isExerciseCorrect(ex, answers[ex.id]?.trim() || '')
        );

        if (allCorrect) {
            triggerCelebration();
            setTimeout(() => onComplete(day.id, answers), 1500);
        }
    };

    const handleTryAgain = () => {
        setShowFeedback(false);
    };

    const correctCount = day.exercises.filter(ex =>
        isExerciseCorrect(ex, answers[ex.id]?.trim() || '')
    ).length;

    const allAnswered = day.exercises.every(ex => (answers[ex.id] || '').trim() !== '');
    const allCorrect = correctCount === day.exercises.length;
    // Don't reveal correctness in the header until the user clicks "Check Answers" —
    // otherwise they may see "13/13 correct" while typing and exit without checking,
    // which leaves the day unmarked and the next day locked.
    const displayedCount = showFeedback ? correctCount : 0;
    const progressPercent = Math.round((displayedCount / day.exercises.length) * 100);

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 1, md: 3 } }}>
            {/* Back + Review buttons */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} flexWrap="wrap" gap={1}>
                <Button
                    startIcon={<BackIcon />}
                    onClick={onBack}
                    sx={{ color: 'text.secondary', textTransform: 'none' }}
                >
                    Back to Grammar Practice
                </Button>
                <Button
                    startIcon={<ReviewIcon />}
                    onClick={() => setPhase('intro')}
                    variant="outlined"
                    size="small"
                    sx={{
                        textTransform: 'none',
                        borderColor: 'rgba(16,185,129,0.4)',
                        color: '#34d399',
                        '&:hover': { borderColor: '#10b981', bgcolor: 'rgba(16,185,129,0.08)' },
                    }}
                >
                    📖 Review Explanation
                </Button>
            </Stack>

            {/* Header */}
            <Box
                sx={{
                    p: { xs: 2, md: 3 },
                    mb: 4,
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                    <Box>
                        <Typography variant="caption" sx={{ opacity: 0.85, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                            Day {day.id} · {day.tense}
                        </Typography>
                        <Typography variant="h4" fontWeight={700} sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)', fontSize: { xs: '1.4rem', md: '2rem' } }}>
                            {day.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                            Focus: {day.focus}
                        </Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="h4" fontWeight={800}>
                            {displayedCount}/{day.exercises.length}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>correct</Typography>
                    </Box>
                </Stack>

                {/* Progress bar */}
                <Box mt={2}>
                    <LinearProgress
                        variant="determinate"
                        value={progressPercent}
                        sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'rgba(255,255,255,0.25)',
                            '& .MuiLinearProgress-bar': {
                                bgcolor: 'white',
                                borderRadius: 4,
                            },
                        }}
                    />
                </Box>
            </Box>

            <Stack spacing={4}>
                {/* Explanation Card */}
                <Card
                    elevation={3}
                    sx={{
                        border: '1px solid rgba(16,185,129,0.3)',
                        borderLeft: '6px solid #10b981',
                    }}
                >
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <TipIcon sx={{ color: '#10b981', fontSize: 28 }} />
                            <Typography variant="h5" fontWeight={700}>
                                Grammar Explanation
                            </Typography>
                        </Stack>

                        {/* Formula */}
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                bgcolor: 'rgba(16,185,129,0.08)',
                                border: '1px solid rgba(16,185,129,0.2)',
                                mb: 3,
                            }}
                        >
                            <Typography variant="caption" color="success.main" fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                Formula
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontFamily: 'monospace', fontSize: '1rem', whiteSpace: 'pre-line', mt: 0.5, color: 'text.primary', fontWeight: 600 }}
                            >
                                {day.explanation.formula}
                            </Typography>
                        </Box>

                        {/* Usage */}
                        <Box mb={3}>
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={700} gutterBottom>
                                When to use it
                            </Typography>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
                                {day.explanation.usage}
                            </Typography>
                        </Box>

                        {/* Signal words */}
                        {day.explanation.signalWords.length > 0 && (
                            <Box mb={3}>
                                <Typography variant="subtitle2" color="text.secondary" fontWeight={700} gutterBottom>
                                    Signal words
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                    {day.explanation.signalWords.map(word => (
                                        <Chip
                                            key={word}
                                            label={word}
                                            size="small"
                                            sx={{
                                                bgcolor: 'rgba(16,185,129,0.1)',
                                                color: '#34d399',
                                                border: '1px solid rgba(16,185,129,0.25)',
                                                fontWeight: 600,
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        )}

                        {/* Examples table */}
                        <Box>
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={700} gutterBottom>
                                Examples
                            </Typography>
                            <Table size="small" sx={{ '& td': { py: 1, borderColor: 'rgba(255,255,255,0.08)' } }}>
                                <TableBody>
                                    {[
                                        { label: 'Positive', value: day.explanation.examples.positive },
                                        { label: 'Negative', value: day.explanation.examples.negative },
                                        { label: 'Yes/No Question', value: day.explanation.examples.yesNo },
                                        { label: 'WH Question', value: day.explanation.examples.wh },
                                    ].map(row => (
                                        <TableRow key={row.label}>
                                            <TableCell sx={{ fontWeight: 700, color: 'text.secondary', width: 160, whiteSpace: 'nowrap' }}>
                                                {row.label}
                                            </TableCell>
                                            <TableCell sx={{ fontStyle: 'italic', color: 'text.primary' }}>
                                                {row.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </CardContent>
                </Card>

                {/* Exercises Card */}
                <Card elevation={2} sx={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                            <PracticeIcon color="primary" />
                            <Typography variant="h6" fontWeight={600}>
                                Practice Exercises
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Fill in all {day.exercises.length} exercises, then click "Check Answers" at the bottom.
                        </Typography>
                        <Divider sx={{ mb: 4 }} />

                        <Stack spacing={5}>
                            {day.exercises.map((ex, idx) => (
                                <ExerciseItem
                                    key={ex.id}
                                    exercise={ex}
                                    index={idx}
                                    answer={answers[ex.id] || ''}
                                    showFeedback={showFeedback}
                                    attemptCount={attempts[ex.id] || 0}
                                    onChange={handleChange}
                                    isCorrect={showFeedback ? isExerciseCorrect(ex, answers[ex.id]?.trim() || '') : null}
                                />
                            ))}
                        </Stack>

                        {/* Single Check / Try Again button at the bottom */}
                        <Box sx={{ mt: 5, textAlign: 'center' }}>
                            {!showFeedback ? (
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleCheckAll}
                                    disabled={!allAnswered}
                                    sx={{
                                        px: 6,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        textTransform: 'none',
                                        background: 'linear-gradient(135deg, #10b981, #059669)',
                                        borderRadius: 3,
                                        boxShadow: '0 4px 20px rgba(16,185,129,0.35)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #059669, #047857)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 25px rgba(16,185,129,0.45)',
                                        },
                                        '&.Mui-disabled': {
                                            background: 'rgba(255,255,255,0.1)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    ✅ Check Answers
                                </Button>
                            ) : !allCorrect ? (
                                <Stack spacing={2} alignItems="center">
                                    <Typography variant="body1" color="text.secondary">
                                        You got {correctCount} out of {day.exercises.length} correct. Fix the errors above and try again!
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={handleTryAgain}
                                        sx={{
                                            px: 6,
                                            py: 1.5,
                                            fontWeight: 700,
                                            fontSize: '1.1rem',
                                            textTransform: 'none',
                                            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #d97706, #b45309)',
                                                transform: 'translateY(-2px)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        🔄 Try Again
                                    </Button>
                                </Stack>
                            ) : null}
                        </Box>
                    </CardContent>
                </Card>

                {/* Complete Day button */}
                {showFeedback && allCorrect && (
                    <Card
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            border: '1px solid rgba(52,211,153,0.3)',
                            background: 'rgba(16,185,129,0.06)',
                        }}
                    >
                        <Stack spacing={1.5} alignItems="center">
                            <TrophyIcon sx={{ fontSize: 40, color: '#34d399' }} />
                            <Typography variant="h6" fontWeight={700}>
                                All exercises correct!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                You got {correctCount} out of {day.exercises.length} correct ({progressPercent}%)
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    triggerCelebration();
                                    setTimeout(() => onComplete(day.id, answers), 800);
                                }}
                                sx={{
                                    mt: 1,
                                    px: 6,
                                    py: 1.5,
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    borderRadius: 3,
                                    boxShadow: '0 4px 20px rgba(16,185,129,0.35)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #059669, #047857)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 25px rgba(16,185,129,0.45)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Complete Day {day.id}
                            </Button>
                        </Stack>
                    </Card>
                )}
            </Stack>
        </Box>
    );
}

// ─── Individual exercise component ──────────────────────────────────────────

interface ExerciseItemProps {
    exercise: GrammarExercise;
    index: number;
    answer: string;
    showFeedback: boolean;
    attemptCount: number;
    isCorrect: boolean | null;
    onChange: (id: string, value: string) => void;
}

function ExerciseItem({
    exercise,
    index,
    answer,
    showFeedback,
    attemptCount,
    isCorrect,
    onChange,
}: ExerciseItemProps) {
    if (exercise.type === 'multiple_choice') {
        const mcEx = exercise as MultipleChoiceExercise;
        return <MultipleChoiceItem
            exercise={mcEx}
            index={index}
            answer={answer}
            showFeedback={showFeedback}
            attemptCount={attemptCount}
            isCorrect={isCorrect}
            onChange={onChange}
        />;
    }

    const fiEx = exercise as FillInExercise;
    return <FillInItem
        exercise={fiEx}
        index={index}
        answer={answer}
        showFeedback={showFeedback}
        attemptCount={attemptCount}
        isCorrect={isCorrect}
        onChange={onChange}
    />;
}

// ─── Fill-in component ───────────────────────────────────────────────────────

interface FillInItemProps {
    exercise: FillInExercise;
    index: number;
    answer: string;
    showFeedback: boolean;
    attemptCount: number;
    isCorrect: boolean | null;
    onChange: (id: string, value: string) => void;
}

function FillInItem({ exercise, index, answer, showFeedback, attemptCount, isCorrect, onChange }: FillInItemProps) {
    const parts = exercise.sentence.split(/_{3,}/);
    const showError = showFeedback && isCorrect === false;

    return (
        <Box>
            <Typography
                variant="h6"
                component="div"
                sx={{ lineHeight: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}
            >
                <Box component="span" sx={{ fontWeight: 'bold', color: 'text.secondary', mr: 1 }}>
                    {index + 1}.
                </Box>
                {parts.map((part, i) => {
                    const hasBlankAfter = i < parts.length - 1;
                    return (
                        <React.Fragment key={i}>
                            <span>{part}</span>
                            {hasBlankAfter && (
                                <TextField
                                    variant="standard"
                                    size="small"
                                    placeholder={`${exercise.answer[0]}...`}
                                    value={answer}
                                    onChange={e => onChange(exercise.id, e.target.value)}
                                    sx={{
                                        width: 160,
                                        mx: 1,
                                        '& .MuiInputBase-input': {
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            color: showFeedback
                                                ? isCorrect
                                                    ? 'success.main'
                                                    : 'error.main'
                                                : '#ffffff',
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderBottom: '2px solid #94a3b8 !important',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottom: '2px solid #64748b !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottom: '3px solid #10b981',
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: showFeedback && (
                                            <Box sx={{ ml: 1 }}>
                                                {isCorrect
                                                    ? <CheckIcon color="success" fontSize="small" />
                                                    : <CancelIcon color="error" fontSize="small" />
                                                }
                                            </Box>
                                        ),
                                    }}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </Typography>

            {showFeedback && isCorrect && (
                <Typography variant="body2" color="success.main" fontWeight={700} sx={{ mt: 0.5, ml: { xs: 2, md: 4 } }}>
                    Correct!
                </Typography>
            )}

            {showError && answer.trim() && (
                <Alert
                    severity="info"
                    sx={{ mt: 1.5, ml: { xs: 2, md: 4 }, maxWidth: 440 }}
                    variant="outlined"
                >
                    {attemptCount >= 3 ? (
                        <span>
                            👀 The correct answer is: <strong>{exercise.answer}</strong>
                        </span>
                    ) : (
                        <span>
                            💡 Hint: The answer starts with &ldquo;{exercise.answer[0]}&rdquo; — check the formula above!
                        </span>
                    )}
                </Alert>
            )}
        </Box>
    );
}

// ─── Multiple choice component ───────────────────────────────────────────────

interface MultipleChoiceItemProps {
    exercise: MultipleChoiceExercise;
    index: number;
    answer: string;
    showFeedback: boolean;
    attemptCount: number;
    isCorrect: boolean | null;
    onChange: (id: string, value: string) => void;
}

function MultipleChoiceItem({ exercise, index, answer, showFeedback, attemptCount, isCorrect, onChange }: MultipleChoiceItemProps) {
    const parts = exercise.sentence.split(/_{3,}/);

    return (
        <Box>
            <Typography
                variant="h6"
                component="div"
                sx={{ lineHeight: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.5, mb: 2 }}
            >
                <Box component="span" sx={{ fontWeight: 'bold', color: 'text.secondary', mr: 1 }}>
                    {index + 1}.
                </Box>
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        <span>{part}</span>
                        {i < parts.length - 1 && (
                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    minWidth: 60,
                                    borderBottom: '2px solid #94a3b8',
                                    mx: 0.5,
                                    color: answer
                                        ? showFeedback
                                            ? isCorrect ? 'success.main' : 'error.main'
                                            : 'primary.main'
                                        : 'transparent',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                }}
                            >
                                {answer || '      '}
                            </Box>
                        )}
                    </React.Fragment>
                ))}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ ml: { xs: 3, md: 5 }, flexWrap: 'wrap', gap: 1 }} useFlexGap>
                {exercise.options.map(option => {
                    const isSelected = answer === option;
                    let color: 'primary' | 'success' | 'error' = 'primary';
                    let variant: 'contained' | 'outlined' = isSelected ? 'contained' : 'outlined';

                    if (showFeedback) {
                        if (option === exercise.answer) {
                            if (isSelected || attemptCount >= 2) {
                                color = 'success';
                                variant = 'contained';
                            }
                        } else if (isSelected && option !== exercise.answer) {
                            color = 'error';
                            variant = 'contained';
                        }
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            color={color}
                            onClick={() => onChange(exercise.id, option)}
                            disabled={showFeedback && isCorrect === true}
                            sx={{
                                minWidth: 100,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                            }}
                        >
                            {option}
                        </Button>
                    );
                })}
            </Stack>

            {showFeedback && isCorrect === false && (
                <Alert severity="info" sx={{ mt: 2, ml: { xs: 3, md: 5 }, maxWidth: 440 }} variant="outlined">
                    {attemptCount >= 2 ? (
                        <span>
                            👀 The correct answer is: <strong>{exercise.answer}</strong>
                        </span>
                    ) : (
                        <span>❌ Not quite — try a different option!</span>
                    )}
                </Alert>
            )}
            {showFeedback && isCorrect && (
                <Typography variant="body2" color="success.main" fontWeight={700} sx={{ mt: 1, ml: { xs: 3, md: 5 } }}>
                    Correct!
                </Typography>
            )}
        </Box>
    );
}
