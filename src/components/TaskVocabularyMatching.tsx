import React, { useState, useEffect, useMemo } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Alert,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Extension as PuzzleIcon,
    CheckCircle,
    VolumeUp,
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';

// Shuffle helper
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

interface TaskVocabularyMatchingProps {
    lesson: any; // Using any for now as the full Lesson type might be complex to import/reconstruct here without looking at types.ts
    onComplete: () => void;
    initialAnswers?: { matched?: string[] };
    onSaveAnswers?: (answers: { matched: string[] }) => void;
}

export function TaskVocabularyMatching({ lesson, onComplete, initialAnswers = {}, onSaveAnswers }: TaskVocabularyMatchingProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // pairs: { word: string, translation: string }[]
    const pairs: { word: string; translation: string; context?: string; contextTranslation?: string }[] = lesson.content.pairs || [];

    // State
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null); // English word
    const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set(initialAnswers.matched || []));
    const [errorPair, setErrorPair] = useState<{ left: string | null; right: string | null } | null>(null); // { left: string, right: string } for temporary error animation

    // Memoize shuffled columns to keep them consistent during renders
    const { leftItems, rightItems } = useMemo(() => {
        if (!pairs.length) return { leftItems: [], rightItems: [] };

        const left = pairs.map(p => p.word);
        // Shuffle right side independently
        const right = shuffleArray(pairs.map(p => p.translation));

        return { leftItems: left, rightItems: right };
    }, [pairs]); /* eslint-disable-line react-hooks/exhaustive-deps */

    // Save progress when matched pairs change
    useEffect(() => {
        if (onSaveAnswers) {
            onSaveAnswers({ matched: Array.from(matchedPairs) });
        }
    }, [matchedPairs]); // eslint-disable-line react-hooks/exhaustive-deps

    // Check completion
    useEffect(() => {
        if (pairs.length > 0 && matchedPairs.size === pairs.length) {
            triggerCelebration();
        }
    }, [matchedPairs, pairs.length]);


    const handleLeftClick = (word: string) => {
        if (matchedPairs.has(word)) return;
        setErrorPair(null);
        setSelectedLeft(word === selectedLeft ? null : word);
    };

    const handleRightClick = (translation: string) => {
        if (!selectedLeft) return;

        // Find the correct translation for the selected left word
        const correctPair = pairs.find(p => p.word === selectedLeft);

        if (correctPair && correctPair.translation === translation) {
            // Match found!
            const newMatched = new Set(matchedPairs);
            newMatched.add(selectedLeft);
            setMatchedPairs(newMatched);
            setSelectedLeft(null);
            setErrorPair(null);
        } else {
            // Incorrect match
            setErrorPair({ left: selectedLeft, right: translation });

            // Visual feedback delay then reset
            setTimeout(() => {
                setErrorPair(null);
                setSelectedLeft(null);
            }, 1000);
        }
    };

    const isMatchedRight = (translation: string) => {
        // A translation is matched if its corresponding word is in matchedPairs
        const pair = pairs.find(p => p.translation === translation);
        return pair && matchedPairs.has(pair.word);
    };

    // Helper to get voices (handling async loading)
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    useEffect(() => {
        const updateVoices = () => {
            setVoices(window.speechSynthesis.getVoices());
        };
        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;
        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, []);

    const handleSpeak = (e: React.MouseEvent, word: string, translation?: string, context?: string, contextTranslation?: string) => {
        e.stopPropagation();
        window.speechSynthesis.cancel(); // Stop current speech

        const getHebrewVoice = () => {
            return voices.find(v => v.lang.includes('he') || v.lang.includes('HE') || v.name.includes('Hebrew')) || null;
        };
        const hebrewVoice = getHebrewVoice();

        if (translation && !hebrewVoice) {
            alert("Hebrew voice not found on this device! Please install a Hebrew language pack.");
        }

        const utterances: SpeechSynthesisUtterance[] = [];

        // 1. English Word
        const wordUtterance = new SpeechSynthesisUtterance(word);
        wordUtterance.lang = 'en-US';
        utterances.push(wordUtterance);

        // Helper to sanitize Hebrew text for speech
        const sanitizeForSpeech = (text: string) => text ? text.replace(/\//g, ' או ') : '';

        // 2. Hebrew Word Translation
        if (translation) {
            const transWordUtterance = new SpeechSynthesisUtterance(sanitizeForSpeech(translation));
            transWordUtterance.lang = 'he-IL';
            if (hebrewVoice) transWordUtterance.voice = hebrewVoice;
            utterances.push(transWordUtterance);
        }

        // 3. English Context Sentence (if exists)
        if (context) {
            const contextUtterance = new SpeechSynthesisUtterance(context);
            contextUtterance.lang = 'en-US';
            utterances.push(contextUtterance);
        }

        // 4. Hebrew Context Translation (if exists)
        if (contextTranslation) {
            const transUtterance = new SpeechSynthesisUtterance(sanitizeForSpeech(contextTranslation));
            transUtterance.lang = 'he-IL';
            if (hebrewVoice) transUtterance.voice = hebrewVoice;
            utterances.push(transUtterance);
        }

        // Play them sequentially
        let currentIndex = 0;
        const playNext = () => {
            if (currentIndex < utterances.length) {
                const utterance = utterances[currentIndex];
                utterance.onend = () => {
                    currentIndex++;
                    playNext();
                };
                window.speechSynthesis.speak(utterance);
            }
        };
        playNext();
    };

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 1, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: { xs: 2, md: 3 },
                    mb: 4,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <PuzzleIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            Match the pairs! Found: {matchedPairs.size} / {pairs.length}
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Alert severity="info" sx={{ mb: 3 }}>
                Click an English word on the left (or top), then click its Hebrew meaning on the right (or bottom).
            </Alert>

            <Card elevation={3}>
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>

                    {/* Responsive Layout Container */}
                    <Stack
                        direction={isMobile ? "column" : "row"}
                        justifyContent="space-between"
                        spacing={4}
                    >
                        {/* First Group: English */}
                        <Box sx={{ width: isMobile ? '100%' : '48%' }}>
                            <Typography variant="h6" textAlign="center" gutterBottom>English</Typography>
                            <Stack
                                direction={isMobile ? "row" : "column"}
                                spacing={2}
                                sx={isMobile ? {
                                    overflowX: 'auto',
                                    pb: 2,
                                    px: 1,
                                    width: '100%',
                                    // Scrollbar styling for mobile
                                    '&::-webkit-scrollbar': { height: '8px' },
                                    '&::-webkit-scrollbar-track': { background: 'rgba(0,0,0,0.05)', borderRadius: '4px' },
                                    '&::-webkit-scrollbar-thumb': { background: 'rgba(0,0,0,0.2)', borderRadius: '4px' },
                                } : {
                                    // Desktop styles (default column stack)
                                }}
                            >
                                {leftItems.map((word) => {
                                    const isMatched = matchedPairs.has(word);
                                    const isSelected = selectedLeft === word;
                                    const isError = errorPair?.left === word;

                                    return (
                                        <Button
                                            key={word}
                                            variant={isMatched ? "contained" : isSelected ? "outlined" : "text"}
                                            color={isError ? "error" : isMatched ? "success" : "primary"}
                                            onClick={() => handleLeftClick(word)}
                                            disabled={isMatched || (errorPair !== null)}
                                            sx={{
                                                // Shared styles
                                                py: 2,
                                                px: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                textTransform: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                border: isSelected ? '2px solid' : '1px solid',
                                                borderColor: isSelected ? 'primary.main' : 'divider',
                                                bgcolor: isSelected ? 'primary.50' : 'background.paper',
                                                opacity: isMatched ? 0.6 : 1,
                                                transition: 'all 0.2s',
                                                animation: isError ? 'shake 0.5s' : 'none',

                                                // Responsive dimensions
                                                minHeight: isMobile ? '100px' : '80px',
                                                minWidth: isMobile ? '200px' : 'auto', // Fixed width on mobile
                                                width: isMobile ? 'auto' : '100%',      // Full width on desktop
                                                flexShrink: 0,

                                                gap: 1,
                                                '@keyframes shake': {
                                                    '0%': { transform: 'translateX(0)' },
                                                    '25%': { transform: 'translateX(-5px)' },
                                                    '50%': { transform: 'translateX(5px)' },
                                                    '75%': { transform: 'translateX(-5px)' },
                                                    '100%': { transform: 'translateX(0)' }
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="h6" component="span" fontWeight="bold">
                                                    {word}
                                                </Typography>
                                                <Box
                                                    component="span"
                                                    onClick={(e) => {
                                                        const pair = pairs.find(p => p.word === word);
                                                        handleSpeak(e, word, pair?.translation, pair?.context, pair?.contextTranslation);
                                                    }}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        display: 'inline-flex',
                                                        p: 0.5,
                                                        borderRadius: '50%',
                                                        '&:hover': { bgcolor: 'action.hover' }
                                                    }}
                                                >
                                                    <VolumeUp fontSize="small" />
                                                </Box>
                                            </Box>
                                        </Button>
                                    );
                                })}
                            </Stack>
                        </Box>

                        {/* Second Group: Hebrew */}
                        <Box sx={{ width: isMobile ? '100%' : '48%' }}>
                            <Typography variant="h6" textAlign="center" gutterBottom>Hebrew</Typography>
                            <Stack
                                direction={isMobile ? "row" : "column"}
                                spacing={2}
                                sx={isMobile ? {
                                    overflowX: 'auto',
                                    pb: 2,
                                    px: 1,
                                    width: '100%',
                                    // Scrollbar styling for mobile
                                    '&::-webkit-scrollbar': { height: '8px' },
                                    '&::-webkit-scrollbar-track': { background: 'rgba(0,0,0,0.05)', borderRadius: '4px' },
                                    '&::-webkit-scrollbar-thumb': { background: 'rgba(0,0,0,0.2)', borderRadius: '4px' },
                                } : {
                                    // Desktop styles
                                }}
                            >
                                {rightItems.map((translation) => {
                                    const isMatched = isMatchedRight(translation);
                                    const isError = errorPair?.right === translation;

                                    return (
                                        <Button
                                            key={translation}
                                            variant={isMatched ? "contained" : "outlined"}
                                            color={isError ? "error" : isMatched ? "success" : "secondary"}
                                            onClick={() => handleRightClick(translation)}
                                            disabled={isMatched || (errorPair !== null)}
                                            sx={{
                                                // Shared styles
                                                py: 2,
                                                px: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                textTransform: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                bgcolor: 'background.paper',
                                                opacity: isMatched ? 0.6 : 1,
                                                transition: 'all 0.2s',
                                                animation: isError ? 'shake 0.5s' : 'none',

                                                // Responsive dimensions
                                                minHeight: isMobile ? '100px' : '80px',
                                                minWidth: isMobile ? '200px' : 'auto',
                                                width: isMobile ? 'auto' : '100%',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {translation}
                                        </Button>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Stack>

                    {/* Footer Actions */}
                    <Box mt={6} display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            size="large"
                            disabled={matchedPairs.size !== pairs.length}
                            onClick={() => onComplete()}
                            sx={{
                                px: 6,
                                py: 1.5,
                                fontSize: '1.2rem',
                                borderRadius: 8,
                                background: matchedPairs.size === pairs.length
                                    ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                                    : 'grey',
                                color: 'white',
                                boxShadow: matchedPairs.size === pairs.length ? 4 : 0,
                            }}
                            startIcon={<CheckCircle />}
                        >
                            Complete Lesson
                        </Button>
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
}
