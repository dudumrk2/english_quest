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
    VolumeUp,
    Stop,
    Edit as EditIcon,
    FactCheck as FactCheckIcon,
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';
import { renderTextWithHighlight } from '../utils/textRenderer';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useExerciseAttempts } from '../hooks/useExerciseAttempts';
import { TaskHeader } from './common/TaskHeader';
import { TaskActionButtons } from './common/TaskActionButtons';
import { HebrewSummary } from './common/HebrewSummary';
import type { TaskReadingProps, MatchPair } from '../types';
import { isAnswerCorrect } from '../utils/validation';

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
    // New state for inline choices
    // New state for inline choices - NOT saved to initialAnswers as requested
    const [inlineChoiceAnswers, setInlineChoiceAnswers] = useState<Record<string, string>>({});
    const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
    const [shuffledDefinitions, setShuffledDefinitions] = useState<MatchPair[]>([]);
    const [shuffledOptions, setShuffledOptions] = useState<Record<string, string[]>>({});
    const [showFeedback, setShowFeedback] = useState(false);
    const [summary, setSummary] = useState(initialAnswers.summary || '');

    const { trackAttempt, getAttemptCount } = useExerciseAttempts();

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
        if (!lesson.content.inlineChoices) {
            return renderTextWithHighlight(
                lesson.content.text,
                lesson.content.vocabulary,
                highlightRange
            );
        }

        const parts = lesson.content.text.split(/(\[\[.*?\]\])/g);

        return (
            <span>
                {parts.map((part, index) => {
                    if (part.startsWith('[[') && part.endsWith(']]')) {
                        const id = part.slice(2, -2);
                        const exercise = lesson.content.inlineChoices?.exercises.find(e => e.id === id);

                        if (!exercise) return part;

                        const userAnswer = inlineChoiceAnswers[id];
                        const isCorrect = userAnswer === exercise.answer;
                        // Show result immediately upon selection, or when global feedback is shown
                        const showResult = showFeedback || !!userAnswer;

                        return (
                            <span key={index} style={{ margin: '0 5px', display: 'inline-block' }}>
                                {exercise.options.map((option, optIdx) => {
                                    const isSelected = userAnswer === option;

                                    // Lighter blue for default state to differentiate from vocabulary words
                                    let color = '#29b6f6'; // Light Blue 400
                                    let fontWeight = '500';
                                    let textDecoration = 'none';

                                    if (showResult) {
                                        if (option === exercise.answer) {
                                            color = '#4caf50'; // Green for correct answer
                                            fontWeight = 'bold';
                                        } else if (isSelected && !isCorrect) {
                                            color = '#ef5350'; // Red for wrong selection
                                            textDecoration = 'line-through';
                                        } else {
                                            // Unselected options in result mode
                                            color = '#bdbdbd';
                                            fontWeight = 'normal';
                                        }
                                    } else if (isSelected) {
                                        color = '#0288d1'; // Darker blue when selected
                                        fontWeight = 'bold';
                                    }

                                    return (
                                        <span key={optIdx}>
                                            <span
                                                onClick={() => !showFeedback && handleInlineChoiceChange(id, option)}
                                                style={{
                                                    cursor: showFeedback ? 'default' : 'pointer',
                                                    color: color,
                                                    fontWeight: fontWeight,
                                                    textDecoration: textDecoration,
                                                    padding: '2px 6px',
                                                    borderRadius: '4px',
                                                    backgroundColor: isSelected ? 'rgba(3, 169, 244, 0.1)' : 'rgba(41, 182, 246, 0.05)',
                                                    border: isSelected ? '1px solid rgba(3, 169, 244, 0.5)' : '1px solid transparent',
                                                    transition: 'all 0.2s',
                                                    // Add explicit distinct styling from vocabulary
                                                    borderBottom: 'none'
                                                }}
                                            >
                                                {option}
                                            </span>
                                            {optIdx < exercise.options.length - 1 && (
                                                <span style={{ margin: '0 4px', color: '#999' }}>/</span>
                                            )}
                                        </span>
                                    );
                                })}
                            </span>
                        );
                    } else {
                        return (
                            <span key={index}>
                                {renderTextWithHighlight(part, lesson.content.vocabulary, null)}
                            </span>
                        );
                    }
                })}
            </span>
        );
    };


    const handleAnswerChange = (id: string, value: string): void => {
        const newAnswers = { ...answers, [id]: value };
        setAnswers(newAnswers);
        if (onSaveAnswers) {
            // Exclude inlineChoiceAnswers from save as requested
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
                    // Exclude inlineChoiceAnswers from save as requested
                    onSaveAnswers({ answers, fillInTheBlankAnswers, matchDefinitionsAnswers: newAnswers, summary });
                }
            } else if (existingOwner) {
                // No word selected but this definition is matched - clicking removes the match
                const newAnswers = { ...matchDefinitionsAnswers };
                delete newAnswers[existingOwner];
                setMatchDefinitionsAnswers(newAnswers);
                if (onSaveAnswers) {
                    // Exclude inlineChoiceAnswers from save as requested
                    onSaveAnswers({ answers, fillInTheBlankAnswers, matchDefinitionsAnswers: newAnswers, summary });
                }
            }
        }
    };

    const handleFillInTheBlankChange = (id: string, value: string): void => {
        const newAnswers = { ...fillInTheBlankAnswers, [id]: value };
        setFillInTheBlankAnswers(newAnswers);
        if (onSaveAnswers) {
            // Exclude inlineChoiceAnswers from save as requested
            onSaveAnswers({ answers, fillInTheBlankAnswers: newAnswers, matchDefinitionsAnswers, summary });
        }
    };

    const handleInlineChoiceChange = (id: string, value: string): void => {
        const newAnswers = { ...inlineChoiceAnswers, [id]: value };
        setInlineChoiceAnswers(newAnswers);
        // Do NOT save inline choices to persistent store as requested by user
        // if (onSaveAnswers) { ... }
    };

    const handleSummaryChange = (value: string): void => {
        setSummary(value);
        if (onSaveAnswers) {
            onSaveAnswers({ answers, fillInTheBlankAnswers, matchDefinitionsAnswers, summary: value });
        }
    };

    const handleSubmit = () => {
        setShowFeedback(true);

        lesson.content.questions.forEach(q => {
            const currentVal = answers[q.id]?.trim() || '';
            trackAttempt(q.id, currentVal, isAnswerCorrect(currentVal, q.answer));
        });

        if (lesson.content.fillInTheBlanks) {
            lesson.content.fillInTheBlanks.exercises.forEach(ex => {
                const currentVal = fillInTheBlankAnswers[ex.id] || '';
                trackAttempt(ex.id, currentVal, currentVal === ex.answer);
            });
        }

        const questionsCorrect = lesson.content.questions.every(
            (q) => isAnswerCorrect(answers[q.id], q.answer)
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

        // Check inline choices correctness
        let inlineChoicesCorrect = true;
        if (lesson.content.inlineChoices) {
            inlineChoicesCorrect = lesson.content.inlineChoices.exercises.every(
                (ex) => inlineChoiceAnswers[ex.id] === ex.answer
            );
        }

        if (questionsCorrect && fillInTheBlanksCorrect && matchDefinitionsCorrect && inlineChoicesCorrect && summary.trim().length > 0) {
            triggerCelebration();
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 1, md: 3 } }}>
            <TaskHeader
                icon={<BookIcon sx={{ fontSize: { xs: 32, md: 40 } }} />}
                title={lesson.title}
                subtitle="Reading Comprehension"
                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />

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
                                const isCorrect = isAnswerCorrect(answers[q.id], q.answer);
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
                                                {getAttemptCount(q.id) >= 3 ? (
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
                                                                color: showResult && option === ex.answer && (getAttemptCount(ex.id) >= 3 || userAnswer === ex.answer) ? 'green' : 'inherit',
                                                                '& .MuiTypography-root': { fontWeight: showResult && option === ex.answer && (getAttemptCount(ex.id) >= 3 || userAnswer === ex.answer) ? 'bold' : 'normal' }
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
                                    <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
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
                                    <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
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

                <HebrewSummary
                    value={summary}
                    onChange={handleSummaryChange}
                    showError={showFeedback && summary.trim().length === 0}
                />

                <TaskActionButtons
                    onSkip={() => onComplete(true)}
                    onSubmit={handleSubmit}
                    submitLabel="Check Answers & Complete Lesson"
                />
            </Stack>
        </Box >
    );
}
