import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export interface StatChipProps extends Omit<MuiChipProps, 'label'> {
    value: number | string;
    suffix?: string;
}

export const StatChip: React.FC<StatChipProps> = ({ value, suffix = '', icon, ...props }) => {
    return (
        <MuiChip
            icon={icon}
            label={`${value}${suffix ? ` ${suffix}` : ''}`}
            sx={{ fontWeight: 600, ...props.sx }}
            {...props}
        />
    );
};
