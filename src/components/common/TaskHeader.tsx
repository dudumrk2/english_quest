import { Box, Typography, Stack } from '@mui/material';

export interface TaskHeaderProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    gradient: string;
    textColor?: string;
}

export function TaskHeader({ icon, title, subtitle, gradient, textColor = 'white' }: TaskHeaderProps) {
    return (
        <Box
            sx={{
                p: { xs: 2, md: 3 },
                mb: 4,
                background: gradient,
                color: textColor,
                borderRadius: 2,
                boxShadow: 2,
            }}
        >
            <Stack direction="row" spacing={2} alignItems="center">
                {icon}
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)', fontSize: { xs: '1.5rem', md: '2.125rem' } }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        {subtitle}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}
