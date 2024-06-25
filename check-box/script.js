const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
let last = null;

function toggle(first, second, third) {
  if (first.checked && second.checked && third.checked) {
    last.checked = false;
  }
  last = first;
}

one.addEventListener("click", function () {
  toggle(one, two, three);
});

two.addEventListener("click", function () {
  toggle(two, three, one);
});
three.addEventListener("click", function () {
  toggle(three, one, two);
});
