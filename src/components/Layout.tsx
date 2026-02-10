import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { LayoutProps } from '../types';
import {
    AppBar,
    Toolbar,
    Box,
    Avatar,
    Typography,
    IconButton,
    Container,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    EmojiEvents as TrophyIcon,
    Whatshot as FlameIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';
import { StatChip } from './common/StatChip';

export const Layout: React.FC<LayoutProps> = ({ children, points, streak, onLogout, activeLesson, onBack }) => {
    const { user } = useAuth();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
            {/* Header */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    mt: { xs: 0, sm: 2 },
                    mx: { xs: 0, sm: 2 },
                    width: { xs: '100%', sm: 'calc(100% - 32px)' },
                    borderRadius: { xs: 0, sm: 2 },
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.1)', sm: 'none' },
                    border: { xs: 'none', sm: '1px solid rgba(255, 255, 255, 0.1)' },
                }}
            >
                <Toolbar sx={{ flexWrap: 'wrap', minHeight: { xs: 64, sm: 70 }, py: { xs: 1, sm: 0 } }}>
                    {/* User Info */}
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
                        <Avatar
                            src={user?.picture}
                            alt={user?.name}
                            sx={{
                                width: 40,
                                height: 40,
                                border: '2px solid',
                                borderColor: 'primary.main',
                            }}
                        >
                            {user?.name?.charAt(0)}
                        </Avatar>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                                {user?.name || 'Nadav'}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {activeLesson ? `Week ${activeLesson.week} • Day ${activeLesson.day}` : 'English Quest'}
                            </Typography>
                        </Box>
                        {/* Mobile only simplified text */}
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                {activeLesson ? `W${activeLesson.week}•D${activeLesson.day}` : 'Quest'}
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Stats */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <StatChip
                            icon={<TrophyIcon />}
                            value={points}
                            suffix={!isMobile ? "XP" : ""}
                            color="warning"
                            size="small"
                        />
                        <StatChip
                            icon={<FlameIcon />}
                            value={streak}
                            suffix={!isMobile ? "Day Streak" : ""}
                            size="small"
                            sx={{
                                bgcolor: 'rgba(249, 115, 22, 0.2)',
                                color: '#fb923c',
                                '& .MuiChip-icon': {
                                    color: '#fb923c',
                                },
                            }}
                        />
                        {activeLesson && onBack && (
                            <IconButton
                                onClick={onBack}
                                size="small"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'text.primary',
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 1,
                                    ml: 1,
                                }}
                                title="Back to Dashboard"
                            >
                                <Typography variant="caption" sx={{ px: 1, display: 'flex', alignItems: 'center' }}>
                                    Back
                                </Typography>
                            </IconButton>
                        )}
                        <IconButton
                            onClick={onLogout}
                            size="small"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': {
                                    color: 'text.primary',
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="xl" sx={{ mt: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}>
                {children}
            </Container>
        </Box>
    );
};
