import React from 'react';
import { lessons } from '../data/lessons';
import { DashboardProps, Lesson } from '../types';
import { Box, Typography, Grid, Stack } from '@mui/material';
import {
    MenuBook as ReadingIcon,
    School as GrammarIcon,
    Chat as ChatIcon,
    RecordVoiceOver as PronunciationIcon,
} from '@mui/icons-material';
import { LessonCard } from './common/LessonCard';
import { WeekContainer } from './common/WeekContainer';
import { GradientText } from './common/GradientText';

const taskIcons: Record<string, React.ElementType> = {
    reading: ReadingIcon,
    grammar: GrammarIcon,
    chatbot: ChatIcon,
    pronunciation: PronunciationIcon,
};

export const Dashboard: React.FC<DashboardProps> = ({
    currentLessonId,
    completedLessons,
    skippedLessons,
    onStartLesson,
}) => {
    const weeks = Array.from(new Set(lessons.map((lesson) => lesson.week))).sort(
        (a, b) => a - b
    );

    const getWeekProgress = (week: number): number => {
        const weekLessons = lessons.filter((l) => l.week === week);
        const completed = weekLessons.filter((l) => completedLessons.includes(l.id)).length;
        return (completed / weekLessons.length) * 100;
    };

    return (
        <Box>
            {/* Header */}
            < Box textAlign="center" mb={6} >
                <GradientText variant="h3" gutterBottom>
                    Mission Control
                </GradientText>
                <Typography variant="h6" color="text.secondary">
                    Select your next mission, Commander
                </Typography>
            </Box >

            {/* Weeks Grid */}
            < Stack spacing={4} >
                {
                    weeks.map((week) => {
                        const weekLessons = lessons.filter((l) => l.week === week);
                        const isWeekLocked = false; // Unlocked for demo
                        const progress = getWeekProgress(week);

                        return (
                            <WeekContainer key={week} week={week} progress={progress} isLocked={isWeekLocked}>
                                <Grid container spacing={2}>
                                    {weekLessons.map((lesson: Lesson) => {
                                        const isCompleted = completedLessons.includes(lesson.id);
                                        const isSkipped = skippedLessons?.includes(lesson.id) ?? false;
                                        const isCurrent = lesson.id === currentLessonId;
                                        // const isLocked = false; // Unlocked for demo
                                        const TaskIcon = taskIcons[lesson.type] || ReadingIcon;

                                        return (
                                            <Grid item xs={12} sm={6} md={4} lg={2.4} key={lesson.id}>
                                                <LessonCard
                                                    day={lesson.day}
                                                    title={lesson.title}
                                                    type={lesson.type}
                                                    icon={
                                                        <TaskIcon
                                                            sx={{
                                                                fontSize: 40,
                                                                color: isCompleted
                                                                    ? 'success.main'
                                                                    : isSkipped
                                                                        ? 'warning.main'
                                                                        : isCurrent
                                                                            ? 'primary.main'
                                                                            : 'text.secondary',
                                                            }}
                                                        />
                                                    }
                                                    isCompleted={isCompleted}
                                                    isSkipped={isSkipped}
                                                    isCurrent={isCurrent}
                                                    isLocked={false} // Unlocked for demo
                                                    onClick={() => onStartLesson(lesson)}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </WeekContainer>
                        );
                    })
                }
            </Stack >
        </Box >
    );
};
