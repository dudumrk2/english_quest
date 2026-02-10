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
    matchDefinitions?: MatchDefinitionsSection;
}

export interface MatchDefinitionsSection {
    title?: string;
    pairs: MatchPair[];
}

export interface MatchPair {
    id: string;
    word: string;
    definition: string;
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
    activeLesson?: Lesson | null;
    onBack?: () => void;
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

export interface TaskReadingProps {
    lesson: Lesson & { content: ReadingContent };
    onComplete: (skipped?: boolean) => void;
    initialAnswers?: ReadingAnswers;
    onSaveAnswers?: (answers: ReadingAnswers) => void;
}

export interface ReadingAnswers {
    answers?: Record<string, string>;
    fillInTheBlankAnswers?: Record<string, string>;
    matchDefinitionsAnswers?: Record<string, string>;
    summary?: string;
}

export interface TaskGrammarProps {
    lesson: Lesson & { content: GrammarContent };
    onComplete: (skipped?: boolean) => void;
    initialAnswers?: GrammarAnswers;
    onSaveAnswers?: (answers: GrammarAnswers) => void;
}

export interface GrammarAnswers {
    answers?: Record<string, string>;
}

export interface TaskPronunciationProps {
    lesson: Lesson & { content: PronunciationContent };
    onComplete: (skipped?: boolean) => void;
    initialAnswers?: PronunciationAnswers;
    onSaveAnswers?: (answers: PronunciationAnswers) => void;
}

export interface PronunciationAnswers {
    summary?: string;
    sentences?: string[];
}

export interface TaskVocabularyProps {
    lesson: Lesson;
    onComplete: (skipped?: boolean) => void;
    initialAnswers?: VocabularyAnswers;
    onSaveAnswers?: (answers: VocabularyAnswers) => void;
}

export interface VocabularyAnswers {
    answers?: Record<string, string>;
}

export interface TaskVocabularyMatchingProps {
    lesson: Lesson & { content: VocabularyMatchingContent };
    onComplete: (skipped?: boolean) => void;
    initialAnswers?: VocabularyMatchingAnswers;
    onSaveAnswers?: (answers: VocabularyMatchingAnswers) => void;
}

export interface VocabularyMatchingAnswers {
    matches?: Record<string, string>;
}

export interface TaskChatProps {
    lesson: Lesson;
    onComplete: (skipped?: boolean) => void;
}

export interface WeeklySummaryProps {
    week: number;
    onContinue: () => void;
}

