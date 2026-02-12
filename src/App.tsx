import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TaskReading } from './components/TaskReading';
import { TaskGrammar } from './components/TaskGrammar';
import { TaskPronunciation } from './components/TaskPronunciation';
import { TaskVocabulary } from './components/TaskVocabulary';
import { TaskVocabularyMatching } from './components/TaskVocabularyMatching';
import { WeeklySummary } from './components/WeeklySummary';
import { Login } from './components/Login';
import { useAppStore } from './hooks/useAppStore';
import { useAuth } from './hooks/useAuth';
import { lessons } from './data/lessons';
import { Lesson } from './types';

// Replace with your Google Client ID or leave empty for demo mode only
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

type ViewType = 'dashboard' | 'lesson' | 'summary';

function AppContent() {
    const { user, isAuthenticated } = useAuth();
    const { state, completeLesson, saveLessonAnswers, clearLessonAnswers, resetAllProgress, isSyncing, lastSyncedAt, saveToCloud, loadFromCloud } = useAppStore(user?.email);
    const [view, setView] = useState<ViewType>('dashboard');
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

    // Show login if not authenticated
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

    const { logout } = useAuth();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout? This will clear all your progress and saved data.")) {
            resetAllProgress(); // From global store
            logout();
            alert("All your data has been cleared. You will now return to the welcome page.");
        }
    };

    const renderContent = () => {
        if (view === 'summary' && activeLesson) {
            return <WeeklySummary week={activeLesson.week} onContinue={() => setView('dashboard')} />;
        }

        if (view === 'lesson' && activeLesson) {
            const commonProps = {
                lesson: activeLesson,
                onComplete: handleLessonComplete,
                initialAnswers: state.lessonAnswers?.[activeLesson.id] || {},
                onSaveAnswers: (answers: any) => saveLessonAnswers(activeLesson.id, answers),
                onClearAnswers: () => clearLessonAnswers(activeLesson.id)
            };

            switch (activeLesson.type) {
                case 'reading': return <TaskReading key={activeLesson.id} {...commonProps} lesson={activeLesson as any} />;
                case 'grammar': return <TaskGrammar key={activeLesson.id} {...commonProps} lesson={activeLesson as any} />;
                case 'pronunciation': return <TaskPronunciation key={activeLesson.id} {...commonProps} lesson={activeLesson as any} />;
                case 'vocabulary': return <TaskVocabulary key={activeLesson.id} {...commonProps} lesson={activeLesson as any} />;
                case 'vocabulary_matching': return <TaskVocabularyMatching key={activeLesson.id} {...commonProps} lesson={activeLesson as any} />;
                default: return <div />;
            }
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
