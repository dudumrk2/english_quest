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
} from '@mui/material';
import {
    EmojiEvents as TrophyIcon,
    Whatshot as FlameIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';
import { StatChip } from './common/StatChip';

export const Layout: React.FC<LayoutProps> = ({ children, points, streak, onLogout }) => {
    const { user } = useAuth();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
            {/* Header */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    mt: 2,
                    mx: 2,
                    width: 'calc(100% - 32px)',
                    borderRadius: 2,
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <Toolbar>
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
                        <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                                {user?.name || 'Nadav'}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Level 1 Cadet
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Stats */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <StatChip icon={<TrophyIcon />} value={points} suffix="XP" color="warning" />
                        <StatChip
                            icon={<FlameIcon />}
                            value={streak}
                            suffix="Day Streak"
                            sx={{
                                bgcolor: 'rgba(249, 115, 22, 0.2)',
                                color: '#fb923c',
                                '& .MuiChip-icon': {
                                    color: '#fb923c',
                                },
                            }}
                        />
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
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                {children}
            </Container>
        </Box>
    );
};
