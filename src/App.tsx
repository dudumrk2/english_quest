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

            if (activeLesson.day === 6) { // Review is usually last day now? Or 5?
                // If I add day 6, update this logic.
                // The original logic was activeLesson.day === 5 -> summary.
                // Now summaries might happen after day 6? Or IS the summary day 6?
                // User said "add at the end of each week A LESSON".
                // So now week has 6 lessons.
                // If it is day 6 (Vocabulary), then Summary.
                // BUT, Week 1 currently has 5 days.
                // If I add Vocabulary as Day 6 (or whatever is last), I need to handle it.
                // Let's assume day 6 is the end now.
                setView('summary');
            } else if (activeLesson.day === 5 && activeLesson.week < 100) {
                // Wait, if I add day 6, day 5 is no longer the end.
                // So I should only show summary after the last lesson.
                // Let's just say "Summary" button logic is in WeeklySummary component, here we just switch views.
                // For now, I will modify the condition: IF day 6 -> summary. IF day 5 -> dashboard? 
                // Actually, if I add Day 6 to ALL weeks, they all end on Day 6.
                setView('dashboard');
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
