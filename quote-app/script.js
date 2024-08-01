let quote = [];
let from = [];

function render() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      if (quote.length >= 0) {
        from.length = 0;
        quote.length = 0;
        quote.push(data.quote);
        from.push(data.author);
        h1.innerText = quote;
        h3.innerText = from;
      }
    });
}

render();

const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  render();
});
