import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';

export function TaskChat({ lesson, onComplete }) {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: lesson.content.initialMessage }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = () => setIsListening(false);
            recognitionRef.current.onend = () => setIsListening(false);
        }
    }, []);

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    const toggleMic = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            setIsListening(true);
            recognitionRef.current?.start();
        }
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        // Simple mock AI response logic
        setTimeout(() => {
            let responseText = "That's interesting! Tell me more.";
            if (newMessages.length > 3) {
                responseText = "Great conversation! You've completed this mission.";
                setTimeout(onComplete, 3000);
            } else if (input.toLowerCase().includes('game')) {
                responseText = "Games are awesome. Which one do you play the most?";
            } else if (input.toLowerCase().includes('school')) {
                responseText = "School is important. What is your favorite subject?";
            }

            setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
            speak(responseText);
        }, 1000);
    };

    return (
        <div className="max-w-2xl mx-auto h-[600px] flex flex-col glass-panel overflow-hidden">
            <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
                <h3 className="font-bold text-blue-400">AI Tutor</h3>
                <span className="text-xs text-slate-500">Topic: {lesson.content.topic}</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user'
                                ? 'bg-blue-600 text-white rounded-tr-none'
                                : 'bg-slate-700 text-slate-200 rounded-tl-none'
                            }`}>
                            {msg.text}
                            {msg.role === 'assistant' && (
                                <button onClick={() => speak(msg.text)} className="ml-2 opacity-50 hover:opacity-100">
                                    <Volume2 size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-slate-800/50 border-t border-slate-700 flex gap-2">
                <button
                    onClick={toggleMic}
                    className={`p-3 rounded-full transition-colors ${isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                    <Mic size={20} />
                </button>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type or speak..."
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-full px-4 focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleSend} className="p-3 bg-blue-600 rounded-full hover:bg-blue-500">
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
}
