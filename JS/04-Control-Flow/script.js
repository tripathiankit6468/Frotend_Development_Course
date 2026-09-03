const scoreInput = document.querySelector('#score');
const checkScoreButton = document.querySelector('#check-score');
const result = document.querySelector('#result');

function getGrade(score) {
    if (!Number.isFinite(score) || score < 0 || score > 100) {
        return 'Enter a number from 0 to 100.';
    }

    if (score >= 90) return 'Grade A';
    if (score >= 80) return 'Grade B';
    if (score >= 70) return 'Grade C';
    if (score >= 60) return 'Grade D';
    return 'Needs more practice';
}

checkScoreButton.addEventListener('click', () => {
    const score = Number(scoreInput.value);
    result.textContent = getGrade(score);
});

const topics = ['conditions', 'loops', 'break', 'continue'];
for (const topic of topics) {
    console.log(`Learning: ${topic}`);
}
