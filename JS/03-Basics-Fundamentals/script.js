const runExampleButton = document.querySelector('#run-example');
const output = document.querySelector('#output');

const learner = {
    name: 'Ankit',
    completedLessons: 2
};

function formatSummary() {
    const nextLesson = learner.completedLessons + 1;
    const hasName = learner.name.length > 0;
    return hasName
        ? `${learner.name} is ready for lesson ${nextLesson}.`
        : 'Add a learner name first.';
}

runExampleButton.addEventListener('click', () => {
    output.textContent = formatSummary();
});
