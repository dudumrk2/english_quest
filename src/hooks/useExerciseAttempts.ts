import { useState, useCallback } from 'react';

interface ExerciseAttemptState {
    attempts: Record<string, number>;
    lastCheckedValues: Record<string, string>;
}

interface UseExerciseAttemptsReturn {
    attempts: Record<string, number>;
    trackAttempt: (id: string, currentValue: string, isCorrect: boolean) => void;
    getAttemptCount: (id: string) => number;
}

export function useExerciseAttempts(): UseExerciseAttemptsReturn {
    const [state, setState] = useState<ExerciseAttemptState>({
        attempts: {},
        lastCheckedValues: {},
    });

    const trackAttempt = useCallback((id: string, currentValue: string, isCorrect: boolean) => {
        setState(prev => {
            const lastVal = prev.lastCheckedValues[id]?.trim() || '';
            const trimmed = currentValue.trim();
            const shouldIncrement = !isCorrect && trimmed !== '' && trimmed !== lastVal;

            return {
                attempts: shouldIncrement
                    ? { ...prev.attempts, [id]: (prev.attempts[id] || 0) + 1 }
                    : prev.attempts,
                lastCheckedValues: { ...prev.lastCheckedValues, [id]: trimmed },
            };
        });
    }, []);

    const getAttemptCount = useCallback((id: string) => {
        return state.attempts[id] || 0;
    }, [state.attempts]);

    return { attempts: state.attempts, trackAttempt, getAttemptCount };
}
