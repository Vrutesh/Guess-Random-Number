let randomNum = parseInt(Math.random() * 100 + 1);

let inputValue = document.getElementById("guessfield");
let btn = document.getElementById("btn");
let prevGuess = document.getElementById("prevguess");
let guessRemain = document.getElementById("guessremain");
let output = document.getElementById("output");
let startOver = document.querySelector(".result");

let p = document.createElement("p");

let prevguess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  btn.addEventListener("click", () => {
    let guess = parseInt(inputValue.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid Number");
  } else if (guess < 1) {
    alert("Please enter number greater than 0");
  } else if (guess > 100) {
    alert("Please enter number less than 100");
  } else {
    prevguess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over ! Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    alert(`Number is too low !`);
  } else if (guess > randomNum) {
    alert(`Number is too High !`);
  }
}

function displayGuess(guess) {
  inputValue.value = "";
  prevGuess.innerHTML += `${guess}, `;
  numGuess++;
  guessRemain.innerHTML = `${11 - numGuess}`;
}

displayMessage = (message) => {
  output.innerHTML = `<h3>${message}</h3>`;
  output.style.color = "springgreen";
};

function endGame() {
  inputValue.value = "";
  inputValue.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    prevGuess.innerHTML = "";
    guessRemain.innerHTML = `${11 - numGuess}`;
    inputValue.removeAttribute("disabled");
    startOver.removeChild(p);
    output.innerHTML = "";
    playGame = true;
  });
}
