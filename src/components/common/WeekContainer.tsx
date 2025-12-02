import React from 'react';
import { Paper, Stack, Typography, LinearProgress, Box, Chip } from '@mui/material';
import { Lock } from '@mui/icons-material';

export interface WeekContainerProps {
    week: number;
    progress: number;
    isLocked: boolean;
    children: React.ReactNode;
}

export const WeekContainer: React.FC<WeekContainerProps> = ({
    week,
    progress,
    isLocked,
    children,
}) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                bgcolor: 'background.paper',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                opacity: isLocked ? 0.5 : 1,
                filter: isLocked ? 'grayscale(1)' : 'none',
            }}
        >
            {/* Week Header */}
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <Typography variant="h5" color="primary" fontWeight={700}>
                    Week {week}
                </Typography>
                {isLocked && <Chip icon={<Lock />} label="Locked" size="small" />}
                <Box flexGrow={1} />
                <Typography variant="body2" color="text.secondary">
                    {Math.round(progress)}% Complete
                </Typography>
            </Stack>

            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ mb: 3, height: 6, borderRadius: 3 }}
            />

            {children}
        </Paper>
    );
};
