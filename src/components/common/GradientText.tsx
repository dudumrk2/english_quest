import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface GradientTextProps extends TypographyProps {
    children: React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, sx, ...props }) => {
    return (
        <Typography
            sx={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                ...sx,
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};
