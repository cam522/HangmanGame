// Hangman Game
// By Cameron Wilson
// 25/07/2026


// List of programming languages to guess from.
var programming_languages = [
  "html",
  "css",
  "java",
  "javascript",
  "typescript",
  "scratch",
  "csharp",
  "python",
  "unity",
  "sql",
  "ruby",
  "rust",
  "php",
  "c",
  "cplus",
  "cplusplus",
  "kotlin",
  "swift",
  "go",
  "perl"
];

// Sets up the game variables.
let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
}

// Generate the on-screen keyboard buttons.
function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letter +
        `'
        onClick="handleGuess('` +
        letter +
        `')"
        >
        ` +
        letter +
        `
        </button>
        `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

// Handles a guessed letter.
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

// Updates the hangman picture based on the number of mistakes.
function updateHangmanPicture() {
  document.getElementById("hangmanPic").src = "./images/" + mistakes + ".jpg";
}

// Checks if the game has been won.
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

// Checks if the game has been lost.
function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost!!!";
  }
}

// Displays the current guessed word with underscores for unguessed letters.
function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

// Updates the number of mistakes displayed.
function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

// Resets the game to its initial state.
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "./images/0.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

// Initializes the game when the page loads.
document.getElementById("maxWrong").innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
