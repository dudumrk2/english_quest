import React from 'react';
import { Mail, Download, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

import { lessons } from '../data/lessons';

export function WeeklySummary({ week, onContinue }) {
    const weekLessons = lessons.filter(l => l.week === week).sort((a, b) => a.day - b.day);
    const totalMissions = weekLessons.length;

    React.useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    const handleEmail = () => {
        const subject = `English Progress Report - Week ${week}`;
        const body = `Hi! Here is Nadav's progress for Week ${week}.\n\nCompleted all ${totalMissions} missions!\nScore: 100%\n\nGreat job!`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleExport = () => {
        let csvContent = "data:text/csv;charset=utf-8,Week,Day,Task,Status\n";
        weekLessons.forEach(lesson => {
            csvContent += `Week ${week},${lesson.day},${lesson.type},Completed\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `week_${week}_report.csv`);
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="glass-panel p-12 border-2 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.2)]">
                <div className="flex justify-center mb-6">
                    <Star size={64} className="text-yellow-400 fill-yellow-400 animate-bounce" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Mission Accomplished!
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                    You have completed all missions for Week {week}. Outstanding work, Commander!
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-800 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-white">{totalMissions}/{totalMissions}</div>
                        <div className="text-sm text-slate-400">Missions</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-emerald-400">100%</div>
                        <div className="text-sm text-slate-400">Accuracy</div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <button onClick={handleEmail} className="btn-primary flex items-center justify-center gap-2">
                        <Mail size={20} /> Send Report to Parents
                    </button>
                    <button onClick={handleExport} className="bg-slate-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-600 flex items-center justify-center gap-2">
                        <Download size={20} /> Export to Excel
                    </button>
                </div>
            </div>

            <button onClick={onContinue} className="text-slate-400 hover:text-white underline">
                Continue to Next Week
            </button>
        </div>
    );
}
