import { useState, useEffect, useCallback } from 'react';
import { lessons } from '../data/lessons';
import { AppState, Lesson } from '../types';
import { saveToCloud as saveToCloudService, loadFromCloud as loadFromCloudService } from '../services/cloudSync';

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
    resetAllProgress: () => void;
    // Cloud sync
    isSyncing: boolean;
    lastSyncedAt: string | null;
    saveToCloud: () => Promise<void>;
    loadFromCloud: () => Promise<void>;
}

export function useAppStore(userEmail?: string): AppStore {
    const storageKey = `nadav-english-app-${userEmail || 'default'}`;
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

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
            // 1. If already completed, do nothing (prevent double points)
            if (prev.completedLessons.includes(lessonId)) return prev;

            // 2. If trying to skip, but already skipped, do nothing
            if (skipped && prev.skippedLessons?.includes(lessonId)) return prev;

            // 3. Prepare new lists
            let newCompleted = prev.completedLessons;
            let newSkipped = prev.skippedLessons || [];

            if (skipped) {
                // Add to skipped list
                newSkipped = [...newSkipped, lessonId];
            } else {
                // Add to completed list
                newCompleted = [...newCompleted, lessonId];
                // Remove from skipped list if it was there (upgrading status)
                newSkipped = newSkipped.filter(id => id !== lessonId);
            }

            // 4. Calculate next lesson ID
            // Only advance if this completion pushes the frontier forward.
            // If we go back to fix an old lesson, don't reset progress to an earlier point.
            const nextLinearId = lessonId < 30 ? lessonId + 1 : lessonId;
            const newCurrentId = Math.max(prev.currentLessonId, nextLinearId);

            return {
                ...prev,
                completedLessons: newCompleted,
                skippedLessons: newSkipped,
                currentLessonId: newCurrentId,
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

    const resetAllProgress = () => {
        const initialState: AppState = {
            completedLessons: [],
            skippedLessons: [],
            currentLessonId: 1,
            points: 0,
            streak: 0,
            lastLogin: null,
            lessonAnswers: {}
        };
        setState(initialState);
        localStorage.setItem(storageKey, JSON.stringify(initialState));
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

    // Cloud sync: save current state to Firestore
    const saveToCloud = useCallback(async () => {
        if (!userEmail || userEmail === 'demo@nadav-english.com') return;
        setIsSyncing(true);
        try {
            await saveToCloudService(userEmail, state);
            const now = new Date().toISOString();
            setLastSyncedAt(now);
        } finally {
            setIsSyncing(false);
        }
    }, [userEmail, state]);

    // Cloud sync: load state from Firestore
    const loadFromCloud = useCallback(async () => {
        if (!userEmail || userEmail === 'demo@nadav-english.com') return;
        setIsSyncing(true);
        try {
            const cloudData = await loadFromCloudService(userEmail);
            if (cloudData) {
                setState(cloudData.state);
                setLastSyncedAt(cloudData.lastSyncedAt);
                localStorage.setItem(storageKey, JSON.stringify(cloudData.state));
            }
        } finally {
            setIsSyncing(false);
        }
    }, [userEmail, storageKey]);

    return {
        state,
        completeLesson,
        getCurrentLesson,
        getWeeklyProgress,
        saveLessonAnswers,
        clearLessonAnswers,
        resetAllProgress,
        isSyncing,
        lastSyncedAt,
        saveToCloud,
        loadFromCloud,
    };
}
