import { useState, useEffect, useRef, useCallback } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
    Chip,
    Fade,
    Tooltip,
    IconButton,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    ArrowForward as NextIcon,
    VolumeUp as VolumeIcon,
    VolumeOff as MuteIcon,
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
    // Split on lines first, then tokens within each line
    const lines = formula.split('\n');
    const tokens: FormulaToken[] = [];

    lines.forEach((line, lineIdx) => {
        if (lineIdx > 0) {
            tokens.push({ text: '\n', type: 'separator' });
        }
        // Split by + | → keeping delimiters
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

// ─── Step 1: Welcome ─────────────────────────────────────────────────────────

function Step1Welcome({ day }: { day: GrammarDay }) {
    return (
        <Box
            sx={{
                ...scaleIn,
                minHeight: 360,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: { xs: 3, md: 5 },
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: 3,
                color: 'white',
                gap: 2,
            }}
        >
            <Chip
                label={`Day ${day.id} of 14`}
                sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    animation: 'fadeSlideIn 0.4s ease forwards',
                    animationDelay: '0.1s',
                    opacity: 0,
                }}
            />
            <Typography
                variant="h3"
                fontWeight={800}
                sx={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    animation: 'scaleIn 0.6s ease forwards',
                    animationDelay: '0.2s',
                    opacity: 0,
                }}
            >
                {day.tense}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    opacity: 0,
                    animation: 'fadeSlideIn 0.5s ease forwards',
                    animationDelay: '0.5s',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                }}
            >
                {day.focus}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    opacity: 0,
                    animation: 'fadeSlideIn 0.5s ease forwards',
                    animationDelay: '0.8s',
                    mt: 1,
                    fontSize: '1.1rem',
                    color: 'rgba(255,255,255,0.85)',
                }}
            >
                Let's master this tense! 💪
            </Typography>
        </Box>
    );
}

// ─── Step 2: Formula ─────────────────────────────────────────────────────────

function Step2Formula({ day }: { day: GrammarDay }) {
    const tokens = parseFormulaTokens(day.explanation.formula);

    // Group tokens into lines for rendering
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
                                // Separator — plain text
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

// ─── Step 3: Signal Words ────────────────────────────────────────────────────

function Step3SignalWords({ day }: { day: GrammarDay }) {
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

// ─── Step 4: Examples ────────────────────────────────────────────────────────

const EXAMPLE_CONFIG = [
    { label: 'Positive', emoji: '✅', borderColor: '#10b981', labelColor: '#34d399', key: 'positive' as const },
    { label: 'Negative', emoji: '❌', borderColor: '#ef4444', labelColor: '#f87171', key: 'negative' as const },
    { label: 'Yes/No', emoji: '❓', borderColor: '#3b82f6', labelColor: '#93c5fd', key: 'yesNo' as const },
    { label: 'WH Question', emoji: '🔍', borderColor: '#a855f7', labelColor: '#d8b4fe', key: 'wh' as const },
];

function Step4Examples({ day }: { day: GrammarDay }) {
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

// ─── TTS helpers ─────────────────────────────────────────────────────────────

/** Build a clean, speakable string for each intro step */
function buildStepText(step: number, day: GrammarDay): string {
    switch (step) {
        case 0:
            return [
                `Day ${day.id} of 14.`,
                `${day.tense}.`,
                `${day.focus}.`,
                day.explanation.usage,
            ].join(' ');

        case 1: {
            // Make the formula readable by replacing symbols
            const readable = day.explanation.formula
                .replace(/\|/g, ' — or in the negative — ')
                .replace(/→/g, ' becomes ')
                .replace(/\+/g, ' plus ')
                .replace(/\n/g, '. ');
            return `The formula. ${readable}. When to use it: ${day.explanation.usage}`;
        }

        case 2:
            if (day.explanation.signalWords.length === 0) {
                return 'This tense has no specific signal words. Use context clues instead.';
            }
            return `Signal words. ${day.explanation.signalWords.join('. ')}.`;

        case 3: {
            const { positive, negative, yesNo, wh } = day.explanation.examples;
            return [
                'Examples.',
                `Positive: ${positive}.`,
                `Negative: ${negative}.`,
                `Yes or no question: ${yesNo}.`,
                `W H question: ${wh}.`,
            ].join(' ');
        }

        default:
            return '';
    }
}

/** React hook: auto-speak when step changes, respects muted state */
function useStepSpeech(step: number, day: GrammarDay, muted: boolean) {
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const [speaking, setSpeaking] = useState(false);

    const cancel = useCallback(() => {
        window.speechSynthesis.cancel();
        setSpeaking(false);
    }, []);

    useEffect(() => {
        if (muted) { cancel(); return; }

        // Small delay so the slide-in animation starts first
        const timer = setTimeout(() => {
            window.speechSynthesis.cancel();

            const text = buildStepText(step, day);
            if (!text) return;

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.88;
            utterance.pitch = 1;

            utterance.onstart = () => setSpeaking(true);
            utterance.onend = () => setSpeaking(false);
            utterance.onerror = () => setSpeaking(false);

            utteranceRef.current = utterance;
            window.speechSynthesis.speak(utterance);
        }, 400);

        return () => {
            clearTimeout(timer);
            window.speechSynthesis.cancel();
            setSpeaking(false);
        };
    }, [step, day, muted, cancel]);

    return { speaking, cancel };
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

const TOTAL_STEPS = 4;

export function GrammarIntro({ day, onComplete, onBack }: GrammarIntroProps) {
    const [step, setStep] = useState(0);
    const [muted, setMuted] = useState(false);

    const { speaking, cancel } = useStepSpeech(step, day, muted);

    const goNext = () => {
        cancel();
        if (step < TOTAL_STEPS - 1) {
            setStep(s => s + 1);
        } else {
            onComplete();
        }
    };

    const goPrev = () => {
        cancel();
        if (step > 0) setStep(s => s - 1);
    };

    const isLastStep = step === TOTAL_STEPS - 1;

    const stepContent = [
        <Step1Welcome key={`step-0-${day.id}`} day={day} />,
        <Step2Formula key={`step-1-${day.id}`} day={day} />,
        <Step3SignalWords key={`step-2-${day.id}`} day={day} />,
        <Step4Examples key={`step-3-${day.id}`} day={day} />,
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
            {/* Top bar: back button + progress dots + mute */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Button
                    startIcon={<BackIcon />}
                    onClick={onBack}
                    sx={{ color: 'text.secondary', textTransform: 'none' }}
                >
                    Back
                </Button>
                <ProgressDots step={step} total={TOTAL_STEPS} />
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    {/* Speaking pulse indicator */}
                    {speaking && !muted && (
                        <Box
                            sx={{
                                width: 8, height: 8, borderRadius: '50%',
                                bgcolor: '#10b981',
                                '@keyframes pulse': {
                                    '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                                    '50%': { transform: 'scale(1.6)', opacity: 0.5 },
                                },
                                animation: 'pulse 1.2s ease-in-out infinite',
                            }}
                        />
                    )}
                    <Tooltip title={muted ? 'Turn on audio' : 'Mute audio'}>
                        <IconButton
                            onClick={() => setMuted(m => !m)}
                            size="small"
                            sx={{ color: muted ? 'text.disabled' : '#10b981' }}
                        >
                            {muted ? <MuteIcon fontSize="small" /> : <VolumeIcon fontSize="small" />}
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>

            {/* Step label */}
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', textAlign: 'center', mb: 1, letterSpacing: 1, textTransform: 'uppercase' }}
            >
                Step {step + 1} of {TOTAL_STEPS}
            </Typography>

            {/* Slide content — key changes force remount + re-animation */}
            <Box
                sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: step === 0 ? 'none' : '1px solid rgba(16,185,129,0.2)',
                    bgcolor: step === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
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
