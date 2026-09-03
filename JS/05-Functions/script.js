const nameInput = document.querySelector('#name');
const greetButton = document.querySelector('#greet');
const message = document.querySelector('#message');

function createGreeting(name = 'learner') {
    return `Welcome, ${name.trim() || 'learner'}!`;
}

const announceGreeting = (name) => {
    message.textContent = createGreeting(name);
};

greetButton.addEventListener('click', () => {
    announceGreeting(nameInput.value);
});

function createCounter() {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter(), counter());
