/**
 * Normalizes a string by converting to lowercase and removing punctuation.
 */
export const normalize = (s: string) => 
    s.toLowerCase()
     .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
     .replace(/\s+/g, " ")
     .trim();

/**
 * Checks if the user answer matches the correct answer based on 80% word overlap.
 * This is useful for long sentences where the user might miss a small word or punctuation.
 */
export const isAnswerCorrect = (user: string, correct: string): boolean => {
    if (!user) return false;
    
    // Normalize both
    const userNorm = normalize(user);
    const correctNorm = normalize(correct);
    
    // If exact match (after normalization), return true immediately
    if (userNorm === correctNorm) return true;
    
    // Split into words
    const userWords = userNorm.split(/\s+/).filter(w => w.length > 0);
    const correctWords = correctNorm.split(/\s+/).filter(w => w.length > 0);
    
    if (correctWords.length === 0) return true;
    
    // Count how many words from 'correct' are present in 'user'
    const userWordsSet = new Set(userWords);
    let matchedCount = 0;
    
    correctWords.forEach(word => {
        if (userWordsSet.has(word)) {
            matchedCount++;
        }
    });
    
    const score = matchedCount / correctWords.length;
    
    // Special handling for very short answers
    if (correctWords.length <= 2) {
        return userNorm === correctNorm;
    }
    
    return score >= 0.8;
};
