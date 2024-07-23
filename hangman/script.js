const words = [
  "javascript",
  "html",
  "css",
  "border",
  "function",
  "object",
  "array",
  "button",
  "margin",
  "flexbox",
];

//get random word from words
let random;

//state
let result = [];
//count fails
let fails = 0;
//restart game
const btnRestart = document.querySelector("#btn-restart");

initGame();

btnRestart.addEventListener("click", initGame);

//add eventlistener to all letter buttons

const allButtons = document.querySelectorAll(".letter");

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const letter = button.innerText.toLowerCase();
    button.disabled = true;
    check(letter);
  });
});

//init random word in "_"

function initGame() {
  render = words[Math.floor(Math.random() * words.length)];
  fails = 0;
  if (result.length === 0) {
    for (let i = 0; i < random.length; i++) {
      result.push("_");
    }
  }
  render();
}
// Wenn das result-Array bereits initialisiert ist, aktualisieren wir es
function check(lett) {
  if (!random.includes(lett)) {
    fails++;
    if (fails === 10) {
      endGame();
    }

    render();
    return;
  }

  for (let i = 0; i < random.length; i++) {
    if (random[i] === lett && result[i] === "_") {
      result[i] = lett;
    }
  }
  render();
}

//render result
function render() {
  const container = document.querySelector(".hidenWordContainer");
  //fails counter
  const failsContainer = document.querySelector("#fails");
  failsContainer.innerText = fails;
  container.innerText = result.join("");
}

// game over screen function

function endGame() {
  const endScreen = document.querySelector("#end-screen");
  endScreen.hidden = false;
}
