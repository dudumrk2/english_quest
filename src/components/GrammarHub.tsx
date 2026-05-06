import React from 'react';
import {
    Box, Typography, Card, CardActionArea, CardContent,
    Stack, Button, LinearProgress,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    CalendarMonth as CalendarIcon,
    HistoryEdu as HistoryEduIcon,
} from '@mui/icons-material';
import { GradientText } from './common/GradientText';
import { lessons } from '../data/lessons';

interface GrammarHubProps {
    completedGrammarDays: number[];
    completedLessons: number[];
    onBack: () => void;
    onNavigateToGrammarPractice: () => void;
    onNavigateToWeek13: () => void;
}

export const GrammarHub: React.FC<GrammarHubProps> = ({
    completedGrammarDays,
    completedLessons,
    onBack,
    onNavigateToGrammarPractice,
    onNavigateToWeek13,
}) => {
    const TOTAL_GRAMMAR_DAYS = 14;
    const grammarDaysCompleted = completedGrammarDays.length;
    const grammarProgress = Math.round((grammarDaysCompleted / TOTAL_GRAMMAR_DAYS) * 100);

    const week13Lessons = lessons.filter((l) => l.week === 13);
    const week13Completed = week13Lessons.filter((l) => completedLessons.includes(l.id)).length;
    const week13Total = week13Lessons.length;
    const week13Progress = week13Total > 0 ? Math.round((week13Completed / week13Total) * 100) : 0;

    return (
        <Box sx={{ maxWidth: 700, mx: 'auto' }}>
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
                        background: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Grammar Practice
                </GradientText>
                <Typography variant="h6" color="text.secondary">
                    בחר את הנושא שברצונך לתרגל
                </Typography>
            </Box>

            {/* Option cards */}
            <Stack spacing={3}>
                {/* Option A: 14-Day Test Prep */}
                <Card
                    sx={{
                        border: '1px solid rgba(16,185,129,0.25)',
                        bgcolor: 'background.paper',
                        transition: 'transform 0.15s, box-shadow 0.15s',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 40px rgba(16,185,129,0.25)',
                        },
                    }}
                >
                    <CardActionArea onClick={onNavigateToGrammarPractice}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="flex-start" spacing={3}>
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 2,
                                        background: 'linear-gradient(135deg, #10b981, #0ea5e9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <CalendarIcon sx={{ fontSize: 32, color: 'white' }} />
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="h6" fontWeight={700} gutterBottom>
                                        14-Day Test Prep
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2, direction: 'rtl' }}
                                    >
                                        14 ימים של הכנה לקראת מבחן המיקסד טנסס
                                    </Typography>
                                    <Stack direction="row" justifyContent="space-between" mb={0.5}>
                                        <Typography variant="caption" color="text.secondary">
                                            התקדמות כוללת
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {grammarDaysCompleted}/{TOTAL_GRAMMAR_DAYS} ימים
                                        </Typography>
                                    </Stack>
                                    <LinearProgress
                                        variant="determinate"
                                        value={grammarProgress}
                                        sx={{
                                            height: 6,
                                            borderRadius: 3,
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                background: 'linear-gradient(90deg, #10b981, #0ea5e9)',
                                                borderRadius: 3,
                                            },
                                        }}
                                    />
                                </Box>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {/* Option B: Past Simple Week 13 */}
                <Card
                    sx={{
                        border: '1px solid rgba(99,102,241,0.25)',
                        bgcolor: 'background.paper',
                        transition: 'transform 0.15s, box-shadow 0.15s',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 40px rgba(99,102,241,0.25)',
                        },
                    }}
                >
                    <CardActionArea onClick={onNavigateToWeek13}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="flex-start" spacing={3}>
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 2,
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <HistoryEduIcon sx={{ fontSize: 32, color: 'white' }} />
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="h6" fontWeight={700} gutterBottom>
                                        Past Simple — Week 13
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2, direction: 'rtl' }}
                                    >
                                        שישה שיעורים על Past Simple — פעלים רגולריים, בלתי-רגולריים, שלילה ושאלות
                                    </Typography>
                                    <Stack direction="row" justifyContent="space-between" mb={0.5}>
                                        <Typography variant="caption" color="text.secondary">
                                            התקדמות
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {week13Completed}/{week13Total} שיעורים
                                        </Typography>
                                    </Stack>
                                    <LinearProgress
                                        variant="determinate"
                                        value={week13Progress}
                                        sx={{
                                            height: 6,
                                            borderRadius: 3,
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                                                borderRadius: 3,
                                            },
                                        }}
                                    />
                                </Box>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>
        </Box>
    );
};
