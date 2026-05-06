import React from 'react';
import {
    Box, Typography, Card, CardActionArea, CardContent,
    Grid, Stack, Chip,
} from '@mui/material';
import {
    MenuBook as MenuBookIcon,
    Edit as EditIcon,
    Quiz as QuizIcon,
    Bolt as BoltIcon,
    LocalFireDepartment as FireIcon,
} from '@mui/icons-material';
import { GradientText } from './common/GradientText';

interface HomeScreenProps {
    onNavigateToDashboard: () => void;
    onNavigateToGrammarHub: () => void;
    onNavigateToTests: () => void;
    points: number;
    streak: number;
}

interface NavCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    gradient: string;
    shadowColor: string;
    onClick: () => void;
}

const NavCard: React.FC<NavCardProps> = ({ icon, title, subtitle, gradient, shadowColor, onClick }) => (
    <Card
        sx={{
            background: gradient,
            border: 'none',
            borderRadius: 3,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 12px 40px ${shadowColor}`,
            },
            height: '100%',
        }}
    >
        <CardActionArea
            onClick={onClick}
            sx={{ height: '100%', p: 0 }}
        >
            <CardContent
                sx={{
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 2,
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        width: 72,
                        height: 72,
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {icon}
                </Box>
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight={800}
                        color="white"
                        gutterBottom
                        sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: { xs: '0.875rem', md: '1rem' },
                            direction: 'rtl',
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
);

export const HomeScreen: React.FC<HomeScreenProps> = ({
    onNavigateToDashboard,
    onNavigateToGrammarHub,
    onNavigateToTests,
    points,
    streak,
}) => {
    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', py: { xs: 2, md: 4 } }}>
            {/* Header */}
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                <GradientText
                    variant="h3"
                    gutterBottom
                    sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                >
                    English Quest 🚀
                </GradientText>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ direction: 'rtl', mb: 3 }}
                >
                    !שלום נדב
                </Typography>

                {/* Stats chips */}
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Chip
                        icon={<BoltIcon sx={{ color: '#fbbf24 !important' }} />}
                        label={`${points} נקודות`}
                        sx={{
                            bgcolor: 'rgba(251,191,36,0.12)',
                            border: '1px solid rgba(251,191,36,0.3)',
                            color: '#fbbf24',
                            fontWeight: 700,
                            direction: 'rtl',
                        }}
                    />
                    <Chip
                        icon={<FireIcon sx={{ color: '#f97316 !important' }} />}
                        label={`${streak} ימים רצופים`}
                        sx={{
                            bgcolor: 'rgba(249,115,22,0.12)',
                            border: '1px solid rgba(249,115,22,0.3)',
                            color: '#f97316',
                            fontWeight: 700,
                            direction: 'rtl',
                        }}
                    />
                </Stack>
            </Box>

            {/* Navigation cards */}
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <NavCard
                        icon={<MenuBookIcon sx={{ fontSize: 40, color: 'white' }} />}
                        title="Reading & Vocabulary"
                        subtitle="סיפורים, אוצר מילים ושיעורי קריאה"
                        gradient="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                        shadowColor="rgba(99,102,241,0.4)"
                        onClick={onNavigateToDashboard}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <NavCard
                        icon={<EditIcon sx={{ fontSize: 40, color: 'white' }} />}
                        title="Grammar Practice"
                        subtitle="תחביר, זמנים ותרגול לקראת המבחן"
                        gradient="linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)"
                        shadowColor="rgba(16,185,129,0.4)"
                        onClick={onNavigateToGrammarHub}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <NavCard
                        icon={<QuizIcon sx={{ fontSize: 40, color: 'white' }} />}
                        title="Practice Tests"
                        subtitle="מבחני תרגול מלאים עם ניקוד"
                        gradient="linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
                        shadowColor="rgba(245,158,11,0.4)"
                        onClick={onNavigateToTests}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
