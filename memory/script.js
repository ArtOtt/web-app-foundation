const cards = document.querySelectorAll(".card");

//picture container
let pics = [
  "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/16/10/00/animal-2148641_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/28/21/22/highland-cattle-8282564_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/30/08/24/peacock-1290248_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/02/18/15/22/swan-8581483_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/16/10/00/animal-2148641_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/28/21/22/highland-cattle-8282564_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/30/08/24/peacock-1290248_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/02/18/15/22/swan-8581483_1280.jpg",
];

// counter for click
let countClick = 0;

let twoCards = [];

// remove the is-flipped class from all cards
function remove() {
  cards.forEach((card) => {
    card.classList.remove("is-flipped");
  });
}

const imgContainer = document.querySelectorAll(".flip-card-back img");

//array with 12 numbers in random sequence

let randomSequence = [];

function memoryMix() {
  while (randomSequence.length < pics.length) {
    const rndInt = Math.floor(Math.random() * pics.length);
    if (!randomSequence.includes(rndInt)) {
      randomSequence.push(rndInt);
    }
  }
}

memoryMix();

function distributeCards() {
  for (let i = 0; i < pics.length; i++) {
    //console.log(pics[randomSequence[i]]);
    imgContainer[i].src = pics[randomSequence[i]];
  }
}

//check match in flipped card src = the other flipped card src

function checkMatch() {
  cards.forEach((card) => {
    if (card.classList.contains("is-flipped")) {
      //twoCards.push(card.src)
      const img = card.querySelector(".flip-card-back img");
      twoCards.push(img.src);
    }
  });

  if (twoCards[0] === twoCards[1]) {
    twoCards.length = 0;
    return console.log(true);
  } else {
    twoCards.length = 0;
    return console.log(false);
  }
}

distributeCards();
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
      checkMatch();
      setTimeout(() => {
        remove();
        countClick = 0;
      }, 1000); // delay befor flipped all card back
    }
  });
});

console.log(twoCards);

//join pic with container
//console.log(twoCards);
//console.log(randomSequence.length);
//console.log(pics.length);
