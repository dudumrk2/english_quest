import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useAuth } from '../hooks/useAuth';
import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    Divider,
    Avatar,
    Grid,
    Chip,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    SportsEsports as GameIcon,
    AutoStories as BookIcon,
    EmojiEvents as TrophyIcon,
    Bolt as BoltIcon,
    RecordVoiceOver as VoiceIcon,
    MenuBook as MenuBookIcon,
    CheckCircle as CheckIcon,
} from '@mui/icons-material';

export function Login(): React.ReactElement {
    const { loginWithGoogle, loginDemo } = useAuth();

    const handleGoogleSuccess = (credentialResponse: CredentialResponse): void => {
        if (credentialResponse.credential) {
            loginWithGoogle(credentialResponse.credential);
        }
    };

    const handleGoogleError = () => {
        console.error('Login Failed');
        alert('Google login failed. Please try demo mode or check your internet connection.');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
            }}
        >
            <Container maxWidth="md">
                <Stack spacing={4}>
                    {/* Logo/Title */}
                    <Box textAlign="center">
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                mx: 'auto',
                                mb: 3,
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                animation: 'pulse 2s ease-in-out infinite',
                                '@keyframes pulse': {
                                    '0%, 100%': { transform: 'scale(1)' },
                                    '50%': { transform: 'scale(1.05)' },
                                },
                            }}
                        >
                            <GameIcon sx={{ fontSize: 40 }} />
                        </Avatar>

                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 800,
                            }}
                        >
                            Nadav's English Quest
                        </Typography>

                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Level Up Your English Skills
                        </Typography>

                        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
                            <Chip
                                icon={<BoltIcon />}
                                label="30 Epic Missions"
                                color="warning"
                                size="small"
                            />
                        </Stack>
                    </Box>

                    {/* Login Card */}
                    <Card
                        elevation={0}
                        sx={{
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h5" align="center" gutterBottom fontWeight={700}>
                                Welcome, Commander! 🎮
                            </Typography>
                            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                                Sign in to start your learning journey
                            </Typography>

                            {/* Google Sign In */}
                            <Box display="flex" justifyContent="center" mb={3}>
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleError}
                                    useOneTap
                                    theme="filled_black"
                                    size="large"
                                    text="signin_with"
                                    shape="rectangular"
                                    width="280"
                                />
                            </Box>

                            <Divider sx={{ my: 3 }}>
                                <Typography variant="caption" color="text.secondary">
                                    OR
                                </Typography>
                            </Divider>

                            {/* Demo Mode Button */}
                            <Button
                                fullWidth
                                variant="outlined"
                                size="large"
                                startIcon={<GameIcon />}
                                onClick={loginDemo}
                                sx={{
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    },
                                }}
                            >
                                Continue in Demo Mode
                            </Button>

                            <Typography
                                variant="caption"
                                display="block"
                                textAlign="center"
                                color="text.secondary"
                                sx={{ mt: 2 }}
                            >
                                Demo mode lets you try the app without signing in.
                                <br />
                                Your progress will be saved locally.
                            </Typography>

                            <Divider sx={{ my: 4 }} />

                            {/* What's Inside */}
                            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
                                What's Inside:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <BookIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Reading Adventures"
                                        secondary="Explore engaging stories with vocabulary lessons"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <MenuBookIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Grammar Challenges"
                                        secondary="Master grammar through interactive exercises"
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <VoiceIcon color="warning" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Pronunciation Practice"
                                        secondary="Perfect your speaking with read-aloud exercises"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <TrophyIcon sx={{ color: '#fbbf24' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Vocabulary Reviews"
                                        secondary="Weekly challenges to reinforce what you've learned"
                                    />
                                </ListItem>
                            </List>

                            {/* How It Works */}
                            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
                                How It Works:
                            </Typography>
                            <Stack spacing={1.5}>
                                <Box display="flex" alignItems="flex-start" gap={1.5}>
                                    <CheckIcon color="success" sx={{ mt: 0.5 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>6 Weeks of Learning:</strong> Progress through structured weekly lessons
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="flex-start" gap={1.5}>
                                    <CheckIcon color="success" sx={{ mt: 0.5 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>5 Lessons Per Week:</strong> Complete different types of tasks each day
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="flex-start" gap={1.5}>
                                    <CheckIcon color="success" sx={{ mt: 0.5 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Your Progress Saved:</strong> All your answers and progress are saved
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="flex-start" gap={1.5}>
                                    <CheckIcon color="success" sx={{ mt: 0.5 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Learn at Your Pace:</strong> Come back anytime and pick up where you left off
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* Stats Preview */}
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card elevation={0} sx={{ textAlign: 'center', py: 2 }}>
                                <BookIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                                <Typography variant="h4" fontWeight={700}>
                                    30
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Lessons
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card elevation={0} sx={{ textAlign: 'center', py: 2 }}>
                                <TrophyIcon color="secondary" sx={{ fontSize: 32, mb: 1 }} />
                                <Typography variant="h4" fontWeight={700}>
                                    6
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Weeks
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card elevation={0} sx={{ textAlign: 'center', py: 2 }}>
                                <BoltIcon color="success" sx={{ fontSize: 32, mb: 1 }} />
                                <Typography variant="h4" fontWeight={700}>
                                    5
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Tasks/Week
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
