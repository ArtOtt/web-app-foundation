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
