let playerName = prompt("Naam speler:");
const words = ["vives", "tafel"];
let guesses = [];
let startTime = Date.now();

document.addEventListener("DOMContentLoaded", function () {

    const gokInput = document.getElementById('gok');
    const goButton = document.getElementById('go');
    const gokkenDiv = document.getElementById('gokken');
    const newGameButton = document.getElementById('nieuw');
    const clearButton = document.getElementById('clear');
    const highscoresDiv = document.getElementById('highscores');

    goButton.addEventListener('click', makeGuess);
    newGameButton.addEventListener('click', newGame);

    const start = () => {
        displayHighscores();
    }

    const selectRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)];
    }

    const makeGuess = () => {
        const guess = gokInput.value.toLowerCase();
        if (guess.length !== 5) {
            alert("Guess must be exactly 5 letters.");
            return;
        }

        if (guesses.length >= maxGuesses) {
            alert("Maximum guesses reached. Start a new game.");
            return;
        }

        const targetWord = selectRandomWord();
        const result = evaluateGuess(guess, targetWord);
        displayGuess(guess, result);
        guesses.push(guess);

        if (guess === targetWord) {
            const endTime = Date.now();
            saveHighscore(playerName, guesses.length, endTime - startTime);
            displayHighscores();
        }

        gokInput.value = '';
    }

    const evaluateGuess= (guess, targetWord) =>{
        const result = Array(5).fill('red');
        const targetLetters = targetWord.split('');

        for (let i = 0; i < 5; i++) {
            if (guess[i] === targetWord[i]) {
                result[i] = 'green';
                targetLetters[i] = null;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (result[i] !== 'green') {
                const index = targetLetters.indexOf(guess[i]);
                if (index !== -1) {
                    result[i] = 'yellow';
                    targetLetters[index] = null;
                }
            }
        }

        return result;
    }

    const displayGuess = (guess, result)=> {
        const guessDiv = document.createElement('div');
        for (let i = 0; i < 5; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = guess[i];
            letterSpan.classList.add(result[i]);
            if (result[i] === 'green') {
                letterSpan.addEventListener('click', function () {
                    alert(`${guess[i]} is correct!`);
                });
            }
            guessDiv.appendChild(letterSpan);
        }
        gokkenDiv.appendChild(guessDiv);
    }

    const saveHighscore = (name, guesses, duration) => {
        const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        highscores.push({ name, guesses, duration });
        localStorage.setItem('highscores', JSON.stringify(highscores));
    }

    const displayHighscores= () => {
       const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        const highscoresList = document.createElement('ul');

        highscores.forEach(score => {
            const scoreItem = document.createElement('li');
            scoreItem.textContent = `${score.name}: ${score.guesses} gok(ken) [ ${score.duration}]`;
            highscoresList.appendChild(scoreItem);
        });

        highscoresDiv.appendChild(highscoresList);
    }

    const newGame = () => {
        gokkenDiv.innerHTML = '';
        guesses = [];
        startTime = Date.now();

    }

    start();
});
