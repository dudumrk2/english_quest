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
    const { state, completeLesson, getWeeklyProgress } = useAppStore(user?.email);
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

            if (activeLesson.day === 5) {
                setView('summary');
            } else {
                setView('dashboard');
            }
        }
    };

    const renderContent = () => {
        if (view === 'summary' && activeLesson) {
            return <WeeklySummary week={activeLesson.week} onContinue={() => setView('dashboard')} />;
        }

        if (view === 'lesson' && activeLesson) {
            const commonProps = { lesson: activeLesson, onComplete: handleLessonComplete };

            switch (activeLesson.type) {
                case 'reading': return <TaskReading {...commonProps} />;
                case 'grammar': return <TaskGrammar {...commonProps} />;
                case 'chatbot': return <TaskChat {...commonProps} />;
                case 'pronunciation': return <TaskPronunciation {...commonProps} />;
                default: return <div>Unknown task type</div>;
            }
        }

        return (
            <Dashboard
                currentLessonId={state.currentLessonId}
                completedLessons={state.completedLessons}
                skippedLessons={state.skippedLessons}
                onStartLesson={handleStartLesson}
            />
        );
    };

    return (
        <Layout points={state.points} streak={state.streak}>
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
