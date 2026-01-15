# Instructions for AI: Create English Lessons

## Overview
You are tasked with creating engaging English learning content for a student named Nadav (Beginner/Elementary level). The goal is to populate `src/data/lessons.ts` with structured lesson content.

## Target Audience
- **Name**: Nadav
- **Level**: Beginner / Elementary (A1-A2)
- **Interests**: Basketball, gaming (Roblox, Fortnite), technology, space, superheroes, science.

## Curriculum Structure
The curriculum spans **10 Weeks**. Each week consists of **6 Days**:

- **Day 1: Vocabulary Matching** (20 words)
- **Day 2: Reading I** (Main Story + Fill in Blanks)
- **Day 3: Reading II** (Application/Dialogue)
- **Day 4: Pronunciation I** (Practice)
- **Day 5: Pronunciation II** (Challenge)
- **Day 6: Weekly Review**

## Lesson Types & Interfaces

### 1. Vocabulary Matching (`type: 'vocabulary_matching'`)
- **Pairs**: 20 pairs of `{ word, translation, context, contextTranslation }`.
- **Goal**: Introduce the week's vocabulary.

### 2. Reading (`type: 'reading'`)
- **Text**: 12-15 sentences (approx. 150 words).
- **Features**:
  - `vocabulary`: List of words used.
  - `questions`: 5 comprehension questions.
  - `fillInTheBlanks` (Day 2 only): 5 exercises with `options`.

### 3. Pronunciation (`type: 'pronunciation'`)
- **Text**: 8-10 sentences.
- **Features**:
  - `tips`: 2-3 specific pronunciation guides (e.g., "The 'th' sound").
  - `vocabulary`: List of words used.

### 4. Weekly Review (`type: 'vocabulary'`)
- **Content**: Simple description object representing a review session.

## Content Guidelines
- **Vocabulary**: Ensure strictly 20 words are introduced in Day 1 and used throughout Days 2-5.
- **Tone**: Encouraging, fun, simple English.
- **Format**: valid TypeScript code matching the `Lesson` interface.

## Topics
1. Basketball
2. Jordan vs LeBron
3. Roblox
4. Fortnite
5. Science
6. Elon Musk
7. Friendship
8. Food
9. Modern Life & AI
10. Graduation

## File Path
- `src/data/lessons.ts`
