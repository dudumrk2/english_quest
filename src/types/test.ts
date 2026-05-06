export interface Test {
    id: string;
    title: string;
    subtitle?: string;
    totalPoints: number;
    sections: TestSection[];
    lockedUntil?: string; // ID of the test that must pass ≥80% to unlock this one
}

export type TestSection =
    | MultipleChoiceSection
    | FillFromBankSection
    | VerbTableSection
    | SentenceCompletionSection
    | QuestionFormationSection
    | PassageFillSection;

export interface MultipleChoiceSection {
    type: 'multiple_choice';
    title: string;
    pointsNote: string;
    pointsPerAnswer: number;
    questions: MCQuestion[];
}

export interface MCQuestion {
    id: string;
    text: string;
    options: string[];
    answer: string;
}

export interface FillFromBankSection {
    type: 'fill_from_bank';
    title: string;
    pointsNote: string;
    pointsPerAnswer: number;
    wordBank: string[];
    sentences: FillSentence[];
}

export interface FillSentence {
    id: string;
    text: string;
    answer: string;
}

export interface VerbTableSection {
    type: 'verb_table';
    title: string;
    pointsNote: string;
    pointsPerAnswer: number;
    verbs: VerbPair[];
}

export interface VerbPair {
    id: string;
    v1: string;
    v2: string;
}

export interface SentenceCompletionSection {
    type: 'sentence_completion';
    title: string;
    pointsNote: string;
    pointsPerAnswer: number;
    instructions: string;
    sentences: SentenceFill[];
}

export interface SentenceFill {
    id: string;
    text: string;
    answer: string;
    acceptAlso?: string[];
}

export interface QuestionFormationSection {
    type: 'question_formation';
    title: string;
    pointsNote: string;
    pointsPerAnswer: number;
    instructions: string;
    items: QuestionFormItem[];
}

export interface QuestionFormItem {
    id: string;
    givenAnswer: string;
    correctQuestion: string;
}

export interface PassageFillSection {
    type: 'passage_fill';
    title: string;
    pointsNote: string;
    pointsPerBlank: number;
    pointsPerQuestion: number;
    instructions: string;
    segments: PassageSegment[];
    questions: PassageQuestion[];
}

export type PassageSegment =
    | { type: 'text'; content: string }
    | { type: 'blank'; id: string; hint: string; answer: string; acceptAlso?: string[] };

export interface PassageQuestion {
    id: string;
    text: string;
    answer: string;
}

export interface TestResult {
    testId: string;
    score: number;
    totalPoints: number;
    percentage: number;
    completedAt: string;
}
