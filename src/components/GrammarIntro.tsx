import { useState, useCallback, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
    Chip,
    Fade,
    IconButton,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    ArrowForward as NextIcon,
    VolumeUp as VolumeUpIcon,
    VolumeOff as VolumeOffIcon,
} from '@mui/icons-material';
import type { GrammarDay } from '../types/grammar-practice';

interface GrammarIntroProps {
    day: GrammarDay;
    onComplete: () => void;
    onBack: () => void;
}

// ─── Keyframe definitions (inline sx) ───────────────────────────────────────

const fadeSlideIn = {
    '@keyframes fadeSlideIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    },
};

const scaleIn = {
    '@keyframes scaleIn': {
        from: { opacity: 0, transform: 'scale(0.7)' },
        to: { opacity: 1, transform: 'scale(1)' },
    },
};

const bounceIn = {
    '@keyframes bounceIn': {
        '0%': { opacity: 0, transform: 'scale(0)' },
        '60%': { transform: 'scale(1.2)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
    },
};

// ─── TTS hook with natural voice selection ──────────────────────────────────

function useNarration() {
    const [isPlaying, setIsPlaying] = useState(false);
    const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

    // Pick the best available English voice
    const pickVoice = useCallback(() => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) return;

        // Prefer natural-sounding voices in priority order
        const preferred = [
            'Google UK English Female',
            'Google UK English Male',
            'Google US English',
            'Samantha',               // macOS
            'Karen',                  // macOS Australian
            'Daniel',                 // macOS UK
            'Microsoft Zira',         // Windows
            'Microsoft David',        // Windows
        ];

        // Exact name match first
        for (const name of preferred) {
            const match = voices.find(v => v.name === name);
            if (match) {
                voiceRef.current = match;
                return;
            }
        }

        // Partial name match (Windows voices often have long names like "Microsoft Zira - English (United States)")
        for (const name of preferred) {
            const match = voices.find(v => v.name.includes(name) && v.lang.startsWith('en'));
            if (match) {
                voiceRef.current = match;
                return;
            }
        }

        // Fallback: any en voice
        const enVoice = voices.find(v => v.lang.startsWith('en'));
        if (enVoice) voiceRef.current = enVoice;
    }, []);

    useEffect(() => {
        pickVoice();
        // Voices may load asynchronously
        window.speechSynthesis.onvoiceschanged = pickVoice;
        return () => {
            window.speechSynthesis.cancel();
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, [pickVoice]);

    const speak = useCallback((text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.92;
        utterance.pitch = 1.05;
        if (voiceRef.current) utterance.voice = voiceRef.current;

        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
    }, []);

    const stop = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
    }, []);

    const toggle = useCallback((text: string) => {
        if (isPlaying) {
            stop();
        } else {
            speak(text);
        }
    }, [isPlaying, speak, stop]);

    return { isPlaying, toggle, stop, speak };
}

// ─── Formula token colorizer ─────────────────────────────────────────────────

const SUBJECTS = /^(subject|i|we|they|he|she|it|you)$/i;
const AUXILIARIES = /^(do|does|did|don't|doesn't|didn't|will|won't|am|is|are|isn't|aren't|was|were|wasn't|weren't|have|has|had|haven't|hasn't|hadn't)$/i;
const VERB_FORMS = /^(base verb|verb\+ed|verb-ing|verb\+s|verb\+s\/es|past participle|infinitive)$/i;
const SEPARATORS = /^(\+|\||→|->)$/;

type TokenType = 'subject' | 'auxiliary' | 'verb' | 'separator' | 'other';

interface FormulaToken {
    text: string;
    type: TokenType;
}

function classifyToken(token: string): TokenType {
    const t = token.trim();
    if (SEPARATORS.test(t)) return 'separator';
    if (SUBJECTS.test(t)) return 'subject';
    if (AUXILIARIES.test(t)) return 'auxiliary';
    if (VERB_FORMS.test(t)) return 'verb';
    return 'other';
}

function parseFormulaTokens(formula: string): FormulaToken[] {
    const lines = formula.split('\n');
    const tokens: FormulaToken[] = [];

    lines.forEach((line, lineIdx) => {
        if (lineIdx > 0) {
            tokens.push({ text: '\n', type: 'separator' });
        }
        const parts = line.split(/(\s*\+\s*|\s*\|\s*|\s*→\s*|\s*->\s*)/);
        parts.forEach(part => {
            const trimmed = part.trim();
            if (!trimmed) return;
            tokens.push({ text: trimmed, type: classifyToken(trimmed) });
        });
    });

    return tokens;
}

const TOKEN_COLORS: Record<TokenType, { bg: string; color: string; border: string } | null> = {
    subject: { bg: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' },
    auxiliary: { bg: 'rgba(249,115,22,0.15)', color: '#fdba74', border: '1px solid rgba(249,115,22,0.3)' },
    verb: { bg: 'rgba(16,185,129,0.15)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' },
    separator: null,
    other: { bg: 'rgba(100,116,139,0.15)', color: '#94a3b8', border: '1px solid rgba(100,116,139,0.25)' },
};

// ─── Narration Button ────────────────────────────────────────────────────────

function NarrationButton({ text, narration }: { text: string | undefined; narration: ReturnType<typeof useNarration> }) {
    if (!text) return null;
    return (
        <IconButton
            onClick={() => narration.toggle(text)}
            sx={{
                color: narration.isPlaying ? '#10b981' : 'text.secondary',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#10b981' },
            }}
        >
            {narration.isPlaying ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
    );
}

// ─── Step 1: Formula ─────────────────────────────────────────────────────────

function Step1Formula({ day }: { day: GrammarDay }) {
    const tokens = parseFormulaTokens(day.explanation.formula);

    const lines: FormulaToken[][] = [];
    let current: FormulaToken[] = [];
    tokens.forEach(t => {
        if (t.text === '\n') {
            lines.push(current);
            current = [];
        } else {
            current.push(t);
        }
    });
    if (current.length > 0) lines.push(current);

    let globalIndex = 0;

    return (
        <Box sx={{ ...fadeSlideIn, animation: 'fadeSlideIn 0.5s ease forwards', p: { xs: 2, md: 3 } }}>
            <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
                sx={{
                    animation: 'fadeSlideIn 0.4s ease forwards',
                    opacity: 0,
                    animationDelay: '0.05s',
                }}
            >
                📐 The Formula
            </Typography>

            <Box
                sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'rgba(16,185,129,0.06)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    mb: 3,
                }}
            >
                {lines.map((lineTokens, lineIdx) => (
                    <Stack
                        key={lineIdx}
                        direction="row"
                        flexWrap="wrap"
                        alignItems="center"
                        gap={0.75}
                        mb={lineIdx < lines.length - 1 ? 1.5 : 0}
                    >
                        {lineTokens.map(token => {
                            const idx = globalIndex++;
                            const styles = TOKEN_COLORS[token.type];
                            const delay = `${0.1 + idx * 0.1}s`;

                            if (!styles) {
                                return (
                                    <Typography
                                        key={idx}
                                        variant="body1"
                                        sx={{
                                            fontWeight: 700,
                                            color: 'text.secondary',
                                            opacity: 0,
                                            animation: 'fadeSlideIn 0.4s ease forwards',
                                            animationDelay: delay,
                                            px: 0.5,
                                        }}
                                    >
                                        {token.text}
                                    </Typography>
                                );
                            }

                            return (
                                <Chip
                                    key={idx}
                                    label={token.text}
                                    size="small"
                                    sx={{
                                        bgcolor: styles.bg,
                                        color: styles.color,
                                        border: styles.border,
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        opacity: 0,
                                        animation: 'fadeSlideIn 0.4s ease forwards',
                                        animationDelay: delay,
                                    }}
                                />
                            );
                        })}
                    </Stack>
                ))}
            </Box>

            <Box
                sx={{
                    opacity: 0,
                    animation: 'fadeSlideIn 0.5s ease forwards',
                    animationDelay: `${0.1 + tokens.length * 0.1 + 0.2}s`,
                }}
            >
                <Typography variant="subtitle2" color="text.secondary" fontWeight={700} gutterBottom>
                    When to use it
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line', color: 'text.primary' }}>
                    {day.explanation.usage}
                </Typography>
            </Box>
        </Box>
    );
}

// ─── Step 2: Signal Words ────────────────────────────────────────────────────

function Step2SignalWords({ day }: { day: GrammarDay }) {
    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
                variant="h5"
                fontWeight={700}
                mb={1}
                sx={{ opacity: 0, animation: 'fadeSlideIn 0.4s ease forwards', animationDelay: '0.05s' }}
            >
                ⚡ Signal Words
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                mb={3}
                sx={{ opacity: 0, animation: 'fadeSlideIn 0.4s ease forwards', animationDelay: '0.15s' }}
            >
                These words tell you which tense to use
            </Typography>

            {day.explanation.signalWords.length > 0 ? (
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                    {day.explanation.signalWords.map((word, idx) => (
                        <Chip
                            key={word}
                            label={word}
                            sx={{
                                bgcolor: 'rgba(16,185,129,0.12)',
                                color: '#34d399',
                                border: '1px solid rgba(16,185,129,0.3)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                height: 36,
                                opacity: 0,
                                animation: 'bounceIn 0.5s ease forwards',
                                animationDelay: `${0.2 + idx * 0.08}s`,
                            }}
                        />
                    ))}
                </Stack>
            ) : (
                <Box
                    sx={{
                        p: 2.5,
                        borderRadius: 2,
                        bgcolor: 'rgba(100,116,139,0.1)',
                        border: '1px solid rgba(100,116,139,0.2)',
                        opacity: 0,
                        animation: 'fadeSlideIn 0.5s ease forwards',
                        animationDelay: '0.25s',
                    }}
                >
                    <Typography variant="body1" color="text.secondary" fontStyle="italic">
                        No specific signal words — use context clues!
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

// ─── Step 3: Examples ────────────────────────────────────────────────────────

const EXAMPLE_CONFIG = [
    { label: 'Positive', emoji: '✅', borderColor: '#10b981', labelColor: '#34d399', key: 'positive' as const },
    { label: 'Negative', emoji: '❌', borderColor: '#ef4444', labelColor: '#f87171', key: 'negative' as const },
    { label: 'Yes/No', emoji: '❓', borderColor: '#3b82f6', labelColor: '#93c5fd', key: 'yesNo' as const },
    { label: 'WH Question', emoji: '🔍', borderColor: '#a855f7', labelColor: '#d8b4fe', key: 'wh' as const },
];

function Step3Examples({ day }: { day: GrammarDay }) {
    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
                sx={{ opacity: 0, animation: 'fadeSlideIn 0.4s ease forwards', animationDelay: '0.05s' }}
            >
                💬 See It In Action
            </Typography>

            <Stack spacing={2}>
                {EXAMPLE_CONFIG.map((cfg, idx) => (
                    <Box
                        key={cfg.key}
                        sx={{
                            p: 2.5,
                            borderRadius: 2,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderLeft: `6px solid ${cfg.borderColor}`,
                            opacity: 0,
                            animation: 'fadeSlideIn 0.5s ease forwards',
                            animationDelay: `${0.15 + idx * 0.15}s`,
                            transform: 'translateX(-20px)',
                            '@keyframes fadeSlideInLeft': {
                                from: { opacity: 0, transform: 'translateX(-20px)' },
                                to: { opacity: 1, transform: 'translateX(0)' },
                            },
                        }}
                    >
                        <Typography
                            variant="caption"
                            fontWeight={700}
                            sx={{ color: cfg.labelColor, textTransform: 'uppercase', letterSpacing: 0.5 }}
                        >
                            {cfg.emoji} {cfg.label}
                        </Typography>
                        <Typography
                            variant="body1"
                            fontStyle="italic"
                            sx={{ mt: 0.5, color: 'text.primary', fontSize: '1.05rem' }}
                        >
                            {day.explanation.examples[cfg.key]}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}

// ─── Progress Dots ────────────────────────────────────────────────────────────

function ProgressDots({ step, total }: { step: number; total: number }) {
    return (
        <Stack direction="row" spacing={1} justifyContent="center">
            {Array.from({ length: total }, (_, i) => (
                <Box
                    key={i}
                    sx={{
                        width: i === step ? 24 : 8,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: i === step ? '#10b981' : 'rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                    }}
                />
            ))}
        </Stack>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────

const TOTAL_STEPS = 3;

/** Maps step index to narration key */
const NARRATION_KEYS = ['formula', 'signalWords', 'examples'] as const;

export function GrammarIntro({ day, onComplete, onBack }: GrammarIntroProps) {
    const [step, setStep] = useState(0);
    const narration = useNarration();

    // Stop narration when changing slides
    const goNext = () => {
        narration.stop();
        if (step < TOTAL_STEPS - 1) {
            setStep(s => s + 1);
        } else {
            onComplete();
        }
    };

    const goPrev = () => {
        narration.stop();
        if (step > 0) setStep(s => s - 1);
    };

    // Auto-play narration when slide changes
    useEffect(() => {
        const text = day.explanation.narration?.[NARRATION_KEYS[step]];
        if (text) {
            // Small delay so animations start first
            const timer = setTimeout(() => narration.speak(text), 600);
            return () => clearTimeout(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step, day.id]);

    // Stop narration on unmount
    useEffect(() => {
        return () => narration.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isLastStep = step === TOTAL_STEPS - 1;

    const narrationText = day.explanation.narration?.[NARRATION_KEYS[step]];

    const stepContent = [
        <Step1Formula key={`step-0-${day.id}`} day={day} />,
        <Step2SignalWords key={`step-1-${day.id}`} day={day} />,
        <Step3Examples key={`step-2-${day.id}`} day={day} />,
    ];

    return (
        <Box
            sx={{
                maxWidth: 700,
                mx: 'auto',
                p: { xs: 1, md: 3 },
                ...fadeSlideIn,
                ...scaleIn,
                ...bounceIn,
            }}
        >
            {/* Top bar: back button + progress dots + narration button */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Button
                    startIcon={<BackIcon />}
                    onClick={onBack}
                    sx={{ color: 'text.secondary', textTransform: 'none' }}
                >
                    Back
                </Button>
                <ProgressDots step={step} total={TOTAL_STEPS} />
                <NarrationButton text={narrationText} narration={narration} />
            </Stack>

            {/* Step label */}
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', textAlign: 'center', mb: 1, letterSpacing: 1, textTransform: 'uppercase' }}
            >
                Step {step + 1} of {TOTAL_STEPS}
            </Typography>

            {/* Slide content */}
            <Box
                sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(16,185,129,0.2)',
                    bgcolor: 'rgba(255,255,255,0.02)',
                    minHeight: 360,
                    mb: 3,
                }}
            >
                <Fade in timeout={350} key={`fade-${step}`}>
                    <Box>{stepContent[step]}</Box>
                </Fade>
            </Box>

            {/* Navigation buttons */}
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                {step > 0 ? (
                    <Button
                        startIcon={<BackIcon />}
                        onClick={goPrev}
                        variant="outlined"
                        sx={{
                            textTransform: 'none',
                            borderColor: 'rgba(255,255,255,0.2)',
                            color: 'text.secondary',
                            '&:hover': { borderColor: 'rgba(255,255,255,0.4)', bgcolor: 'rgba(255,255,255,0.04)' },
                        }}
                    >
                        Back
                    </Button>
                ) : (
                    <Box />
                )}

                <Button
                    endIcon={<NextIcon />}
                    onClick={goNext}
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '1rem',
                        px: 4,
                        py: 1.2,
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        borderRadius: 2,
                        boxShadow: '0 4px 16px rgba(16,185,129,0.3)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #059669, #047857)',
                            transform: 'translateY(-1px)',
                            boxShadow: '0 6px 20px rgba(16,185,129,0.4)',
                        },
                        transition: 'all 0.25s ease',
                    }}
                >
                    {isLastStep ? "Let's Practice!" : 'Next'}
                </Button>
            </Stack>
        </Box>
    );
}
