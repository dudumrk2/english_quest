import React from 'react';
import {
    Box, Typography, Card, CardActionArea, CardContent,
    Stack, Button, Chip,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    CheckCircle as CheckCircleIcon,
    PlayArrow as StartIcon,
    Replay as ReviewIcon,
    School as SchoolIcon,
} from '@mui/icons-material';
import { GradientText } from './common/GradientText';
import { lessons } from '../data/lessons';
import type { Lesson } from '../types';

interface GrammarWeek13Props {
    completedLessons: number[];
    onBack: () => void;
    onStartLesson: (lesson: Lesson) => void;
}

export const GrammarWeek13: React.FC<GrammarWeek13Props> = ({
    completedLessons,
    onBack,
    onStartLesson,
}) => {
    const week13Lessons = lessons
        .filter((l) => l.week === 13)
        .sort((a, b) => a.day - b.day);

    return (
        <Box sx={{ maxWidth: 700, mx: 'auto' }}>
            {/* Back button */}
            <Button
                startIcon={<BackIcon />}
                onClick={onBack}
                sx={{ mb: 2, color: 'text.secondary', textTransform: 'none' }}
            >
                חזרה ל-Grammar Practice
            </Button>

            {/* Header */}
            <Box textAlign="center" mb={5}>
                <GradientText
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Past Simple — Week 13
                </GradientText>
                <Typography variant="h6" color="text.secondary" sx={{ direction: 'rtl' }}>
                    שישה שיעורים על Past Simple
                </Typography>
            </Box>

            {/* Lesson cards */}
            <Stack spacing={2}>
                {week13Lessons.map((lesson) => {
                    const isCompleted = completedLessons.includes(lesson.id);

                    return (
                        <Card
                            key={lesson.id}
                            sx={{
                                border: isCompleted
                                    ? '1px solid rgba(99,102,241,0.35)'
                                    : '1px solid rgba(255,255,255,0.1)',
                                bgcolor: isCompleted
                                    ? 'rgba(99,102,241,0.06)'
                                    : 'background.paper',
                                transition: 'transform 0.15s, box-shadow 0.15s',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: isCompleted
                                        ? '0 8px 30px rgba(99,102,241,0.2)'
                                        : '0 8px 30px rgba(139,92,246,0.2)',
                                },
                            }}
                        >
                            <CardActionArea onClick={() => onStartLesson(lesson)}>
                                <CardContent sx={{ p: 3 }}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 2,
                                                bgcolor: isCompleted
                                                    ? 'rgba(99,102,241,0.15)'
                                                    : 'rgba(139,92,246,0.12)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {isCompleted ? (
                                                <CheckCircleIcon sx={{ fontSize: 30, color: '#818cf8' }} />
                                            ) : (
                                                <SchoolIcon sx={{ fontSize: 28, color: '#8b5cf6' }} />
                                            )}
                                        </Box>

                                        {/* Info */}
                                        <Box flex={1} minWidth={0}>
                                            <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: isCompleted ? '#818cf8' : '#8b5cf6',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 0.5,
                                                    }}
                                                >
                                                    Day {lesson.day}
                                                </Typography>
                                                {isCompleted && (
                                                    <Chip
                                                        label="הושלם"
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'rgba(99,102,241,0.15)',
                                                            color: '#818cf8',
                                                            fontSize: '0.7rem',
                                                            height: 20,
                                                            direction: 'rtl',
                                                        }}
                                                    />
                                                )}
                                            </Stack>
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                color="text.primary"
                                                sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}
                                            >
                                                {lesson.title}
                                            </Typography>
                                        </Box>

                                        {/* Action button */}
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={isCompleted ? <ReviewIcon /> : <StartIcon />}
                                            sx={{
                                                flexShrink: 0,
                                                background: isCompleted
                                                    ? 'linear-gradient(135deg, #6366f1, #4f46e5)'
                                                    : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                                textTransform: 'none',
                                                fontWeight: 700,
                                                minWidth: 80,
                                            }}
                                        >
                                            {isCompleted ? 'Review' : 'Start'}
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </Stack>
        </Box>
    );
};
