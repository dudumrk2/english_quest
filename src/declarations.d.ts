// Declarations for untyped .jsx modules
declare module '*.jsx' {
    const value: any;
    export default value;
}

declare module 'canvas-confetti';

declare module './components/TaskReading' {
    export const TaskReading: any;
}

declare module './components/TaskGrammar' {
    export const TaskGrammar: any;
}

declare module './components/TaskChat' {
    export const TaskChat: any;
}

declare module './components/TaskPronunciation' {
    export const TaskPronunciation: any;
}

declare module './components/TaskVocabulary' {
    export const TaskVocabulary: any;
}

declare module './components/WeeklySummary' {
    export const WeeklySummary: any;
}

declare module './components/Login' {
    export const Login: any;
}
