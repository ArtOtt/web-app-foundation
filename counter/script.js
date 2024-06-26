const html = document.querySelector("html");
const number = document.querySelector("h1");
const reset = document.querySelector("button");
const block = document.querySelector("div");

let increase = 0;
let boxSize = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    increase += 1;
    boxSize += 1;
    number.innerText = increase;

    if (boxSize >= 100) {
      boxSize = 0;
      block.style.width = boxSize + "%";
    } else {
      block.style.width = boxSize + "%";
    }
  } else if (event.key === "Enter") {
    increase += 1;
    boxSize += 1;
    number.innerText = increase;

    if (boxSize >= 100) {
      boxSize = 0;
      block.style.width = boxSize + "%";
    } else {
      block.style.width = boxSize + "%";
    }
  }
});

html.addEventListener("click", function () {
  increase += 1;
  boxSize += 1;
  number.innerText = increase;

  if (boxSize >= 100) {
    boxSize = 0;
    block.style.width = boxSize + "%";
  } else {
    block.style.width = boxSize + "%";
  }
});

reset.addEventListener("click", function () {
  increase = -1;
  boxSize = -1;
});
