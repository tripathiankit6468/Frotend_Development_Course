document.addEventListener("click", function (event) {

    // Create bubble
    const bubble = document.createElement("div");

    // Add class
    bubble.classList.add("bubble");

    // Add text
    bubble.textContent = "Hello, Ankit Tripathi";

    // Position bubble where user clicked
    bubble.style.left = event.clientX + "px";
    bubble.style.top = event.clientY + "px";

    // Add bubble to body
    document.body.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(function () {
        bubble.remove();
    }, 1500);

});