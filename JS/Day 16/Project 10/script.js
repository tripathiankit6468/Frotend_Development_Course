const quizForm = document.getElementById("quizForm");

const result = document.getElementById("result");


// Correct answers

const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "a",
    q5: "d",
    q6: "c",
    q7: "a",
    q8: "b",
    q9: "c",
    q10: "c"
};


// Submit quiz

quizForm.addEventListener("submit", function (event) {

    // Prevent page reload

    event.preventDefault();


    let score = 0;


    // Check all answers

    for (let question in correctAnswers) {

        const selectedAnswer =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        // If user selected an answer

        if (selectedAnswer) {

            if (
                selectedAnswer.value ===
                correctAnswers[question]
            ) {
                score++;
            }

        }

    }


    // Calculate percentage

    const percentage = (score / 10) * 100;


    // Display result

    if (percentage >= 80) {

        result.className = "success";

        result.innerHTML = `
            🎉 Excellent!
            <br>
            You scored ${score}/10
            <br>
            ${percentage}%
        `;

    }

    else if (percentage >= 50) {

        result.className = "average";

        result.innerHTML = `
            👍 Good Job!
            <br>
            You scored ${score}/10
            <br>
            ${percentage}%
        `;

    }

    else {

        result.className = "fail";

        result.innerHTML = `
            📚 Keep Practicing!
            <br>
            You scored ${score}/10
            <br>
            ${percentage}%
        `;

    }

});