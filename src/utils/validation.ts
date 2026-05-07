export const normalize = (s: string) =>
    s.toLowerCase()
     .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
     .replace(/'/g, "'")
     .replace(/\s+/g, " ")
     .trim();

export const isAnswerCorrect = (user: string, correct: string): boolean => {
    if (!user) return false;

    const userNorm = normalize(user);
    const correctNorm = normalize(correct);

    if (userNorm === correctNorm) return true;

    const userWords = userNorm.split(/\s+/).filter(w => w.length > 0);
    const correctWords = correctNorm.split(/\s+/).filter(w => w.length > 0);

    if (correctWords.length === 0) return true;

    const userWordsSet = new Set(userWords);
    let matchedCount = 0;

    correctWords.forEach(word => {
        if (userWordsSet.has(word)) {
            matchedCount++;
        }
    });

    const score = matchedCount / correctWords.length;

    if (correctWords.length <= 2) {
        return userNorm === correctNorm;
    }

    return score >= 0.8;
};

export function exactMatch(user: string, correct: string, acceptAlso?: string[]): boolean {
    const u = normalize(user);
    if (u === normalize(correct)) return true;
    if (acceptAlso) {
        return acceptAlso.some(alt => u === normalize(alt));
    }
    return false;
}

export function wordOverlapMatch(user: string, correct: string, threshold = 0.65): boolean {
    const userWords = new Set(normalize(user).split(/\s+/).filter(w => w.length > 1));
    const correctWords = normalize(correct).split(/\s+/).filter(w => w.length > 1);
    if (correctWords.length === 0) return true;
    const matched = correctWords.filter(w => userWords.has(w)).length;
    return matched / correctWords.length >= threshold;
}
