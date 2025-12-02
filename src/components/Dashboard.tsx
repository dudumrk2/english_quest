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
    onStartLesson,
}) => {
    const weeks = [1, 2, 3, 4, 5, 6];

    const getWeekProgress = (week: number): number => {
        const weekLessons = lessons.filter((l) => l.week === week);
        const completed = weekLessons.filter((l) => completedLessons.includes(l.id)).length;
        return (completed / weekLessons.length) * 100;
    };

    return (
        <Box>
            {/* Header */}
            <Box textAlign="center" mb={6}>
                <GradientText variant="h3" gutterBottom>
                    Mission Control
                </GradientText>
                <Typography variant="h6" color="text.secondary">
                    Select your next mission, Commander
                </Typography>
            </Box>

            {/* Weeks Grid */}
            <Stack spacing={4}>
                {weeks.map((week) => {
                    const weekLessons = lessons.filter((l) => l.week === week);
                    const isWeekLocked =
                        week > 1 &&
                        !lessons
                            .filter((l) => l.week === week - 1)
                            .every((l) => completedLessons.includes(l.id));
                    const progress = getWeekProgress(week);

                    return (
                        <WeekContainer key={week} week={week} progress={progress} isLocked={isWeekLocked}>
                            <Grid container spacing={2}>
                                {weekLessons.map((lesson: Lesson) => {
                                    const isCompleted = completedLessons.includes(lesson.id);
                                    const isCurrent = lesson.id === currentLessonId;
                                    const isLocked =
                                        !isCompleted && !isCurrent && lesson.id > currentLessonId;
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
                                                                : isCurrent
                                                                    ? 'primary.main'
                                                                    : 'text.secondary',
                                                        }}
                                                    />
                                                }
                                                isCompleted={isCompleted}
                                                isCurrent={isCurrent}
                                                isLocked={isLocked || isWeekLocked}
                                                onClick={() => !isLocked && !isWeekLocked && onStartLesson(lesson)}
                                            />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </WeekContainer>
                    );
                })}
            </Stack>
        </Box>
    );
};
