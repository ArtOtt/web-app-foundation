const btn = document.querySelector("button");
const html = document.querySelector("html");
const title = document.querySelector("title");

btn.addEventListener("click", function () {
  html.classList.toggle("night");
  title.textContent = "Good Night";
  btn.classList.toggle("night-btn");

  if (html.classList == false) {
    title.textContent = "Good Morning";
  }
});
