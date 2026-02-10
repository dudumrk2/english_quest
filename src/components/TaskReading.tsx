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
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    MenuBook as BookIcon,
    QuestionAnswer as QuestionIcon,
    Create as WriteIcon,
    VolumeUp,
    Stop,
    Edit as EditIcon,
    FactCheck as FactCheckIcon,
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';
import { renderTextWithHighlight } from '../utils/textRenderer';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import type { TaskReadingProps, MatchPair } from '../types';

export function TaskReading({
    lesson,
    onComplete,
    initialAnswers = {},
    onSaveAnswers
}: TaskReadingProps): React.ReactElement {
    const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers.answers || {});
    // New state for fill-in-the-blank
    const [fillInTheBlankAnswers, setFillInTheBlankAnswers] = useState<Record<string, string>>(initialAnswers.fillInTheBlankAnswers || {});
    // New state for match definitions
    const [matchDefinitionsAnswers, setMatchDefinitionsAnswers] = useState<Record<string, string>>(initialAnswers.matchDefinitionsAnswers || {});
    const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
    const [shuffledDefinitions, setShuffledDefinitions] = useState<MatchPair[]>([]);
    const [shuffledOptions, setShuffledOptions] = useState<Record<string, string[]>>({});
    const [showFeedback, setShowFeedback] = useState(false);
    const [summary, setSummary] = useState(initialAnswers.summary || '');

    const [attempts, setAttempts] = useState<Record<string, number>>({});

    useEffect(() => {
        window.scrollTo(0, 0);

        // Shuffle definitions when lesson loads
        if (lesson.content.matchDefinitions) {
            const defs = [...lesson.content.matchDefinitions.pairs];
            setShuffledDefinitions(defs.sort(() => Math.random() - 0.5));
        }

        // Shuffle fill-in-the-blank options
        if (lesson.content.fillInTheBlanks) {
            const newShuffledOptions: Record<string, string[]> = {};
            lesson.content.fillInTheBlanks.exercises.forEach(ex => {
                newShuffledOptions[ex.id] = [...ex.options].sort(() => Math.random() - 0.5);
            });
            setShuffledOptions(newShuffledOptions);
        }

        return () => {
            window.speechSynthesis.cancel();
        };
    }, [lesson.id]);

    // Use shared speech synthesis hook
    const { isPlaying, highlightRange, toggle: toggleAudio } = useSpeechSynthesis();

    const handlePlayAudio = () => {
        toggleAudio(lesson.content.text);
    };

    // Render text with vocabulary tooltips and word highlighting
    const renderContent = () => {
        return renderTextWithHighlight(
            lesson.content.text,
            lesson.content.vocabulary,
            highlightRange
        );
    };


    const handleAnswerChange = (id: string, value: string): void => {
        const newAnswers = { ...answers, [id]: value };
        setAnswers(newAnswers);
        if (onSaveAnswers) {
            onSaveAnswers({ answers: newAnswers, fillInTheBlankAnswers, matchDefinitionsAnswers, summary });
        }
    };

    const handleMatchSelect = (type: 'word' | 'definition', idOrText: string): void => {
        if (type === 'word') {
            // If clicking the same word, deselect. Otherwise select.
            setSelectedWordId(prev => prev === idOrText ? null : idOrText);
        } else if (type === 'definition') {
            // Check if this definition is already used by a word
            const existingOwner = Object.keys(matchDefinitionsAnswers).find(key => matchDefinitionsAnswers[key] === idOrText);

            if (selectedWordId) {
                // If a word is selected, try to match it with this definition
                const newAnswers = { ...matchDefinitionsAnswers };

                // Remove existing owner if any
                if (existingOwner) {
                    delete newAnswers[existingOwner];
                }

                newAnswers[selectedWordId] = idOrText;
                setMatchDefinitionsAnswers(newAnswers);
                setSelectedWordId(null); // Clear selection after match

                if (onSaveAnswers) {
                    onSaveAnswers({ answers, fillInTheBlankAnswers, matchDefinitionsAnswers: newAnswers, summary });
                }
            } else if (existingOwner) {
                // No word selected but this definition is matched - clicking removes the match
                const newAnswers = { ...matchDefinitionsAnswers };
                delete newAnswers[existingOwner];
                setMatchDefinitionsAnswers(newAnswers);
                if (onSaveAnswers) {
                    onSaveAnswers({ answers, fillInTheBlankAnswers, matchDefinitionsAnswers: newAnswers, summary });
                }
            }
        }
    };

    const handleFillInTheBlankChange = (id: string, value: string): void => {
        const newAnswers = { ...fillInTheBlankAnswers, [id]: value };
        setFillInTheBlankAnswers(newAnswers);
        if (onSaveAnswers) {
            onSaveAnswers({ answers, fillInTheBlankAnswers: newAnswers, matchDefinitionsAnswers, summary });
        }
    };

    const handleSummaryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = e.target.value;
        setSummary(value);
        if (onSaveAnswers) {
            onSaveAnswers({ answers, fillInTheBlankAnswers, matchDefinitionsAnswers, summary: value });
        }
    };

    // Clear logic moved to Dashboard

    const handleSubmit = () => {
        setShowFeedback(true);

        // Track attempts for incorrect answers
        const newAttempts = { ...attempts };
        let attemptsChanged = false;

        lesson.content.questions.forEach(q => {
            const isCorrect = answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase();
            if (!isCorrect) {
                newAttempts[q.id] = (newAttempts[q.id] || 0) + 1;
                attemptsChanged = true;
            }
        });

        if (attemptsChanged) {
            setAttempts(newAttempts);
        }

        // Track attempts for fill-in-the-blank
        if (lesson.content.fillInTheBlanks) {
            let fitbAttemptsChanged = false;
            const currentAttempts = { ...newAttempts }; // Use updated attempts from questions

            lesson.content.fillInTheBlanks.exercises.forEach(ex => {
                const isCorrect = fillInTheBlankAnswers[ex.id] === ex.answer;
                if (!isCorrect) {
                    currentAttempts[ex.id] = (currentAttempts[ex.id] || 0) + 1;
                    fitbAttemptsChanged = true;
                }
            });

            if (fitbAttemptsChanged) {
                setAttempts(currentAttempts);
            }
        }

        const questionsCorrect = lesson.content.questions.every(
            (q) => answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()
        );

        // Check fill-in-the-blank correctness (if section exists)
        let fillInTheBlanksCorrect = true;
        if (lesson.content.fillInTheBlanks) {
            fillInTheBlanksCorrect = lesson.content.fillInTheBlanks.exercises.every(
                (ex) => fillInTheBlankAnswers[ex.id] === ex.answer
            );
        }

        // Check match definitions correctness
        let matchDefinitionsCorrect = true;
        if (lesson.content.matchDefinitions) {
            matchDefinitionsCorrect = lesson.content.matchDefinitions.pairs.every(
                (pair) => matchDefinitionsAnswers[pair.id] === pair.definition
            );
        }

        if (questionsCorrect && fillInTheBlanksCorrect && matchDefinitionsCorrect && summary.trim().length > 0) {
            triggerCelebration();
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 1, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: { xs: 2, md: 3 },
                    mb: 4,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <BookIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            Reading Comprehension
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                {/* Clear logic moved to Dashboard */}
            </Box>

            <Stack spacing={3}>
                {/* Reading Text */}
                <Card elevation={2}>
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={2} justifyContent="space-between">
                            <Stack direction="row" spacing={1} alignItems="center">
                                <BookIcon color="primary" />
                                <Typography variant="h6" fontWeight={600}>
                                    Reading Passage
                                </Typography>
                            </Stack>
                            <Button
                                variant="outlined"
                                startIcon={isPlaying ? <Stop /> : <VolumeUp />}
                                onClick={handlePlayAudio}
                                color={isPlaying ? "error" : "primary"}
                                size="small"
                            >
                                {isPlaying ? "Stop" : "Read Aloud"}
                            </Button>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{
                                lineHeight: 2,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                whiteSpace: 'pre-wrap', // pre-wrap handles newlines better with mixed spans
                                color: 'text.primary',
                            }}
                        >
                            {renderContent()}
                        </Typography>
                    </CardContent>
                </Card>

                {/* Questions Section */}
                <Card elevation={2}>
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
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
                                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
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
                                                {(attempts[q.id] || 0) >= 3 ? (
                                                    <span>
                                                        👀 The correct answer is: <strong>{q.answer}</strong>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        💡 Hint: Look for the answer in the text. It starts with "{q.answer.substring(0, Math.min(4, q.answer.length))}..."
                                                    </span>
                                                )}
                                            </Alert>
                                        )}
                                    </Box>
                                );
                            })}
                        </Stack>
                    </CardContent>
                </Card>

                {/* Fill-in-the-blank Section */}
                {lesson.content.fillInTheBlanks && (
                    <Card elevation={2}>
                        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                <EditIcon color="secondary" />
                                <Typography variant="h6" fontWeight={600}>
                                    {lesson.content.fillInTheBlanks.title || "Complete the Sentences"}
                                </Typography>
                            </Stack>
                            <Divider sx={{ mb: 2 }} />
                            <Stack spacing={3}>
                                {lesson.content.fillInTheBlanks.exercises.map((ex, idx) => {
                                    const userAnswer = fillInTheBlankAnswers[ex.id];
                                    const isCorrect = userAnswer === ex.answer;
                                    const showResult = showFeedback && userAnswer;

                                    // Replace placeholder with answer-like underline
                                    const parts = ex.sentence.split('_____');

                                    return (
                                        <Box key={ex.id}>
                                            <Typography variant="body1" fontSize="1.1rem" mb={1}>
                                                {idx + 1}. {parts[0]}
                                                <span style={{
                                                    borderBottom: '2px solid #333',
                                                    padding: '0 8px',
                                                    fontWeight: 'bold',
                                                    color: showResult ? (isCorrect ? 'green' : 'red') : 'inherit'
                                                }}>
                                                    {userAnswer || "_____"}
                                                </span>
                                                {parts[1]}
                                                {showResult && (
                                                    isCorrect ? <CheckIcon color="success" sx={{ verticalAlign: 'middle', ml: 1 }} fontSize="small" /> : <CancelIcon color="error" sx={{ verticalAlign: 'middle', ml: 1 }} fontSize="small" />
                                                )}
                                            </Typography>

                                            <FormControl component="fieldset" error={!!(showResult && !isCorrect)}>
                                                <RadioGroup
                                                    row
                                                    value={userAnswer || ''}
                                                    onChange={(e) => handleFillInTheBlankChange(ex.id, e.target.value)}
                                                >
                                                    {(shuffledOptions[ex.id] || ex.options).map((option) => (
                                                        <FormControlLabel
                                                            key={option}
                                                            value={option}
                                                            control={<Radio size="small" />}
                                                            label={option}
                                                            sx={{
                                                                color: showResult && option === ex.answer && ((attempts[ex.id] || 0) >= 3 || userAnswer === ex.answer) ? 'green' : 'inherit',
                                                                '& .MuiTypography-root': { fontWeight: showResult && option === ex.answer && ((attempts[ex.id] || 0) >= 3 || userAnswer === ex.answer) ? 'bold' : 'normal' }
                                                            }}
                                                        />
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </CardContent>
                    </Card>
                )}

                {/* Match Definitions Section */}
                {lesson.content.matchDefinitions && (
                    <Card elevation={2} sx={{ overflow: { xs: 'hidden', md: 'visible' } }}>
                        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                <FactCheckIcon color="info" />
                                <Typography variant="h6" fontWeight={600}>
                                    {lesson.content.matchDefinitions.title || "Match Definitions"}
                                </Typography>
                            </Stack>
                            <Divider sx={{ mb: 2 }} />

                            {/* Desktop: side-by-side Grid layout */}
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Grid container spacing={4}>
                                    {/* Words Column - Desktop */}
                                    <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
                                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.secondary">
                                            Words
                                        </Typography>
                                        <Stack spacing={1.5}>
                                            {lesson.content.matchDefinitions.pairs.map((pair) => {
                                                const isMatched = !!matchDefinitionsAnswers[pair.id];
                                                const isSelected = selectedWordId === pair.id;
                                                const isCorrect = isMatched && matchDefinitionsAnswers[pair.id] === pair.definition;
                                                let borderColor = 'rgba(255,255,255,0.3)';
                                                let borderWidth = 1;
                                                if (showFeedback && isMatched) {
                                                    borderColor = isCorrect ? '#4caf50' : '#f44336';
                                                    borderWidth = 3;
                                                } else if (isMatched) {
                                                    borderColor = '#2196f3';
                                                    borderWidth = 2;
                                                } else if (isSelected) {
                                                    borderColor = '#2196f3';
                                                    borderWidth = 2;
                                                }
                                                return (
                                                    <Button
                                                        key={pair.id}
                                                        variant="outlined"
                                                        onClick={() => handleMatchSelect('word', pair.id)}
                                                        sx={{
                                                            justifyContent: 'flex-start',
                                                            py: 1.5, px: 2,
                                                            borderColor, borderWidth,
                                                            fontWeight: isSelected ? 'bold' : 'normal',
                                                            color: 'white',
                                                            width: '100%',
                                                            '&:hover': { borderColor, borderWidth, backgroundColor: 'rgba(255,255,255,0.05)' },
                                                        }}
                                                    >
                                                        {pair.word}
                                                        {showFeedback && isMatched && (
                                                            isCorrect
                                                                ? <CheckIcon sx={{ ml: 'auto', color: '#4caf50' }} fontSize="small" />
                                                                : <CancelIcon sx={{ ml: 'auto', color: '#f44336' }} fontSize="small" />
                                                        )}
                                                    </Button>
                                                );
                                            })}
                                        </Stack>
                                    </Grid>

                                    {/* Definitions Column - Desktop */}
                                    <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
                                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.secondary">
                                            Definitions
                                        </Typography>
                                        <Stack spacing={1.5}>
                                            {shuffledDefinitions.map((pair) => {
                                                const connectedWordId = Object.keys(matchDefinitionsAnswers).find(
                                                    key => matchDefinitionsAnswers[key] === pair.definition
                                                );
                                                const isUsed = !!connectedWordId;
                                                const correctWordPair = lesson.content.matchDefinitions?.pairs.find(p => p.id === connectedWordId);
                                                const isCorrect = correctWordPair && correctWordPair.definition === pair.definition;
                                                let borderColor = 'rgba(255,255,255,0.3)';
                                                let borderWidth = 1;
                                                if (showFeedback && isUsed) {
                                                    borderColor = isCorrect ? '#4caf50' : '#f44336';
                                                    borderWidth = 3;
                                                } else if (isUsed) {
                                                    borderColor = '#2196f3';
                                                    borderWidth = 2;
                                                }
                                                return (
                                                    <Button
                                                        key={pair.id}
                                                        variant="outlined"
                                                        onClick={() => handleMatchSelect('definition', pair.definition)}
                                                        sx={{
                                                            justifyContent: 'flex-start', textAlign: 'left',
                                                            py: 1.5, px: 2, textTransform: 'none',
                                                            borderColor, borderWidth, color: 'white',
                                                            width: '100%',
                                                            '&:hover': { borderColor, borderWidth, backgroundColor: 'rgba(255,255,255,0.05)' },
                                                        }}
                                                    >
                                                        {pair.definition}
                                                    </Button>
                                                );
                                            })}
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* Mobile: stacked with horizontal scroll for each */}
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                {/* Words - Mobile horizontal scroll */}
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.secondary">
                                    Words
                                </Typography>
                                <Box
                                    sx={{
                                        overflowX: 'auto',
                                        WebkitOverflowScrolling: 'touch',
                                        pb: 1.5,
                                        mb: 3,
                                        '&::-webkit-scrollbar': { height: '6px' },
                                        '&::-webkit-scrollbar-track': { background: 'rgba(255,255,255,0.05)', borderRadius: '4px' },
                                        '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.25)', borderRadius: '4px' },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', gap: 1.5, width: 'max-content' }}>
                                        {lesson.content.matchDefinitions.pairs.map((pair) => {
                                            const isMatched = !!matchDefinitionsAnswers[pair.id];
                                            const isSelected = selectedWordId === pair.id;
                                            const isCorrect = isMatched && matchDefinitionsAnswers[pair.id] === pair.definition;
                                            let borderColor = 'rgba(255,255,255,0.3)';
                                            let borderWidth = 1;
                                            if (showFeedback && isMatched) {
                                                borderColor = isCorrect ? '#4caf50' : '#f44336';
                                                borderWidth = 3;
                                            } else if (isMatched) {
                                                borderColor = '#2196f3';
                                                borderWidth = 2;
                                            } else if (isSelected) {
                                                borderColor = '#2196f3';
                                                borderWidth = 2;
                                            }
                                            return (
                                                <Button
                                                    key={pair.id}
                                                    variant="outlined"
                                                    onClick={() => handleMatchSelect('word', pair.id)}
                                                    sx={{
                                                        justifyContent: 'flex-start',
                                                        py: 1.5, px: 2,
                                                        borderColor, borderWidth,
                                                        fontWeight: isSelected ? 'bold' : 'normal',
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        flexShrink: 0,
                                                        '&:hover': { borderColor, borderWidth, backgroundColor: 'rgba(255,255,255,0.05)' },
                                                    }}
                                                >
                                                    {pair.word}
                                                    {showFeedback && isMatched && (
                                                        isCorrect
                                                            ? <CheckIcon sx={{ ml: 1, color: '#4caf50' }} fontSize="small" />
                                                            : <CancelIcon sx={{ ml: 1, color: '#f44336' }} fontSize="small" />
                                                    )}
                                                </Button>
                                            );
                                        })}
                                    </Box>
                                </Box>

                                {/* Definitions - Mobile horizontal scroll */}
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.secondary">
                                    Definitions
                                </Typography>
                                <Box
                                    sx={{
                                        overflowX: 'auto',
                                        WebkitOverflowScrolling: 'touch',
                                        pb: 1.5,
                                        '&::-webkit-scrollbar': { height: '6px' },
                                        '&::-webkit-scrollbar-track': { background: 'rgba(255,255,255,0.05)', borderRadius: '4px' },
                                        '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.25)', borderRadius: '4px' },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', gap: 1.5, width: 'max-content' }}>
                                        {shuffledDefinitions.map((pair) => {
                                            const connectedWordId = Object.keys(matchDefinitionsAnswers).find(
                                                key => matchDefinitionsAnswers[key] === pair.definition
                                            );
                                            const isUsed = !!connectedWordId;
                                            const correctWordPair = lesson.content.matchDefinitions?.pairs.find(p => p.id === connectedWordId);
                                            const isCorrect = correctWordPair && correctWordPair.definition === pair.definition;
                                            let borderColor = 'rgba(255,255,255,0.3)';
                                            let borderWidth = 1;
                                            if (showFeedback && isUsed) {
                                                borderColor = isCorrect ? '#4caf50' : '#f44336';
                                                borderWidth = 3;
                                            } else if (isUsed) {
                                                borderColor = '#2196f3';
                                                borderWidth = 2;
                                            }
                                            return (
                                                <Button
                                                    key={pair.id}
                                                    variant="outlined"
                                                    onClick={() => handleMatchSelect('definition', pair.definition)}
                                                    sx={{
                                                        justifyContent: 'flex-start', textAlign: 'left',
                                                        py: 1.5, px: 2, textTransform: 'none',
                                                        borderColor, borderWidth, color: 'white',
                                                        minWidth: '200px', maxWidth: '280px',
                                                        flexShrink: 0,
                                                        whiteSpace: 'normal',
                                                        '&:hover': { borderColor, borderWidth, backgroundColor: 'rgba(255,255,255,0.05)' },
                                                    }}
                                                >
                                                    {pair.definition}
                                                </Button>
                                            );
                                        })}
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                )}

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
                            onChange={handleSummaryChange}
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
                <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
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
            </Stack>
        </Box >
    );
}
