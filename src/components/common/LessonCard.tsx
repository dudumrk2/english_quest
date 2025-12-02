import React from 'react';
import { Card, CardContent, CardActionArea, Typography, Box, Chip, Stack } from '@mui/material';
import { CheckCircle, Lock, PlayArrow } from '@mui/icons-material';

export interface LessonCardProps {
    day: number;
    title: string;
    type: string;
    icon: React.ReactNode;
    isCompleted: boolean;
    isCurrent: boolean;
    isLocked: boolean;
    onClick: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
    day,
    title,
    type,
    icon,
    isCompleted,
    isCurrent,
    isLocked,
    onClick,
}) => {
    return (
        <Card
            elevation={isCurrent ? 8 : 0}
            sx={{
                height: '100%',
                border: '2px solid',
                borderColor: isCompleted
                    ? 'success.main'
                    : isCurrent
                        ? 'primary.main'
                        : 'rgba(255, 255, 255, 0.1)',
                bgcolor: isCompleted
                    ? 'rgba(16, 185, 129, 0.1)'
                    : isCurrent
                        ? 'rgba(59, 130, 246, 0.1)'
                        : 'background.paper',
                transform: isCurrent ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: isLocked ? 'scale(1)' : 'scale(1.05)',
                    boxShadow: isLocked ? 0 : 4,
                },
            }}
        >
            <CardActionArea onClick={onClick} disabled={isLocked} sx={{ height: '100%' }}>
                <CardContent>
                    <Stack spacing={1.5}>
                        {/* Day Badge */}
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Chip label={`Day ${day}`} size="small" sx={{ fontWeight: 600 }} />
                            {isCompleted && <CheckCircle color="success" fontSize="small" />}
                            {isLocked && <Lock fontSize="small" />}
                            {isCurrent && (
                                <PlayArrow
                                    color="primary"
                                    fontSize="small"
                                    sx={{ animation: 'pulse 2s ease-in-out infinite' }}
                                />
                            )}
                        </Stack>

                        {/* Icon */}
                        <Box textAlign="center" py={1}>
                            {icon}
                        </Box>

                        {/* Title */}
                        <Typography variant="subtitle2" fontWeight={600} noWrap textAlign="center">
                            {title}
                        </Typography>

                        {/* Type */}
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            textAlign="center"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {type}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
