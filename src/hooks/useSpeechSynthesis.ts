import { useState, useCallback, useRef, useEffect } from 'react';

export interface HighlightRange {
    start: number;
    end: number;
}

export interface UseSpeechSynthesisReturn {
    isPlaying: boolean;
    highlightRange: HighlightRange | null;
    speak: (text: string) => void;
    stop: () => void;
    toggle: (text: string) => void;
}

/**
 * Hook for text-to-speech functionality with word-by-word highlighting.
 * Provides play/stop controls and tracks the currently spoken word position.
 */
export function useSpeechSynthesis(): UseSpeechSynthesisReturn {
    const [isPlaying, setIsPlaying] = useState(false);
    const [highlightRange, setHighlightRange] = useState<HighlightRange | null>(null);
    const textRef = useRef<string>('');

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const stop = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setHighlightRange(null);
    }, []);

    const speak = useCallback((text: string) => {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        textRef.current = text;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;

        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const start = event.charIndex;
                let end = text.indexOf(' ', start);
                if (end === -1) end = text.length;
                setHighlightRange({ start, end });
            }
        };

        utterance.onend = () => {
            setIsPlaying(false);
            setHighlightRange(null);
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setHighlightRange(null);
        };

        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
    }, []);

    const toggle = useCallback((text: string) => {
        if (isPlaying) {
            stop();
        } else {
            speak(text);
        }
    }, [isPlaying, speak, stop]);

    return {
        isPlaying,
        highlightRange,
        speak,
        stop,
        toggle,
    };
}
