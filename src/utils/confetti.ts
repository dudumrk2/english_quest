import confetti from 'canvas-confetti';

export const triggerCelebration = () => {
    // Fire confetti from left
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.1, y: 0.8 },
        colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
        zIndex: 1500, // Ensure it's on top of modals if any
    });

    // Fire confetti from right
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.9, y: 0.8 },
        colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
        zIndex: 1500,
    });
};
