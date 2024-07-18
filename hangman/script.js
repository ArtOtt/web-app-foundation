const words = [
  "javascript",
  "html",
  "CSS",
  "border",
  "function",
  "object",
  "array",
  "button",
  "margin",
  "flexbox",
];

//get random word from words
const random = words[Math.floor(Math.random() * words.length)];

//disable a letter after clicking and get the cklicked letter
// test for letter "a"
const a = document.querySelector("#a");
a.addEventListener("click", () => {
  //btn unclickable
  a.disabled = true;
  //get the letter
  const letterClicked = a.innerText;

  console.log(letterClicked);
});

// check if letter in words

/*


let words = ["javascript"];

let split = words[0].split("");

let result = [];

 

 

function check(lett) {

  // Wenn das result-Array noch leer ist, initialisieren wir es

  if (result.length === 0) {

    for (let i = 0; i < split.length; i++) {

      if (!split[i].includes(lett)) {

        result.push("_");

      } else {

        result.push(split[i]);

      }

    }

  } else {

    // Wenn das result-Array bereits initialisiert ist, aktualisieren wir es

    for (let z = 0; z < split.length; z++) {

      if (split[z] === lett && result[z] === "_") {

        result[z] = lett;

      }

    }

  }

}

 

// Beispielaufrufe der Funktion check

check("a");

 

console.log(result);

check("j");

console.log(result)

check("v")

console.log(result)

*/
