# Hangman

A simple browser-based Hangman game implemented in JavaScript.

## Description

This project is a minimal implementation of the classic Hangman word-guessing game. It uses plain HTML, CSS, and JavaScript and runs entirely in the browser—no build tools or server required.

## How to Play

- The game picks a random word based on a list of programming languages.
- Guess letters one at a time.
- Correct guesses reveal the letters in the word.
- Incorrect guesses build the hangman; too many wrong guesses and you lose.

## Run Locally

1. Open `index.html` in a modern browser (double-click or use your browser's "Open File" feature).
2. The UI and controls are on the page; start guessing letters.

Optional: Serve the folder with a simple static server (helpful for some browsers):

```
# Using Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Files

- `index.html` — Main page and game UI
- `js/hangman.js` — Game logic
- `images/` — Any game assets
