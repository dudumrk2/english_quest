// Lesson Types
export interface Lesson {
    id: number;
    week: number;
    day: number;
    type: 'reading' | 'grammar' | 'chatbot' | 'pronunciation';
    title: string;
    content: ReadingContent | GrammarContent | ChatContent | PronunciationContent;
}

export interface ReadingContent {
    text: string;
    questions: Question[];
    vocabulary: VocabularyItem[];
}

export interface Question {
    id: string;
    text: string;
    answer: string;
}

export interface VocabularyItem {
    word: string;
    translation: string;
}

export interface GrammarContent {
    rule: string;
    exercises: Exercise[];
}

export interface Exercise {
    id: string;
    question: string;
    answer: string;
}

export interface ChatContent {
    topic: string;
    initialMessage: string;
}

export interface PronunciationContent {
    text: string;
    tips: string[];
}

// User Types
export interface User {
    email: string;
    name: string;
    picture?: string;
}

// App State Types
export interface AppState {
    completedLessons: number[];
    skippedLessons: number[];
    currentLessonId: number;
    points: number;
    streak: number;
    lastLogin: string | null;
}

// Message Types
export interface Message {
    role: 'user' | 'assistant';
    text: string;
}

// Feedback Types
export interface PronunciationFeedback {
    transcript: string;
    accuracy: number;
    message: string;
}

// Component Props Types
export interface LayoutProps {
    children: React.ReactNode;
    points: number;
    streak: number;
}

export interface DashboardProps {
    currentLessonId: number;
    completedLessons: number[];
    skippedLessons?: number[];
    onStartLesson: (lesson: Lesson) => void;
}

export interface TaskProps {
    lesson: Lesson;
    onComplete: (skipped?: boolean) => void;
}

export interface WeeklySummaryProps {
    week: number;
    onContinue: () => void;
}
