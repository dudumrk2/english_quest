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
    completeLesson: (lessonId: number, score?: number, skipped?: boolean) => void;
    getCurrentLesson: () => Lesson;
    getWeeklyProgress: (weekNum: number) => WeeklyProgress;
    saveLessonAnswers: (lessonId: number, answers: any) => void;
    clearLessonAnswers: (lessonId: number) => void;
}

export function useAppStore(userEmail?: string): AppStore {
    const storageKey = `nadav-english-app-${userEmail || 'default'}`;

    // Load state from localStorage or use defaults
    const [state, setState] = useState<AppState>(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Migration for existing data
            if (!parsed.lessonAnswers) {
                parsed.lessonAnswers = {};
            }
            return parsed;
        }
        return {
            completedLessons: [],
            skippedLessons: [],
            currentLessonId: 1,
            points: 0,
            streak: 0,
            lastLogin: null,
            lessonAnswers: {}
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
            const parsed = JSON.parse(saved);
            // Migration for existing data
            if (!parsed.lessonAnswers) {
                parsed.lessonAnswers = {};
            }
            setState(parsed);
        } else {
            setState({
                completedLessons: [],
                skippedLessons: [],
                currentLessonId: 1,
                points: 0,
                streak: 0,
                lastLogin: null,
                lessonAnswers: {}
            });
        }
    }, [storageKey]);

    const completeLesson = (lessonId: number, score: number = 100, skipped: boolean = false): void => {
        setState(prev => {
            if (prev.completedLessons.includes(lessonId) || prev.skippedLessons?.includes(lessonId)) return prev;

            const newCompleted = skipped ? prev.completedLessons : [...prev.completedLessons, lessonId];
            const newSkipped = skipped ? [...(prev.skippedLessons || []), lessonId] : (prev.skippedLessons || []);
            const nextLessonId = lessonId < 30 ? lessonId + 1 : lessonId;

            return {
                ...prev,
                completedLessons: newCompleted,
                skippedLessons: newSkipped,
                currentLessonId: nextLessonId,
                points: skipped ? prev.points : prev.points + score,
                streak: skipped ? prev.streak : prev.streak + 1
            };
        });
    };

    const saveLessonAnswers = (lessonId: number, answers: any) => {
        setState(prev => ({
            ...prev,
            lessonAnswers: {
                ...prev.lessonAnswers,
                [lessonId]: answers
            }
        }));
    };

    const clearLessonAnswers = (lessonId: number) => {
        setState(prev => {
            const newAnswers = { ...prev.lessonAnswers };
            delete newAnswers[lessonId];
            return {
                ...prev,
                lessonAnswers: newAnswers
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
        getWeeklyProgress,
        saveLessonAnswers,
        clearLessonAnswers
    };
}
