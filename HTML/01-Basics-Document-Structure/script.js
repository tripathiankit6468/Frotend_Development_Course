/*
    EXTERNAL JAVASCRIPT FILE
    This file is linked at the end of HTML body using: <script src="script.js"></script>
*/

// Log when the page has loaded
console.log("HTML Basics & Document Structure - Page Loaded!");

// Add event listeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is fully loaded and parsed");

    // Get all buttons and add click handlers
    const buttons = document.querySelectorAll('button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log("Button clicked:", button.textContent);
        });
    });

    // Get all links
    const links = document.querySelectorAll('a');
    console.log(`Found ${links.length} links on the page`);

    // Get all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(`Found ${headings.length} headings on the page`);

    // Get all input fields
    const inputs = document.querySelectorAll('input');
    console.log(`Found ${inputs.length} input fields on the page`);
});

// Example: Change body color on scroll
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.body.style.backgroundOpacity = 0.9;
    } else {
        document.body.style.backgroundOpacity = 1;
    }
});

// Example: Log input field changes
const inputFields = document.querySelectorAll('input[type="text"]');
inputFields.forEach(function (input) {
    input.addEventListener('input', function () {
        console.log("Input value changed:", this.value);
    });
});

// Example: Validate email input
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(function (email) {
    email.addEventListener('blur', function () {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailPattern.test(this.value)) {
            console.warn("Invalid email format:", this.value);
        }
    });
});
