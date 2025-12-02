import { useState, useEffect } from 'react';
import { lessons } from '../data/lessons';
import { AppState, Lesson } from '../types';

interface WeeklyProgress {
    total: number;
    completed: number;
    isFinished: boolean;
}

interface AppStore {
    state: AppState;
    completeLesson: (lessonId: number, score?: number) => void;
    getCurrentLesson: () => Lesson;
    getWeeklyProgress: (weekNum: number) => WeeklyProgress;
}

export function useAppStore(userEmail?: string): AppStore {
    const storageKey = `nadav-english-app-${userEmail || 'default'}`;

    // Load state from localStorage or use defaults
    const [state, setState] = useState<AppState>(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : {
            completedLessons: [],
            currentLessonId: 1,
            points: 0,
            streak: 0,
            lastLogin: null
        };
    });

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(state));
    }, [state, storageKey]);

    // Reload state when user changes
    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setState(JSON.parse(saved));
        } else {
            setState({
                completedLessons: [],
                currentLessonId: 1,
                points: 0,
                streak: 0,
                lastLogin: null
            });
        }
    }, [storageKey]);

    const completeLesson = (lessonId: number, score: number = 100): void => {
        setState(prev => {
            if (prev.completedLessons.includes(lessonId)) return prev;

            const newCompleted = [...prev.completedLessons, lessonId];
            const nextLessonId = lessonId < 30 ? lessonId + 1 : lessonId;

            return {
                ...prev,
                completedLessons: newCompleted,
                currentLessonId: nextLessonId,
                points: prev.points + score,
                streak: prev.streak + 1
            };
        });
    };

    const getCurrentLesson = (): Lesson => {
        return lessons.find(l => l.id === state.currentLessonId) || lessons[0];
    };

    const getWeeklyProgress = (weekNum: number): WeeklyProgress => {
        const weekLessons = lessons.filter(l => l.week === weekNum);
        const completedCount = weekLessons.filter(l => state.completedLessons.includes(l.id)).length;
        return {
            total: weekLessons.length,
            completed: completedCount,
            isFinished: completedCount === weekLessons.length
        };
    };

    return {
        state,
        completeLesson,
        getCurrentLesson,
        getWeeklyProgress
    };
}
