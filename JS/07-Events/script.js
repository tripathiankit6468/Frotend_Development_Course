const form = document.querySelector('#feedback-form');
const feedback = document.querySelector('#feedback');
const message = document.querySelector('#message');
const eventLog = document.querySelector('#event-log');

function logEvent(eventName) {
    const item = document.createElement('li');
    item.textContent = eventName;
    eventLog.append(item);
}

feedback.addEventListener('input', () => {
    message.textContent = `${feedback.value.length} character(s) typed.`;
    logEvent('input');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Feedback submitted without reloading the page.';
    logEvent('submit');
});

eventLog.addEventListener('click', (event) => {
    if (event.target.matches('li')) event.target.remove();
});
