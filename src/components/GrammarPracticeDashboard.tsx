import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Stack,
    Chip,
    Button,
    LinearProgress,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    Lock as LockIcon,
    CheckCircle as CheckCircleIcon,
    PlayArrow as StartIcon,
    Replay as ReviewIcon,
    MenuBook as MenuBookIcon,
} from '@mui/icons-material';
import { grammarDays } from '../data/grammar-practice';
import type { GrammarDay } from '../types/grammar-practice';
import { GradientText } from './common/GradientText';

interface GrammarPracticeDashboardProps {
    completedGrammarDays: number[];
    onBack: () => void;
    onStartDay: (day: GrammarDay) => void;
}

export function GrammarPracticeDashboard({
    completedGrammarDays,
    onBack,
    onStartDay,
}: GrammarPracticeDashboardProps) {
    const totalDays = grammarDays.length;
    const completedCount = completedGrammarDays.length;
    const overallProgress = Math.round((completedCount / totalDays) * 100);

    const isDayUnlocked = (dayId: number): boolean => {
        if (dayId === 1) return true;
        return completedGrammarDays.includes(dayId - 1);
    };

    return (
        <Box>
            {/* Back button */}
            <Button
                startIcon={<BackIcon />}
                onClick={onBack}
                sx={{ mb: 2, color: 'text.secondary', textTransform: 'none' }}
            >
                חזרה לדף הבית
            </Button>

            {/* Header */}
            <Box textAlign="center" mb={5}>
                <GradientText
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        background: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Grammar Practice
                </GradientText>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                    Master the 4 key English tenses — 14 days of guided practice
                </Typography>

                {/* Overall progress */}
                <Box maxWidth={400} mx="auto">
                    <Stack direction="row" justifyContent="space-between" mb={0.5}>
                        <Typography variant="body2" color="text.secondary">Overall progress</Typography>
                        <Typography variant="body2" color="text.secondary">{completedCount}/{totalDays} days</Typography>
                    </Stack>
                    <LinearProgress
                        variant="determinate"
                        value={overallProgress}
                        sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '& .MuiLinearProgress-bar': {
                                background: 'linear-gradient(90deg, #34d399, #059669)',
                                borderRadius: 4,
                            },
                        }}
                    />
                </Box>
            </Box>

            {/* Day cards */}
            <Stack spacing={2} maxWidth={700} mx="auto">
                {grammarDays.map(day => {
                    const isCompleted = completedGrammarDays.includes(day.id);
                    const unlocked = isDayUnlocked(day.id);

                    return (
                        <Card
                            key={day.id}
                            sx={{
                                border: isCompleted
                                    ? '1px solid rgba(52,211,153,0.35)'
                                    : unlocked
                                        ? '1px solid rgba(255,255,255,0.1)'
                                        : '1px solid rgba(255,255,255,0.05)',
                                bgcolor: isCompleted
                                    ? 'rgba(52,211,153,0.06)'
                                    : unlocked
                                        ? 'background.paper'
                                        : 'rgba(255,255,255,0.02)',
                                opacity: unlocked ? 1 : 0.55,
                                transition: 'transform 0.15s, box-shadow 0.15s',
                                ...(unlocked && {
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: isCompleted
                                            ? '0 8px 30px rgba(52,211,153,0.2)'
                                            : '0 8px 30px rgba(5,150,105,0.2)',
                                    },
                                }),
                            }}
                        >
                            <CardActionArea
                                onClick={() => unlocked && onStartDay(day)}
                                disabled={!unlocked}
                                sx={{ cursor: unlocked ? 'pointer' : 'not-allowed' }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        {/* Day icon / status */}
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 2,
                                                bgcolor: isCompleted
                                                    ? 'rgba(52,211,153,0.15)'
                                                    : unlocked
                                                        ? 'rgba(5,150,105,0.15)'
                                                        : 'rgba(255,255,255,0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {isCompleted ? (
                                                <CheckCircleIcon sx={{ fontSize: 30, color: 'success.main' }} />
                                            ) : unlocked ? (
                                                <MenuBookIcon sx={{ fontSize: 28, color: '#34d399' }} />
                                            ) : (
                                                <LockIcon sx={{ fontSize: 26, color: 'text.disabled' }} />
                                            )}
                                        </Box>

                                        {/* Day info */}
                                        <Box flex={1} minWidth={0}>
                                            <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" gap={0.5} mb={0.5}>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: isCompleted ? 'success.main' : unlocked ? '#34d399' : 'text.disabled',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 0.5,
                                                    }}
                                                >
                                                    Day {day.id}
                                                </Typography>
                                                <Chip
                                                    label={day.tense}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(255,255,255,0.07)',
                                                        fontSize: '0.7rem',
                                                        height: 20,
                                                    }}
                                                />
                                            </Stack>
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                color={unlocked ? 'text.primary' : 'text.disabled'}
                                                sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.3 }}
                                            >
                                                {day.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                                {day.explanation.usage.split('.')[0]}.
                                            </Typography>
                                            <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>
                                                {day.exercises.length} exercises
                                            </Typography>
                                        </Box>

                                        {/* Action button */}
                                        {unlocked && (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={isCompleted ? <ReviewIcon /> : <StartIcon />}
                                                sx={{
                                                    flexShrink: 0,
                                                    background: isCompleted
                                                        ? 'linear-gradient(135deg, #34d399, #059669)'
                                                        : 'linear-gradient(135deg, #10b981, #047857)',
                                                    textTransform: 'none',
                                                    fontWeight: 700,
                                                    minWidth: 80,
                                                }}
                                            >
                                                {isCompleted ? 'Review' : 'Start'}
                                            </Button>
                                        )}
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </Stack>
        </Box>
    );
}
