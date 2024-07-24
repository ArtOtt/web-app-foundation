const cards = document.querySelectorAll(".card");

//picture container
const pics = [
  "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/06/19/05/37/animal8839173_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/28/21/22/highland-cattle-8282564_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/30/08/24/peacock-1290248_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/02/18/15/22/swan-8581483_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/06/19/05/37/animal8839173_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/28/21/22/highland-cattle-8282564_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/30/08/24/peacock-1290248_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/02/18/15/22/swan-8581483_1280.jpg",
];

// counter for click
let countClick = 0;

// flip card but not more than 2
cards.forEach((card) => {
  //add eventlistener to every btn
  card.addEventListener("click", function () {
    if (countClick < 2) {
      //not flipp back the first flipped card
      if (!this.classList.contains("is-flipped")) {
        //toggle 'is-flipped'
        this.classList.toggle("is-flipped");
        //count the flipped cards
        countClick++;
      }
    }

    // if countClick more than 2 than remove is-flipped from all cards
    if (countClick === 2) {
      setTimeout(() => {
        remove();
        countClick = 0;
      }, 1000); // delay befor flipped all card back
    }
  });
});

// remove the is-flipped class from all cards
function remove() {
  cards.forEach((card) => {
    card.classList.remove("is-flipped");
  });
}

const imgContainer = document.querySelectorAll("img");

//array with 12 numbers in random sequence

let randomSequence = [];

function memoryMix() {
  for (let i = 0; i <= 100; i++) {
    const rndInt = Math.floor(Math.random() * 12);
    if (!randomSequence.includes(rndInt)) {
      randomSequence.push(rndInt);
    }
  }
}

function distributeCards() {
  for (let i = 0; i < pics.length; i++) {
    //console.log(pics[randomSequence[i]]);
    imgContainer[i].src = pics[randomSequence[i]];
  }
}
memoryMix();
distributeCards();

//join pic with container
//console.log((imgContainer[0].src = pics[0]));
console.log(randomSequence.length);
console.log(pics.length);
