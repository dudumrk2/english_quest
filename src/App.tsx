import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { HomeScreen } from './components/HomeScreen';
import { Dashboard } from './components/Dashboard';
import { GrammarHub } from './components/GrammarHub';
import { TaskReading } from './components/TaskReading';
import { TaskGrammar } from './components/TaskGrammar';
import { TaskPronunciation } from './components/TaskPronunciation';
import { TaskVocabulary } from './components/TaskVocabulary';
import { TaskVocabularyMatching } from './components/TaskVocabularyMatching';
import { WeeklySummary } from './components/WeeklySummary';
import { TestsDashboard } from './components/TestsDashboard';
import { GrammarPracticeDashboard } from './components/GrammarPracticeDashboard';
import { GrammarPracticeLesson } from './components/GrammarPracticeLesson';
import { Login } from './components/Login';
import { useAppStore } from './hooks/useAppStore';
import { useAuth } from './hooks/useAuth';
import { lessons } from './data/lessons';
import type { Lesson, ReadingContent, GrammarContent, PronunciationContent, VocabularyMatchingContent } from './types';
import type { GrammarDay } from './types/grammar-practice';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

type ViewType = 'home' | 'dashboard' | 'lesson' | 'summary' | 'tests' | 'grammar-practice' | 'grammar-practice-lesson' | 'grammar-hub';

function AppContent() {
    const { user, isAuthenticated, logout } = useAuth();
    const { state, completeLesson, saveLessonAnswers, clearLessonAnswers, resetAllProgress, completeGrammarDay, saveGrammarAnswers, isSyncing, lastSyncedAt, saveToCloud, loadFromCloud } = useAppStore(user?.email);
    const [view, setView] = useState<ViewType>('home');
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
    const [activeGrammarDay, setActiveGrammarDay] = useState<GrammarDay | null>(null);

    if (!isAuthenticated) {
        return <Login />;
    }

    const handleStartLesson = (lesson: Lesson) => {
        setActiveLesson(lesson);
        setView('lesson');
    };

    const handleLessonComplete = (skipped: boolean = false) => {
        if (activeLesson) {
            completeLesson(activeLesson.id, 100, skipped);

            if (activeLesson.week === 13) {
                setView('grammar-practice');
                return;
            }

            // Check if this is the last lesson of the week
            const weekLessons = lessons.filter(l => l.week === activeLesson.week);
            const lastLesson = weekLessons.reduce((prev, current) => (prev.day > current.day) ? prev : current);

            if (activeLesson.id === lastLesson.id) {
                setView('summary');
            } else {
                setView('dashboard');
            }
        }
    };

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout? This will clear all your progress and saved data.")) {
            resetAllProgress();
            logout();
        }
    };

    const renderLesson = () => {
        if (!activeLesson) return <div />;

        const commonProps = {
            lesson: activeLesson,
            onComplete: handleLessonComplete,
            initialAnswers: state.lessonAnswers?.[activeLesson.id] || {},
            onSaveAnswers: (answers: any) => saveLessonAnswers(activeLesson.id, answers),
        };

        switch (activeLesson.type) {
            case 'reading':
                return <TaskReading key={activeLesson.id} {...commonProps} lesson={{ ...activeLesson, content: activeLesson.content as ReadingContent }} />;
            case 'grammar':
                return <TaskGrammar key={activeLesson.id} {...commonProps} lesson={{ ...activeLesson, content: activeLesson.content as GrammarContent }} />;
            case 'pronunciation':
                return <TaskPronunciation key={activeLesson.id} {...commonProps} lesson={{ ...activeLesson, content: activeLesson.content as PronunciationContent }} />;
            case 'vocabulary':
                return <TaskVocabulary key={activeLesson.id} {...commonProps} />;
            case 'vocabulary_matching':
                return <TaskVocabularyMatching key={activeLesson.id} {...commonProps} lesson={{ ...activeLesson, content: activeLesson.content as VocabularyMatchingContent }} />;
            default:
                return <div />;
        }
    };

    const renderContent = () => {
        if (view === 'home') {
            return (
                <HomeScreen
                    onNavigateToDashboard={() => setView('dashboard')}
                    onNavigateToGrammarHub={() => setView('grammar-hub')}
                    onNavigateToTests={() => setView('tests')}
                    points={state.points}
                    streak={state.streak}
                />
            );
        }

        if (view === 'grammar-hub') {
            return (
                <GrammarHub
                    completedGrammarDays={state.completedGrammarDays || []}
                    onBack={() => setView('home')}
                    onNavigateToGrammarPractice={() => setView('grammar-practice')}
                />
            );
        }

        if (view === 'summary' && activeLesson) {
            return <WeeklySummary week={activeLesson.week} onContinue={() => setView('dashboard')} />;
        }

        if (view === 'lesson') {
            return renderLesson();
        }

        if (view === 'tests') {
            return <TestsDashboard onBack={() => setView('home')} />;
        }

        if (view === 'grammar-practice') {
            return (
                <GrammarPracticeDashboard
                    completedGrammarDays={state.completedGrammarDays || []}
                    onBack={() => setView('grammar-hub')}
                    onStartDay={(day) => {
                        setActiveGrammarDay(day);
                        setView('grammar-practice-lesson');
                    }}
                />
            );
        }

        if (view === 'grammar-practice-lesson' && activeGrammarDay) {
            return (
                <GrammarPracticeLesson
                    key={activeGrammarDay.id}
                    day={activeGrammarDay}
                    initialAnswers={state.grammarAnswers?.[activeGrammarDay.id] || {}}
                    onBack={() => setView('grammar-practice')}
                    onComplete={(dayId, answers) => {
                        completeGrammarDay(dayId);
                        saveGrammarAnswers(dayId, answers);
                        setView('grammar-practice');
                    }}
                />
            );
        }

        return (
            <Dashboard
                currentLessonId={state.currentLessonId}
                completedLessons={state.completedLessons}
                skippedLessons={state.skippedLessons}
                lessonAnswers={state.lessonAnswers}
                onStartLesson={handleStartLesson}
                onClearLesson={clearLessonAnswers}
                isGoogleUser={user?.email !== 'demo@nadav-english.com'}
                isSyncing={isSyncing}
                lastSyncedAt={lastSyncedAt}
                onSaveToCloud={saveToCloud}
                onLoadFromCloud={loadFromCloud}
                onBack={() => setView('home')}
            />
        );
    };

    const handleBackToDashboard = () => {
        setView('dashboard');
        setActiveLesson(null);
    };

    return (
        <Layout
            points={state.points}
            streak={state.streak}
            onLogout={handleLogout}
            activeLesson={activeLesson}
            onBack={handleBackToDashboard}
        >
            {renderContent()}
        </Layout>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <AppContent />
            </GoogleOAuthProvider>
        </ThemeProvider>
    );
}

export default App;
