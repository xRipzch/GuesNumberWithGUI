console.log("GuessANumberLogic.js loaded");

// Select DOM elements for manipulation
const lblMessage = document.querySelector(".message");
const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");
const lblHighscore = document.querySelector(".highscore");
const inpGuess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

// Set game variables
let score = 5;
let highscore = 0;
let randNumber = Math.trunc(Math.random() * 20) + 1;

// display game messages
const displayMessage = function (message) {
    lblMessage.textContent = message;
};

// Handle guess logic
btnCheck.addEventListener("click", function () {
    const guess = Number(inpGuess.value);

    // No input case
    if (!guess || guess < 1 || guess > 20) {
        displayMessage("⛔ !💩Invalid Guess 💩!");
    }
    // Correct guess case
    else if (guess === randNumber) {
        displayMessage("🎉 Correct Number!");
        lblNumber.textContent = randNumber;
        document.body.style.backgroundColor = "#60b347";
        lblNumber.style.width = "30rem";

        // Update highscore
        if (score > highscore) {
            highscore = score;
            lblHighscore.textContent = highscore;
        }
    }
    // Incorrect guess case
    else {
        if (score > 1) {
            displayMessage(guess > randNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            lblScore.textContent = score;
        } else {
            displayMessage("💥 You lost the game!");
            lblScore.textContent = 0;
        }
    }
});

// "Again" button logic
btnAgain.addEventListener("click", function () {
    score = 5;
    randNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    lblScore.textContent = score;
    lblNumber.textContent = "?";
    inpGuess.value = "";
    document.body.style.backgroundColor = "#222";
    lblNumber.style.width = "15rem";
});
