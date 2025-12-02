import React, { useState } from 'react';

export function TaskReading({ lesson, onComplete }) {
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);

    const handleSubmit = () => {
        setShowFeedback(true);
        // Check if all answers are correct (simple string match for now)
        const allCorrect = lesson.content.questions.every(q =>
            answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()
        );

        if (allCorrect) {
            setTimeout(() => onComplete(), 1500);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="glass-panel p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">{lesson.title}</h2>
                <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                    {lesson.content.text}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-400">Vocabulary</h3>
                    <ul className="space-y-3">
                        {lesson.content.vocabulary.map((vocab, idx) => (
                            <li key={idx} className="flex justify-between items-center border-b border-slate-700 pb-2">
                                <span className="font-semibold text-slate-200">{vocab.word}</span>
                                <span className="text-slate-400">{vocab.translation}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">Questions</h3>
                    <div className="space-y-4">
                        {lesson.content.questions.map(q => (
                            <div key={q.id}>
                                <label className="block text-sm text-slate-300 mb-1">{q.text}</label>
                                <input
                                    type="text"
                                    className={`w-full bg-slate-800 border rounded p-2 text-white 
                    ${showFeedback
                                            ? (answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()
                                                ? 'border-green-500'
                                                : 'border-red-500')
                                            : 'border-slate-600 focus:border-blue-500'}
                  `}
                                    value={answers[q.id] || ''}
                                    onChange={e => setAnswers({ ...answers, [q.id]: e.target.value })}
                                    placeholder="Type your answer..."
                                />
                                {showFeedback && answers[q.id]?.toLowerCase().trim() !== q.answer.toLowerCase() && (
                                    <p className="text-xs text-red-400 mt-1">Correct answer: {q.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full mt-6 btn-primary"
                    >
                        Check Answers
                    </button>
                </div>
            </div>
        </div>
    );
}
