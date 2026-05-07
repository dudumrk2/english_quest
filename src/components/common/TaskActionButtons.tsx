import { Button, Stack } from '@mui/material';

export interface TaskActionButtonsProps {
    onSkip: () => void;
    onSubmit: () => void;
    submitLabel?: string;
    skipLabel?: string;
    submitGradient?: string;
    submitHoverGradient?: string;
    disabled?: boolean;
}

export function TaskActionButtons({
    onSkip,
    onSubmit,
    submitLabel = 'Check Answers',
    skipLabel = 'Skip Lesson',
    submitGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    submitHoverGradient = 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
    disabled = false,
}: TaskActionButtonsProps) {
    return (
        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
            <Button
                fullWidth
                variant="outlined"
                size="large"
                onClick={onSkip}
                sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'text.secondary',
                    borderWidth: 2,
                    '&:hover': { borderWidth: 2, bgcolor: 'rgba(0,0,0,0.05)' },
                }}
            >
                {skipLabel}
            </Button>
            <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={onSubmit}
                disabled={disabled}
                sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: submitGradient,
                    '&:hover': { background: submitHoverGradient },
                    '&.Mui-disabled': { background: '#e2e8f0', color: '#94a3b8' },
                }}
            >
                {submitLabel}
            </Button>
        </Stack>
    );
}
