import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Divider,
    Stack,
    IconButton,
    Avatar,
    Paper,
    Fade,
} from '@mui/material';
import {
    SmartToy as RobotIcon,
    Person as PersonIcon,
    Mic as MicIcon,
    MicOff as MicOffIcon,
    Send as SendIcon,
    VolumeUp as VolumeIcon,
    Stop as StopIcon,
} from '@mui/icons-material';
import { getChatResponse } from '../services/gemini';

export function TaskChat({ lesson, onComplete }) {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: lesson.content.initialMessage }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const recognitionRef = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lesson.id]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        // Initialize speech recognition
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onstart = () => setIsListening(true);
            recognitionRef.current.onend = () => setIsListening(false);
            recognitionRef.current.onerror = () => setIsListening(false);

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
            };
        }
    }, []);

    const speak = (text) => {
        window.speechSynthesis.cancel(); // Stop previous speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Slightly slower for clarity
        window.speechSynthesis.speak(utterance);
    };

    const toggleMic = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            recognitionRef.current?.start();
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Call Gemini AI
        try {
            const responseText = await getChatResponse(messages, input);

            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
            speak(responseText);

            // Check if we should complete the lesson (simple heuristic: 5 exchanges)
            if (messages.length > 8) {
                setTimeout(() => {
                    speak("Great job! You have completed this conversation practice.");
                    onComplete();
                }, 5000);
            }

        } catch (error) {
            console.error("Chat Error:", error);
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I had a glitch. Can you say that again?" }]);
        }
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 3 }, height: '85vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    mb: 2,
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                    <RobotIcon />
                </Avatar>
                <Box>
                    <Typography variant="h6" fontWeight={700}>
                        AI Tutor
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9, display: 'block' }}>
                        Topic: {lesson.content.topic}
                    </Typography>
                </Box>
            </Paper>

            {/* Chat Area */}
            <Paper
                elevation={1}
                sx={{
                    flex: 1,
                    mb: 2,
                    bgcolor: '#f0f4f8',
                    overflowY: 'auto',
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
            >
                {messages.map((msg, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: 'flex',
                            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                            alignItems: 'flex-end',
                            gap: 1
                        }}
                    >
                        {msg.role === 'assistant' && (
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                                <RobotIcon fontSize="small" />
                            </Avatar>
                        )}

                        <Paper
                            elevation={1}
                            sx={{
                                p: 2,
                                maxWidth: '75%',
                                borderRadius: 3,
                                borderBottomLeftRadius: msg.role === 'assistant' ? 0 : 3,
                                borderBottomRightRadius: msg.role === 'user' ? 0 : 3,
                                bgcolor: msg.role === 'user' ? 'primary.main' : 'white',
                                color: msg.role === 'user' ? 'white' : '#1a202c', // Force dark text on white bubble
                                position: 'relative'
                            }}
                        >
                            <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                                {msg.text}
                            </Typography>
                            {msg.role === 'assistant' && (
                                <IconButton
                                    size="small"
                                    onClick={() => speak(msg.text)}
                                    sx={{
                                        position: 'absolute',
                                        bottom: -30,
                                        left: 0,
                                        opacity: 0.6,
                                        '&:hover': { opacity: 1 },
                                        color: 'text.secondary'
                                    }}
                                >
                                    <VolumeIcon fontSize="small" />
                                </IconButton>
                            )}
                        </Paper>

                        {msg.role === 'user' && (
                            <Avatar sx={{ bgcolor: 'primary.dark', width: 32, height: 32 }}>
                                <PersonIcon fontSize="small" />
                            </Avatar>
                        )}
                    </Box>
                ))}

                {isTyping && (
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', ml: 5 }}>
                        <Box sx={{
                            width: 8, height: 8, bgcolor: '#90caf9', borderRadius: '50%',
                            animation: 'bounce 1.4s infinite ease-in-out both'
                        }} />
                        <Box sx={{
                            width: 8, height: 8, bgcolor: '#90caf9', borderRadius: '50%',
                            animation: 'bounce 1.4s infinite ease-in-out both',
                            animationDelay: '0.16s'
                        }} />
                        <Box sx={{
                            width: 8, height: 8, bgcolor: '#90caf9', borderRadius: '50%',
                            animation: 'bounce 1.4s infinite ease-in-out both',
                            animationDelay: '0.32s'
                        }} />
                        <style>
                            {`
                @keyframes bounce {
                  0%, 80%, 100% { transform: scale(0); }
                  40% { transform: scale(1); }
                }
              `}
                        </style>
                    </Box>
                )}
                <div ref={messagesEndRef} />
            </Paper>

            {/* Input Area */}
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: 'background.paper'
                }}
            >
                <IconButton
                    onClick={toggleMic}
                    color={isListening ? 'error' : 'default'}
                    sx={{
                        border: isListening ? '2px solid' : '1px solid #e0e0e0',
                        animation: isListening ? 'pulse 1.5s infinite' : 'none'
                    }}
                >
                    {isListening ? <StopIcon /> : <MicIcon />}
                </IconButton>

                <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    InputProps={{ disableUnderline: true }}
                    sx={{ px: 2 }}
                />

                <IconButton
                    color="primary"
                    onClick={handleSend}
                    disabled={!input.trim()}
                    sx={{
                        bgcolor: input.trim() ? 'primary.main' : 'action.disabledBackground',
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark' },
                        '&.Mui-disabled': { color: 'rgba(255,255,255,0.5)' }
                    }}
                >
                    <SendIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}
