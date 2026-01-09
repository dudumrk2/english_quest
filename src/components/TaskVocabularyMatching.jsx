import React, { useState, useEffect, useMemo } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Alert,
} from '@mui/material';
import {
    Extension as PuzzleIcon,
    CheckCircle,
    VolumeUp,
} from '@mui/icons-material';
import { triggerCelebration } from '../utils/confetti';

// Shuffle helper
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export function TaskVocabularyMatching({ lesson, onComplete, initialAnswers = {}, onSaveAnswers }) {
    // pairs: { word: string, translation: string }[]
    const pairs = lesson.content.pairs || [];

    // State
    const [selectedLeft, setSelectedLeft] = useState(null); // English word
    const [matchedPairs, setMatchedPairs] = useState(new Set(initialAnswers.matched || []));
    const [errorPair, setErrorPair] = useState(null); // { left: string, right: string } for temporary error animation

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
            // Optional: Auto-complete after delay? Or wait for user button?
            // User request says "completion button becomes active" implying manual action, 
            // but standard flow usually celebrates then continues. 
            // I'll enable the button and trigger confetti.
        }
    }, [matchedPairs, pairs.length]);


    const handleLeftClick = (word) => {
        if (matchedPairs.has(word)) return;
        setErrorPair(null);
        setSelectedLeft(word === selectedLeft ? null : word);
    };

    const handleRightClick = (translation) => {
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

    const isMatchedRight = (translation) => {
        // A translation is matched if its corresponding word is in matchedPairs
        const pair = pairs.find(p => p.translation === translation);
        return pair && matchedPairs.has(pair.word);
    };

    // Helper to get voices (handling async loading)
    const [voices, setVoices] = useState([]);
    useEffect(() => {
        const updateVoices = () => {
            setVoices(window.speechSynthesis.getVoices());
        };
        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;
        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, []);

    const handleSpeak = (e, word, translation, context, contextTranslation) => {
        e.stopPropagation();
        window.speechSynthesis.cancel(); // Stop current speech

        const getHebrewVoice = () => {
            return voices.find(v => v.lang.includes('he') || v.lang.includes('HE') || v.name.includes('Hebrew')) || null;
        };
        const hebrewVoice = getHebrewVoice();

        if (translation && !hebrewVoice) {
            alert("Hebrew voice not found on this device! Please install a Hebrew language pack.");
        }

        const utterances = [];

        // 1. English Word
        const wordUtterance = new SpeechSynthesisUtterance(word);
        wordUtterance.lang = 'en-US';
        utterances.push(wordUtterance);

        // 2. Hebrew Word Translation
        if (translation) {
            const transWordUtterance = new SpeechSynthesisUtterance(translation);
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
            const transUtterance = new SpeechSynthesisUtterance(contextTranslation);
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
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 3 } }}>
            {/* Header */}
            <Box
                sx={{
                    p: 3,
                    mb: 4,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <PuzzleIcon sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h4" fontWeight={700}>
                            {lesson.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                            Match the pairs! Found: {matchedPairs.size} / {pairs.length}
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Alert severity="info" sx={{ mb: 3 }}>
                Click an English word on the left, then click its Hebrew meaning on the right.
            </Alert>

            <Card elevation={3}>
                <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" justifyContent="space-between" spacing={4}>
                        {/* Left Column: English */}
                        <Stack spacing={2} sx={{ width: '48%' }}>
                            <Typography variant="h6" textAlign="center" gutterBottom>English</Typography>
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
                                            minHeight: '80px',
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

                        {/* Right Column: Hebrew */}
                        <Stack spacing={2} sx={{ width: '48%' }}>
                            <Typography variant="h6" textAlign="center" gutterBottom>Hebrew</Typography>
                            {rightItems.map((translation) => {
                                const isMatched = isMatchedRight(translation);
                                const isError = errorPair?.right === translation;

                                return (
                                    <Button
                                        key={translation}
                                        variant={isMatched ? "contained" : "outlined"}
                                        color={isError ? "error" : isMatched ? "success" : "secondary"} // Different color for distinction
                                        onClick={() => handleRightClick(translation)}
                                        disabled={isMatched || (errorPair !== null)}
                                        sx={{
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
                                            minHeight: '80px',
                                        }}
                                    >
                                        {translation}
                                    </Button>
                                );
                            })}
                        </Stack>
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

