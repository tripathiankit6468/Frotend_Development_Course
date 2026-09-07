// ===============================
// ZODIAC SIGNS
// ===============================

const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];


// ===============================
// COMPLIMENTS
// ===============================

const compliments = [
    "You have a naturally confident personality.",
    "You are someone people can easily trust.",
    "Your determination is one of your strongest qualities.",
    "You have a creative mind and unique way of thinking.",
    "You bring positive energy wherever you go.",
    "You are more capable than you often realize.",
    "Your patience helps you handle difficult situations.",
    "You have a personality that people remember.",
    "You are naturally good at understanding people.",
    "Your ability to keep moving forward is impressive."
];


// ===============================
// VICTIM CARD COMPLIMENTS
// ===============================

const victimCardCompliments = [
    "You sometimes take responsibility for things that are not even your fault.",
    "People may underestimate you before they discover what you are capable of.",
    "You give people more chances than they probably deserve.",
    "You often hide your struggles behind a calm personality.",
    "You care deeply, even when you don't show it.",
    "You sometimes think too much about what others think of you."
];


// ===============================
// RECOMMENDATIONS
// ===============================

const recommendations = [
    "Focus on one important goal instead of chasing everything at once.",
    "Spend more time developing your strongest skill.",
    "Don't compare your journey with someone else's.",
    "Take calculated risks when a good opportunity appears.",
    "Give yourself enough time to rest and recharge.",
    "Surround yourself with people who genuinely support you.",
    "Write down your goals and track your progress regularly.",
    "Trust your decisions but stay open to learning."
];


// ===============================
// PREDICTIONS
// ===============================

const predictions = [
    "A new opportunity may appear when you least expect it.",
    "The coming period can bring progress in your personal growth.",
    "Someone from your past may reconnect with you.",
    "Your hard work is likely to start producing noticeable results.",
    "You may discover a new interest that becomes important to you.",
    "A change in your routine could lead to a positive outcome.",
    "You may have to make an important decision soon.",
    "Your confidence can increase after overcoming a small challenge.",
    "A useful connection may help you move closer to your goals.",
    "You may receive appreciation for something you have worked hard on.",
    "A period of learning and self-improvement is ahead.",
    "You could find yourself taking more responsibility than before.",
    "An unexpected opportunity may teach you something valuable.",
    "Your patience may pay off in an important situation.",
    "The next chapter of your journey can be better than you expect."
];


// ===============================
// HTML ELEMENTS
// ===============================

const form = document.querySelector("form");

const firstName = document.getElementById("firstName");
const surname = document.getElementById("surname");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const result = document.getElementById("result");


// ===============================
// RANDOM ITEM FUNCTION
// ===============================

function getRandomItem(array) {

    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
}


// ===============================
// FIND ZODIAC SIGN
// ===============================

function getZodiacSign(day, month) {

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return zodiacSigns[0]; // Aries
    }

    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return zodiacSigns[1]; // Taurus
    }

    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return zodiacSigns[2]; // Gemini
    }

    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return zodiacSigns[3]; // Cancer
    }

    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return zodiacSigns[4]; // Leo
    }

    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return zodiacSigns[5]; // Virgo
    }

    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return zodiacSigns[6]; // Libra
    }

    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return zodiacSigns[7]; // Scorpio
    }

    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return zodiacSigns[8]; // Sagittarius
    }

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return zodiacSigns[9]; // Capricorn
    }

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return zodiacSigns[10]; // Aquarius
    }

    return zodiacSigns[11]; // Pisces
}


// ===============================
// FORM SUBMISSION
// ===============================

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values
    const name = firstName.value.trim();
    const lastName = surname.value.trim();

    const birthDay = Number(day.value);
    const birthMonth = Number(month.value);
    const birthYear = Number(year.value);


    // ===============================
    // VALIDATION
    // ===============================

    if (name === "") {
        result.textContent = "Please enter your first name.";
        return;
    }

    if (lastName === "") {
        result.textContent = "Please enter your surname.";
        return;
    }

    if (
        birthDay < 1 ||
        birthDay > 31 ||
        birthMonth < 1 ||
        birthMonth > 12
    ) {
        result.textContent = "Please enter a valid date of birth.";
        return;
    }

    if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
        result.textContent = "Please enter a valid birth year.";
        return;
    }


    // ===============================
    // CALCULATE ZODIAC
    // ===============================

    const zodiac = getZodiacSign(
        birthDay,
        birthMonth
    );


    // ===============================
    // GENERATE RANDOM CONTENT
    // ===============================

    const compliment = getRandomItem(compliments);

    const victimCompliment =
        getRandomItem(victimCardCompliments);

    const recommendation =
        getRandomItem(recommendations);

    const prediction =
        getRandomItem(predictions);


    // ===============================
    // DISPLAY RESULT
    // ===============================

    result.innerHTML = `
        <div class="insights">

            <h2>Hello ${name} ${lastName}!</h2>

            <h3>Your Zodiac Sign: ${zodiac}</h3>

            <div class="insight-card">
                <h4>✨ Your Compliment</h4>
                <p>${compliment}</p>
            </div>

            <div class="insight-card">
                <h4>🎴 Victim Card</h4>
                <p>${victimCompliment}</p>
            </div>

            <div class="insight-card">
                <h4>🔮 Prediction</h4>
                <p>${prediction}</p>
            </div>

            <div class="insight-card">
                <h4>💡 Recommendation</h4>
                <p>${recommendation}</p>
            </div>

        </div>
    `;
});