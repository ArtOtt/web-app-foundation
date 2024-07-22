const cards = document.querySelectorAll(".card");
// counter for click
let countClick = 0;

cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (countClick !== 2) {
      this.classList.toggle("is-flipped");
      countClick++;
      console.log(countClick);
    } else {
      countClick = 0;
      console.log(countClick);
    }
  });
});
/*
cards.forEach((card) => {
  console.log((card.classList = "is-flipped"));
  console.log(card.classList);
});
*/
//flipp the card back

//TEST Attribute is-Flipped endfernen. vorher prüfen ob diese classe vorhanden ist und wenn ja nur diese entfernen.
function reset() {
  cards.forEach((card) => {});
}
