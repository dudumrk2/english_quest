import React, { useEffect, useState } from 'react';
import { lessons } from '../data/lessons';
import { DashboardProps, Lesson } from '../types';
import {
    Box, Typography, Grid, Stack, useTheme, useMediaQuery,
    Button, CircularProgress, Snackbar, Alert,
} from '@mui/material';
import {
    MenuBook as ReadingIcon,
    School as GrammarIcon,
    RecordVoiceOver as PronunciationIcon,
    Translate as TranslateIcon,
    Extension as ExtensionIcon,
    CloudUpload as CloudUploadIcon,
    CloudDownload as CloudDownloadIcon,
} from '@mui/icons-material';
import { LessonCard } from './common/LessonCard';
import { WeekContainer } from './common/WeekContainer';
import { GradientText } from './common/GradientText';

const taskIcons: Record<string, React.ElementType> = {
    reading: ReadingIcon,
    grammar: GrammarIcon,
    pronunciation: PronunciationIcon,
    vocabulary: TranslateIcon,
    vocabulary_matching: ExtensionIcon,
};

export const Dashboard: React.FC<DashboardProps> = ({
    currentLessonId,
    completedLessons,
    skippedLessons,
    lessonAnswers,
    onStartLesson,
    onClearLesson,
    isGoogleUser,
    isSyncing,
    lastSyncedAt,
    onSaveToCloud,
    onLoadFromCloud,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [weeks, setWeeks] = useState<number[]>([]);
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
        open: false, message: '', severity: 'success',
    });

    useEffect(() => {
        // Extract unique weeks
        const uniqueWeeks = Array.from(new Set(lessons.map(l => l.week))).sort((a, b) => a - b);
        setWeeks(uniqueWeeks);
    }, []);

    // Scroll to current lesson on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            const element = document.getElementById(`lesson-${currentLessonId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [currentLessonId]);

    const getWeekProgress = (week: number): number => {
        const weekLessons = lessons.filter((l) => l.week === week);
        const completed = weekLessons.filter((l) => completedLessons.includes(l.id)).length;
        return (completed / weekLessons.length) * 100;
    };

    const handleSave = async () => {
        try {
            await onSaveToCloud?.();
            setSnackbar({ open: true, message: '☁️ Progress saved to cloud!', severity: 'success' });
        } catch {
            setSnackbar({ open: true, message: 'Failed to save. Check your connection.', severity: 'error' });
        }
    };

    const handleLoad = async () => {
        if (!window.confirm('This will replace your local progress with the cloud version. Continue?')) return;
        try {
            await onLoadFromCloud?.();
            setSnackbar({ open: true, message: '☁️ Progress loaded from cloud!', severity: 'success' });
        } catch {
            setSnackbar({ open: true, message: 'Failed to load. Check your connection.', severity: 'error' });
        }
    };

    const formatSyncTime = (iso: string) => {
        const date = new Date(iso);
        return date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    };

    return (
        <Box>
            {/* Header */}
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                <GradientText variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                    Mission Control
                </GradientText>
                <Typography variant="h6" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    Select your next mission, Commander
                </Typography>

                {/* Cloud Sync Buttons - only for Google users */}
                {isGoogleUser && (
                    <Stack
                        direction="row"
                        spacing={1.5}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 2 }}
                    >
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={isSyncing ? <CircularProgress size={16} /> : <CloudUploadIcon />}
                            onClick={handleSave}
                            disabled={isSyncing}
                            sx={{
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                color: '#60a5fa',
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#3b82f6',
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                },
                            }}
                        >
                            Save to Cloud
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={isSyncing ? <CircularProgress size={16} /> : <CloudDownloadIcon />}
                            onClick={handleLoad}
                            disabled={isSyncing}
                            sx={{
                                borderColor: 'rgba(139, 92, 246, 0.5)',
                                color: '#a78bfa',
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#8b5cf6',
                                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                },
                            }}
                        >
                            Load from Cloud
                        </Button>
                        {lastSyncedAt && (
                            <Typography variant="caption" color="text.secondary">
                                Last sync: {formatSyncTime(lastSyncedAt)}
                            </Typography>
                        )}
                    </Stack>
                )}
            </Box>

            {/* Weeks Grid */}
            <Stack spacing={4}>
                {weeks.map((week) => {
                    const weekLessons = lessons
                        .filter((l) => l.week === week)
                        .sort((a, b) => a.day - b.day);
                    const isWeekLocked = false; // Unlocked for demo
                    const progress = getWeekProgress(week);

                    return (
                        <WeekContainer key={week} week={week} progress={progress} isLocked={isWeekLocked}>
                            <Box sx={{
                                overflowX: isMobile ? 'auto' : 'visible',
                                overflowY: 'hidden',
                                display: isMobile ? 'flex' : 'block',
                                pb: isMobile ? 2 : 0, // Space for scrollbar
                                // Scrollbar styling for Webkit
                                '&::-webkit-scrollbar': {
                                    height: '6px', // Horizontal scrollbar height
                                    width: '6px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'transparent',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: theme.palette.divider,
                                    borderRadius: '3px',
                                },
                            }}>
                                <Grid
                                    container
                                    spacing={2}
                                    sx={{
                                        flexWrap: isMobile ? 'nowrap' : 'wrap',
                                        width: isMobile ? 'max-content' : '100%',
                                        px: isMobile ? 1 : 0 // Add some padding on sides for horizontal scroll
                                    }}
                                >
                                    {weekLessons.map((lesson: Lesson) => {
                                        const isCompleted = completedLessons.includes(lesson.id);
                                        const isSkipped = skippedLessons?.includes(lesson.id) ?? false;
                                        const isCurrent = lesson.id === currentLessonId;
                                        const TaskIcon = taskIcons[lesson.type] || ReadingIcon;

                                        const hasData = lessonAnswers[lesson.id] && Object.keys(lessonAnswers[lesson.id]).length > 0;

                                        return (
                                            <Grid
                                                size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                                                key={lesson.id}
                                                id={`lesson-${lesson.id}`}
                                                sx={{
                                                    minWidth: isMobile ? '160px' : 'auto', // Ensure cards don't shrink too much
                                                }}
                                            >
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
                                                    hasData={!!hasData}
                                                    onClear={(e) => {
                                                        e.stopPropagation();
                                                        onClearLesson(lesson.id);
                                                    }}
                                                    onClick={() => onStartLesson(lesson)}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                        </WeekContainer>
                    );
                })}
            </Stack>

            {/* Snackbar for sync feedback */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

