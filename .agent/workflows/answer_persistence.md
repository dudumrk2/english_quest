---
description: How answer persistence works in the application
---

# Answer Persistence Workflow

This workflow describes how user answers are persisted across sessions and how to implement persistence for new lesson types.

## Overview
Answers are stored in `localStorage` via the `useAppStore` hook. Each lesson's answers are saved under a key unique to the user and lesson ID.

## Data Structure
The `AppState` interface includes:
```typescript
lessonAnswers: Record<number, any>;
```
Key: `lessonId` (number)
Value: an object containing the answers independently of the lesson type structure.

## Integration

### 1. App Store (`useAppStore.ts`)
- `saveLessonAnswers(lessonId, answers)`: Updates the store and local storage.
- `clearLessonAnswers(lessonId)`: Removes specific lesson answers from the store.

### 2. Main App (`App.tsx`)
Passes the following props to task components:
- `initialAnswers`: `state.lessonAnswers[activeLesson.id] || {}`
- `onSaveAnswers`: `(answers) => saveLessonAnswers(activeLesson.id, answers)`
- `onClearAnswers`: `() => clearLessonAnswers(activeLesson.id)`

### 3. Task Components
Each task component (e.g., `TaskGrammar`, `TaskReading`) must:
1. Accept `initialAnswers`, `onSaveAnswers`, and `onClearAnswers` props.
2. Initialize local state with `initialAnswers`.
3. Call `onSaveAnswers(newState)` whenever the user input changes.
4. Implement a "Clear Answers" button that:
   - Resets local state to default.
   - Calls `onClearAnswers()`.

## adding Persistence to New Tasks
Follow this pattern:

```javascript
export function NewTask({ lesson, onComplete, initialAnswers = {}, onSaveAnswers, onClearAnswers }) {
    const [myState, setMyState] = useState(initialAnswers.myState || '');

    const handleChange = (val) => {
        setMyState(val);
        if (onSaveAnswers) onSaveAnswers({ myState: val });
    };

    const handleClear = () => {
        setMyState('');
        if (onClearAnswers) onClearAnswers();
    };

    return (
        // ... Render UI ...
        <Button onClick={handleClear}>Clear</Button>
    );
}
```
