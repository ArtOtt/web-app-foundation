const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide Password";
  } else {
    input.type = "password";
    btn.textContent = "Show Password";
  }
});
