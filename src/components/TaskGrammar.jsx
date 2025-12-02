import React, { useState } from 'react';

export function TaskGrammar({ lesson, onComplete }) {
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);

    const handleSubmit = () => {
        setShowFeedback(true);
        const allCorrect = lesson.content.exercises.every(ex =>
            answers[ex.id]?.toLowerCase().trim() === ex.answer.toLowerCase()
        );

        if (allCorrect) {
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="glass-panel p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Grammar Rule</h2>
                <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg text-lg">
                    {lesson.content.rule}
                </div>
            </div>

            <div className="glass-panel p-8">
                <h3 className="text-xl font-bold mb-6">Practice</h3>
                <div className="space-y-6">
                    {lesson.content.exercises.map(ex => (
                        <div key={ex.id} className="flex flex-col gap-2">
                            <div className="text-lg">
                                {ex.question.split('___').map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <input
                                                type="text"
                                                className={`mx-2 w-32 text-center bg-slate-800 border-b-2 outline-none
                          ${showFeedback
                                                        ? (answers[ex.id]?.toLowerCase().trim() === ex.answer.toLowerCase()
                                                            ? 'border-green-500 text-green-400'
                                                            : 'border-red-500 text-red-400')
                                                        : 'border-slate-500 focus:border-blue-500'}
                        `}
                                                value={answers[ex.id] || ''}
                                                onChange={e => setAnswers({ ...answers, [ex.id]: e.target.value })}
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            {showFeedback && answers[ex.id]?.toLowerCase().trim() !== ex.answer.toLowerCase() && (
                                <p className="text-sm text-red-400 ml-4">Answer: {ex.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full mt-8 btn-primary"
                >
                    Submit Mission
                </button>
            </div>
        </div>
    );
}
