import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TaskReading } from './components/TaskReading';
import { TaskGrammar } from './components/TaskGrammar';
import { TaskChat } from './components/TaskChat';
import { TaskPronunciation } from './components/TaskPronunciation';
import { TaskVocabulary } from './components/TaskVocabulary';
import { WeeklySummary } from './components/WeeklySummary';
import { Login } from './components/Login';
import { useAppStore } from './hooks/useAppStore';
import { useAuth } from './hooks/useAuth';
import { Lesson } from './types';

// Replace with your Google Client ID or leave empty for demo mode only
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

type ViewType = 'dashboard' | 'lesson' | 'summary';

function AppContent() {
    const { user, isAuthenticated } = useAuth();
    const { state, completeLesson, saveLessonAnswers, clearLessonAnswers } = useAppStore(user?.email);
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

            // If the lesson is a weekly vocabulary review or it's day 6, show summary
            if (activeLesson.type === 'vocabulary' || activeLesson.day === 6) {
                setView('summary');
            } else {
                setView('dashboard');
            }
        }
    };

    const { logout } = useAuth();
    const { resetAllProgress } = useAppStore(user?.email);

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout? This will clear all your progress and saved data.")) {
            resetAllProgress(); // From global store
            logout();
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
                case 'reading': return <TaskReading {...commonProps} />;
                case 'grammar': return <TaskGrammar {...commonProps} />;
                case 'chatbot': return <TaskChat {...commonProps} />;
                case 'pronunciation': return <TaskPronunciation {...commonProps} />;
                case 'vocabulary': return <TaskVocabulary {...commonProps} />;
                default: return <div>Unknown task type</div>;
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
            />
        );
    };

    return (
        <Layout points={state.points} streak={state.streak} onLogout={handleLogout}>
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
