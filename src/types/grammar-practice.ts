export interface GrammarExplanation {
  formula: string;
  usage: string;
  signalWords: string[];
  examples: {
    positive: string;
    negative: string;
    yesNo: string;
    wh: string;
  };
}

export type GrammarExerciseType = 'fill_in' | 'multiple_choice';

export interface FillInExercise {
  id: string;
  type: 'fill_in';
  sentence: string;
  hint?: string;
  answer: string;
  acceptAlso?: string[];
}

export interface MultipleChoiceExercise {
  id: string;
  type: 'multiple_choice';
  sentence: string;
  options: string[];
  answer: string;
}

export type GrammarExercise = FillInExercise | MultipleChoiceExercise;

export interface GrammarDay {
  id: number;
  title: string;
  tense: string;
  focus: string;
  explanation: GrammarExplanation;
  exercises: GrammarExercise[];
}
