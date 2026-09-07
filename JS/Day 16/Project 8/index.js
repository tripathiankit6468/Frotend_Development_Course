const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);

    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.textContent = "Hii";

    const color = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FF33A8', '#A833FF', '#33FFA8', '#FFA833'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    circleElement.style.left = `${e.clientX -25}px`;
    circleElement.style.top = `${e.clientY -25}px`;
    body.append(circleElement);

    setTimeout(() => {
        circleElement.remove();
    },5000);

}) 