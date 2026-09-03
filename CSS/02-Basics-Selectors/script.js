// JavaScript for CSS Basics course

console.log("CSS Basics & Selectors - Page Loaded!");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");

    // Log all elements with specific selectors
    const highlights = document.querySelectorAll('.highlight');
    console.log(`Found ${highlights.length} elements with class "highlight"`);

    // Log all links
    const links = document.querySelectorAll('a');
    console.log(`Found ${links.length} links on the page`);

    // Add click event to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log("Button clicked:", this.textContent);
        });
    });

    // Add input event listeners
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            console.log("Input changed:", this.value);
        });
    });
});

// Change background color on button click
function changeBackgroundColor() {
    const colors = ['#f0f0f0', '#ffffcc', '#ccffcc', '#ccf', '#ffcccc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
