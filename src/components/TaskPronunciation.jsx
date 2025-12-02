import React, { useState, useRef } from 'react';
import { Mic, RefreshCw, Check } from 'lucide-react';

export function TaskPronunciation({ lesson, onComplete }) {
    const [attempts, setAttempts] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const recognitionRef = useRef(null);

    const startRecording = () => {
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            alert("Speech recognition not supported in this browser.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = 'en-US';

        setIsRecording(true);
        setFeedback(null);

        recognitionRef.current.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setIsRecording(false);
            analyzePronunciation(transcript);
        };

        recognitionRef.current.start();
    };

    const analyzePronunciation = (transcript) => {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        // Simple mock analysis: check word count match or similarity
        const targetWords = lesson.content.text.split(' ');
        const spokenWords = transcript.split(' ');
        const accuracy = Math.min(100, Math.round((spokenWords.length / targetWords.length) * 100));

        setFeedback({
            transcript,
            accuracy,
            message: accuracy > 80 ? "Excellent pronunciation!" : "Good try! Focus on clear articulation."
        });

        if (newAttempts >= 3) {
            setTimeout(onComplete, 3000);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="glass-panel p-8 text-center">
                <h2 className="text-2xl font-bold mb-2 text-orange-400">Read Aloud</h2>
                <p className="text-slate-400 mb-6">Attempts: {attempts} / 3</p>

                <div className="bg-slate-800 p-6 rounded-xl text-xl leading-relaxed font-serif mb-8">
                    {lesson.content.text}
                </div>

                <div className="flex justify-center gap-4 mb-8">
                    {lesson.content.tips.map((tip, idx) => (
                        <div key={idx} className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                            Tip: {tip}
                        </div>
                    ))}
                </div>

                <button
                    onClick={startRecording}
                    disabled={isRecording || attempts >= 3}
                    className={`
            w-20 h-20 rounded-full flex items-center justify-center transition-all
            ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-blue-600 hover:scale-110'}
            ${attempts >= 3 ? 'opacity-50 cursor-not-allowed' : ''}
          `}
                >
                    <Mic size={32} />
                </button>
                <p className="mt-4 text-slate-400">
                    {isRecording ? "Listening..." : "Click mic to read"}
                </p>
            </div>

            {feedback && (
                <div className="glass-panel p-6 border-l-4 border-green-500 animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="font-bold text-lg mb-2">Feedback</h3>
                    <p className="text-slate-300 italic mb-2">"{feedback.transcript}"</p>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-500 transition-all duration-1000"
                                style={{ width: `${feedback.accuracy}%` }}
                            />
                        </div>
                        <span className="font-bold">{feedback.accuracy}%</span>
                    </div>
                    <p className="mt-2 text-green-400">{feedback.message}</p>
                </div>
            )}
        </div>
    );
}
