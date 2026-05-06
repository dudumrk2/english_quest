import React from 'react';
import {
    Box, Typography, Card, CardActionArea, CardContent,
    Stack, Button, LinearProgress,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    CalendarMonth as CalendarIcon,
} from '@mui/icons-material';
import { GradientText } from './common/GradientText';

interface GrammarHubProps {
    completedGrammarDays: number[];
    onBack: () => void;
    onNavigateToGrammarPractice: () => void;
}

export const GrammarHub: React.FC<GrammarHubProps> = ({
    completedGrammarDays,
    onBack,
    onNavigateToGrammarPractice,
}) => {
    const TOTAL_GRAMMAR_DAYS = 14;
    const grammarDaysCompleted = completedGrammarDays.length;
    const grammarProgress = Math.round((grammarDaysCompleted / TOTAL_GRAMMAR_DAYS) * 100);

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
                    14 ימים של הכנה לקראת מבחן המיקסד טנסס
                </Typography>
            </Box>

            {/* 14-Day Test Prep card */}
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
        </Box>
    );
};
