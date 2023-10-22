var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');

document.addEventListener('DOMContentLoaded', function() {
    var guessSent = document.getElementById('guessSent');
    guessSent.addEventListener('click', checkGuess);
});

var guessField = document.querySelector('.guessField');
var countGuesses = 1;
var restartButton;

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (countGuesses === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    
    if (userGuess === randomNumber) {
        lastResult.textContent = `Congratulations! You're right! the right number is ${userGuess}!`;
        lastResult.style.color = 'lightgreen';
    } else if (countGuesses === 10) {
        lastResult.textContent = 'END OF THE GAME!';
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.color = 'lightcoral';
        lowOrHigh.textContent = userGuess < randomNumber ? 'Your guess is LOW!' : 'Your guess is HIGH!';
    }

    if (userGuess === randomNumber || countGuesses === 10) {
        lowOrHigh.textContent = '';
        endTheGame();
    }

    countGuesses++;
    guessField.value = '';
    guessField.focus();
}

function endTheGame() {
    guessField.disabled = true;
    guessSent.disabled = true;
    restartButton = document.createElement('button');
    restartButton.textContent = 'Start a new game';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}

function restartGame() {
    countGuesses = 1;

    var restartResults = document.querySelectorAll('.results p');
    for (var i = 0; i < restartResults.length; i++) {
        restartResults[i].textContent = '';
    }
    restartButton.parentNode.removeChild(restartButton);
    guessField.disabled = false;
    guessSent.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}