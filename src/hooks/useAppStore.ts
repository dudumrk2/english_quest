import { useCallback, useState } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { lessons } from '../data/lessons';
import { AppState, Lesson } from '../types';
import { saveToCloud as saveToCloudService, loadFromCloud as loadFromCloudService } from '../services/cloudSync';

const DEFAULT_STATE: AppState = {
    completedLessons: [],
    skippedLessons: [],
    currentLessonId: 1,
    points: 0,
    streak: 0,
    lastLogin: null,
    lessonAnswers: {},
    completedGrammarDays: [],
    grammarAnswers: {},
};

function migrateState(state: Partial<AppState>): AppState {
    return {
        ...DEFAULT_STATE,
        ...state,
        lessonAnswers: state.lessonAnswers ?? {},
        completedGrammarDays: state.completedGrammarDays ?? [],
        grammarAnswers: state.grammarAnswers ?? {},
    };
}

interface AppStoreState {
    state: AppState;
    setState: (newState: AppState) => void;
    completeLesson: (lessonId: number, score?: number, skipped?: boolean) => void;
    saveLessonAnswers: (lessonId: number, answers: any) => void;
    clearLessonAnswers: (lessonId: number) => void;
    resetAllProgress: () => void;
    completeGrammarDay: (dayId: number) => void;
    saveGrammarAnswers: (dayId: number, answers: Record<string, string>) => void;
}

/**
 * Pre-flight migration: convert old flat localStorage format to Zustand
 * persist's expected { state, version } wrapper.  Runs once per key before
 * the Zustand store reads from storage.
 */
function migrateOldStorageFormat(storageName: string) {
    try {
        const raw = localStorage.getItem(storageName);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        // Old format: flat AppState without Zustand's { state, version } wrapper
        if (parsed && parsed.completedLessons !== undefined && !('version' in parsed)) {
            const migrated = {
                state: { state: migrateState(parsed) },
                version: 1,
            };
            localStorage.setItem(storageName, JSON.stringify(migrated));
        }
    } catch {
        // Ignore parse errors — let Zustand fall back to defaults
    }
}

const createStore = (userEmail: string) => {
    const storageName = `nadav-english-app-${userEmail}`;
    migrateOldStorageFormat(storageName);

    return create<AppStoreState>()(
        persist(
            (set) => ({
                state: DEFAULT_STATE,

                setState: (newState: AppState) => set({ state: newState }),

                completeLesson: (lessonId: number, score: number = 100, skipped: boolean = false) => {
                    set((store) => {
                        const prev = store.state;
                        if (prev.completedLessons.includes(lessonId)) return store;
                        if (skipped && prev.skippedLessons?.includes(lessonId)) return store;

                        let newCompleted = prev.completedLessons;
                        let newSkipped = prev.skippedLessons || [];

                        if (skipped) {
                            newSkipped = [...newSkipped, lessonId];
                        } else {
                            newCompleted = [...newCompleted, lessonId];
                            newSkipped = newSkipped.filter(id => id !== lessonId);
                        }

                        const nextLinearId = lessonId < 30 ? lessonId + 1 : lessonId;
                        const newCurrentId = Math.max(prev.currentLessonId, nextLinearId);

                        return {
                            state: {
                                ...prev,
                                completedLessons: newCompleted,
                                skippedLessons: newSkipped,
                                currentLessonId: newCurrentId,
                                points: skipped ? prev.points : prev.points + score,
                                streak: skipped ? prev.streak : prev.streak + 1,
                            },
                        };
                    });
                },

                saveLessonAnswers: (lessonId: number, answers: any) => {
                    set((store) => ({
                        state: {
                            ...store.state,
                            lessonAnswers: { ...store.state.lessonAnswers, [lessonId]: answers },
                        },
                    }));
                },

                clearLessonAnswers: (lessonId: number) => {
                    set((store) => {
                        const newAnswers = { ...store.state.lessonAnswers };
                        delete newAnswers[lessonId];
                        return { state: { ...store.state, lessonAnswers: newAnswers } };
                    });
                },

                resetAllProgress: () => {
                    set({ state: DEFAULT_STATE });
                },

                completeGrammarDay: (dayId: number) => {
                    set((store) => {
                        const prev = store.state;
                        if (prev.completedGrammarDays.includes(dayId)) return store;
                        return {
                            state: {
                                ...prev,
                                completedGrammarDays: [...prev.completedGrammarDays, dayId],
                                points: prev.points + 50,
                                streak: prev.streak + 1,
                            },
                        };
                    });
                },

                saveGrammarAnswers: (dayId: number, answers: Record<string, string>) => {
                    set((store) => ({
                        state: {
                            ...store.state,
                            grammarAnswers: { ...store.state.grammarAnswers, [dayId]: answers },
                        },
                    }));
                },
            }),
            {
                name: storageName,
                migrate: (persisted: any) => {
                    if (persisted && persisted.state) {
                        return { ...persisted, state: migrateState(persisted.state) };
                    }
                    if (persisted && persisted.completedLessons !== undefined) {
                        return { state: migrateState(persisted as Partial<AppState>) };
                    }
                    return persisted;
                },
                version: 1,
            }
        )
    );
};

const storeCache = new Map<string, ReturnType<typeof createStore>>();

function getStore(userEmail: string) {
    const key = userEmail || 'default';
    if (!storeCache.has(key)) {
        storeCache.set(key, createStore(key));
    }
    return storeCache.get(key)!;
}

interface WeeklyProgress {
    total: number;
    completed: number;
    isFinished: boolean;
}

interface AppStoreReturn {
    state: AppState;
    completeLesson: (lessonId: number, score?: number, skipped?: boolean) => void;
    getCurrentLesson: () => Lesson;
    getWeeklyProgress: (weekNum: number) => WeeklyProgress;
    saveLessonAnswers: (lessonId: number, answers: any) => void;
    clearLessonAnswers: (lessonId: number) => void;
    resetAllProgress: () => void;
    completeGrammarDay: (dayId: number) => void;
    saveGrammarAnswers: (dayId: number, answers: Record<string, string>) => void;
    isSyncing: boolean;
    lastSyncedAt: string | null;
    saveToCloud: () => Promise<void>;
    loadFromCloud: () => Promise<void>;
}

export function useAppStore(userEmail?: string): AppStoreReturn {
    const store = getStore(userEmail || 'default');
    const {
        state,
        setState,
        completeLesson,
        saveLessonAnswers,
        clearLessonAnswers,
        resetAllProgress,
        completeGrammarDay,
        saveGrammarAnswers,
    } = store();

    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

    const getCurrentLesson = (): Lesson => {
        return lessons.find(l => l.id === state.currentLessonId) || lessons[0];
    };

    const getWeeklyProgress = (weekNum: number): WeeklyProgress => {
        const weekLessons = lessons.filter(l => l.week === weekNum);
        const completedCount = weekLessons.filter(l => state.completedLessons.includes(l.id)).length;
        return {
            total: weekLessons.length,
            completed: completedCount,
            isFinished: completedCount === weekLessons.length,
        };
    };

    const saveToCloud = useCallback(async () => {
        if (!userEmail || userEmail === 'demo@nadav-english.com') return;
        setIsSyncing(true);
        try {
            await saveToCloudService(userEmail, state);
            setLastSyncedAt(new Date().toISOString());
        } finally {
            setIsSyncing(false);
        }
    }, [userEmail, state]);

    const loadFromCloud = useCallback(async () => {
        if (!userEmail || userEmail === 'demo@nadav-english.com') return;
        setIsSyncing(true);
        try {
            const cloudData = await loadFromCloudService(userEmail);
            if (cloudData) {
                setState(cloudData.state);
                setLastSyncedAt(cloudData.lastSyncedAt);
            }
        } finally {
            setIsSyncing(false);
        }
    }, [userEmail, setState]);

    return {
        state,
        completeLesson,
        getCurrentLesson,
        getWeeklyProgress,
        saveLessonAnswers,
        clearLessonAnswers,
        resetAllProgress,
        completeGrammarDay,
        saveGrammarAnswers,
        isSyncing,
        lastSyncedAt,
        saveToCloud,
        loadFromCloud,
    };
}
