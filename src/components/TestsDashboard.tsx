import { useState } from 'react';
import {
    Box, Typography, Card, CardContent, CardActionArea,
    Stack, Chip, Button, Tooltip,
} from '@mui/material';
import {
    Quiz as QuizIcon,
    EmojiEvents as TrophyIcon,
    PlayArrow as StartIcon,
    ArrowBack as BackIcon,
    Lock as LockIcon,
    LockOpen as UnlockIcon,
} from '@mui/icons-material';
import { tests } from '../data/tests';
import { TestRunner } from './TestRunner';
import type { Test, TestResult } from '../types/test';
import { GradientText } from './common/GradientText';

const RESULTS_KEY = 'nadav-english-test-results';

function loadResults(): Record<string, TestResult> {
    try {
        const raw = localStorage.getItem(RESULTS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveResult(result: TestResult) {
    const all = loadResults();
    const existing = all[result.testId];
    if (!existing || result.score > existing.score) {
        all[result.testId] = result;
        localStorage.setItem(RESULTS_KEY, JSON.stringify(all));
    }
}

function isTestLocked(test: Test, results: Record<string, TestResult>): boolean {
    if (!test.lockedUntil) return false;
    const required = results[test.lockedUntil];
    return !required || required.percentage < 80;
}

interface TestsDashboardProps {
    onBack: () => void;
}

export function TestsDashboard({ onBack }: TestsDashboardProps) {
    const [selectedTest, setSelectedTest] = useState<Test | null>(null);
    const [results, setResults] = useState<Record<string, TestResult>>(loadResults);

    const handleComplete = (result: TestResult) => {
        saveResult(result);
        setResults(loadResults());
    };

    if (selectedTest) {
        return (
            <TestRunner
                test={selectedTest}
                onBack={() => setSelectedTest(null)}
                onComplete={handleComplete}
            />
        );
    }

    return (
        <Box>
            {/* Header */}
            <Button
                startIcon={<BackIcon />}
                onClick={onBack}
                sx={{ mb: 2, color: 'text.secondary', textTransform: 'none' }}
            >
                Back to Mission Control
            </Button>

            <Box textAlign="center" mb={5}>
                <GradientText variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    Practice Tests
                </GradientText>
                <Typography variant="h6" color="text.secondary">
                    Practice your school tests and improve your score
                </Typography>
            </Box>

            {/* Test cards */}
            <Stack spacing={3} maxWidth={600} mx="auto">
                {tests.map(test => {
                    const result = results[test.id];
                    const percentage = result
                        ? Math.round((result.score / result.totalPoints) * 100)
                        : null;
                    const scoreColor =
                        percentage === null ? 'default'
                        : percentage >= 80 ? 'success'
                        : percentage >= 60 ? 'warning'
                        : 'error';

                    const locked = isTestLocked(test, results);

                    // Find the name of the required test
                    const requiredTest = test.lockedUntil
                        ? tests.find(t => t.id === test.lockedUntil)
                        : null;
                    const requiredResult = test.lockedUntil ? results[test.lockedUntil] : null;
                    const requiredPct = requiredResult
                        ? Math.round((requiredResult.score / requiredResult.totalPoints) * 100)
                        : 0;

                    const lockTooltip = locked && requiredTest
                        ? `Pass "${requiredTest.title}" with 80%+ to unlock (your best: ${requiredPct}%)`
                        : '';

                    return (
                        <Tooltip key={test.id} title={lockTooltip} placement="top">
                            <Card
                                sx={{
                                    border: locked
                                        ? '1px solid rgba(255,255,255,0.06)'
                                        : '1px solid rgba(255,255,255,0.1)',
                                    bgcolor: locked ? 'rgba(255,255,255,0.02)' : 'background.paper',
                                    opacity: locked ? 0.65 : 1,
                                    transition: 'transform 0.15s, box-shadow 0.15s',
                                    ...(!locked && {
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 30px rgba(99,102,241,0.2)',
                                        },
                                    }),
                                }}
                            >
                                <CardActionArea
                                    onClick={() => !locked && setSelectedTest(test)}
                                    disabled={locked}
                                    sx={{ p: 0, cursor: locked ? 'not-allowed' : 'pointer' }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Stack direction="row" alignItems="flex-start" spacing={2}>
                                            <Box
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: 2,
                                                    bgcolor: locked
                                                        ? 'rgba(255,255,255,0.05)'
                                                        : 'rgba(99,102,241,0.15)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {locked
                                                    ? <LockIcon sx={{ fontSize: 28, color: 'text.disabled' }} />
                                                    : <QuizIcon sx={{ fontSize: 28, color: 'primary.main' }} />
                                                }
                                            </Box>

                                            <Box flex={1}>
                                                <Typography
                                                    variant="h6"
                                                    fontWeight={700}
                                                    color={locked ? 'text.disabled' : 'text.primary'}
                                                >
                                                    {test.title}
                                                </Typography>
                                                {test.subtitle && (
                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                        {test.subtitle}
                                                    </Typography>
                                                )}

                                                {locked && requiredTest ? (
                                                    <Typography variant="caption" color="warning.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <LockIcon sx={{ fontSize: 12 }} />
                                                        Score 80%+ on &quot;{requiredTest.title}&quot; to unlock
                                                        {requiredPct > 0 && ` (your best: ${requiredPct}%)`}
                                                    </Typography>
                                                ) : (
                                                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.5}>
                                                        <Chip
                                                            label={`${test.sections.length} sections`}
                                                            size="small"
                                                            sx={{ bgcolor: 'rgba(255,255,255,0.06)' }}
                                                        />
                                                        <Chip
                                                            label={`${test.totalPoints} points`}
                                                            size="small"
                                                            sx={{ bgcolor: 'rgba(255,255,255,0.06)' }}
                                                        />
                                                        {result && (
                                                            <Chip
                                                                icon={<TrophyIcon />}
                                                                label={`Best: ${result.score}/${result.totalPoints} (${percentage}%)`}
                                                                size="small"
                                                                color={scoreColor as any}
                                                                variant="outlined"
                                                            />
                                                        )}
                                                        {result && percentage !== null && percentage >= 80 && (
                                                            <Chip
                                                                icon={<UnlockIcon />}
                                                                label="Passed"
                                                                size="small"
                                                                color="success"
                                                                variant="outlined"
                                                            />
                                                        )}
                                                    </Stack>
                                                )}
                                            </Box>

                                            {!locked && (
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<StartIcon />}
                                                    sx={{
                                                        flexShrink: 0,
                                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                                        textTransform: 'none',
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {result ? 'Retry' : 'Start'}
                                                </Button>
                                            )}
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Tooltip>
                    );
                })}
            </Stack>
        </Box>
    );
}
