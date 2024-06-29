const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const main = document.querySelector("#main");
const txt = document.querySelector("#txt");

red.addEventListener("input", function () {
  chnangeColor();
});

green.addEventListener("input", function () {
  chnangeColor();
});

blue.addEventListener("input", function () {
  chnangeColor();
});

function chnangeColor() {
  const rangeRed = red.value.toString(16);
  const rangeBlue = blue.value.toString(16);
  const rangeGreen = green.value.toString(16);

  main.style.backgroundColor =
    "rgb(" + rangeRed + "," + rangeGreen + "," + rangeBlue + ")";

  txt.textContent =
    "rgb(" + rangeRed + "," + rangeGreen + "," + rangeBlue + ")";
}
