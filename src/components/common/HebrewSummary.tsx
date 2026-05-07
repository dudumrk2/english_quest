import { Card, CardContent, Stack, Typography, Divider, TextField, Alert } from '@mui/material';
import { Create as WriteIcon } from '@mui/icons-material';

export interface HebrewSummaryProps {
    value: string;
    onChange: (value: string) => void;
    showError?: boolean;
    title?: string;
    description?: string;
    placeholder?: string;
}

export function HebrewSummary({
    value,
    onChange,
    showError = false,
    title = 'Summary in Hebrew - סיכום בעברית',
    description = 'סכם את הקטע שקראת בעברית (לפחות 2-3 משפטים)',
    placeholder = 'כתוב את הסיכום שלך כאן...',
}: HebrewSummaryProps) {
    return (
        <Card elevation={2}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <WriteIcon color="warning" />
                    <Typography variant="h6" fontWeight={600}>
                        {title}
                    </Typography>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary" mb={2} dir="rtl">
                    {description}
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    dir="rtl"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            fontFamily: '"Arial", sans-serif',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                        },
                    }}
                />
                {showError && (
                    <Alert severity="warning" sx={{ mt: 2 }} variant="outlined">
                        Please write a summary in Hebrew to complete the lesson.
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}
