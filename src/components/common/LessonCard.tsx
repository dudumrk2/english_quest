import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Stack, IconButton } from '@mui/material';
import { CheckCircle, Lock, PlayArrow, DeleteOutline } from '@mui/icons-material';

export interface LessonCardProps {
    day: number;
    title: string;
    type: string;
    icon: React.ReactNode;
    isCompleted: boolean;
    isSkipped: boolean;
    isCurrent: boolean;
    isLocked: boolean;
    hasData: boolean;
    onClear: (e: React.MouseEvent) => void;
    onClick: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
    day,
    title,
    type,
    icon,
    isCompleted,
    isSkipped,
    isCurrent,
    isLocked,
    hasData,
    onClear,
    onClick,
}) => {
    return (
        <Card
            elevation={isCurrent ? 8 : 0}
            onClick={!isLocked ? onClick : undefined}
            sx={{
                height: '100%',
                cursor: isLocked ? 'default' : 'pointer',
                border: '2px solid',
                borderColor: isCompleted
                    ? 'success.main'
                    : isSkipped
                        ? 'warning.main'
                        : isCurrent
                            ? 'primary.main'
                            : 'rgba(255, 255, 255, 0.1)',
                bgcolor: isCompleted
                    ? 'rgba(16, 185, 129, 0.1)'
                    : isSkipped
                        ? 'rgba(245, 158, 11, 0.1)'
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
            <CardContent>
                <Stack spacing={1.5}>
                    {/* Day Badge */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Chip label={`Day ${day}`} size="small" sx={{ fontWeight: 600 }} />
                        {hasData && (
                            <IconButton
                                size="small"
                                onClick={onClear}
                                sx={{
                                    color: 'error.main',
                                    '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.08)' }
                                }}
                                title="Clear progress"
                            >
                                <DeleteOutline fontSize="small" />
                            </IconButton>
                        )}
                        {isCompleted && <CheckCircle color="success" fontSize="small" />}
                        {isSkipped && <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 'bold' }}>SKIP</Typography>}
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
        </Card>
    );
};
