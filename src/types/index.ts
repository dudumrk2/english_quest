// Lesson Types
export interface Lesson {
    id: number;
    week: number;
    day: number;
    type: 'reading' | 'grammar' | 'pronunciation' | 'vocabulary' | 'vocabulary_matching';
    title: string;
    content: ReadingContent | GrammarContent | PronunciationContent | VocabularyContent | VocabularyMatchingContent;
}

export interface VocabularyContent {
    description?: string;
}

export interface VocabularyMatchingContent {
    pairs: VocabularyItem[];
}

export interface ReadingContent {
    text: string;
    questions: Question[];
    vocabulary: VocabularyItem[];
    fillInTheBlanks?: FillInTheBlankSection;
}

export interface FillInTheBlankSection {
    title?: string;
    exercises: FillInTheBlankExercise[];
}

export interface FillInTheBlankExercise {
    id: string;
    sentence: string; // The sentence with a placeholder, e.g., "Nadav _____ to the store."
    answer: string;   // The correct word, e.g., "walks"
    options: string[]; // 3 options, e.g., ["walks", "eating", "table"]
}

export interface Question {
    id: string;
    text: string;
    answer: string;
}

export interface VocabularyItem {
    word: string;
    translation: string;
    context?: string;
    contextTranslation?: string;
}

export interface GrammarContent {
    rule: string;
    exercises: Exercise[];
}

export interface Exercise {
    id: string;
    question: string;
    answer: string;
    targetWord?: string;
    options?: string[];
}

export interface PronunciationContent {
    text: string;
    tips: string[];
    vocabulary?: VocabularyItem[];
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
    lessonAnswers: Record<number, any>;
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
    onLogout: () => void;
}

export interface DashboardProps {
    currentLessonId: number;
    completedLessons: number[];
    skippedLessons?: number[];
    lessonAnswers: Record<number, any>;
    onStartLesson: (lesson: Lesson) => void;
    onClearLesson: (lessonId: number) => void;
}

export interface TaskProps {
    lesson: Lesson;
    onComplete: (skipped?: boolean) => void;
}

export interface WeeklySummaryProps {
    week: number;
    onContinue: () => void;
}
