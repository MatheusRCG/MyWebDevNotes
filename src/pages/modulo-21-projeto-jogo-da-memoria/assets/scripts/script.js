const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";

let techs = [
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
];

function startGame() {
  let cards = createCards(techs);
  shuffleCards(cards);
  initializeBoard(cards);
}

function createCards(techs) {
  let cards = [];

  techs.forEach((tech) => {
    cards.push(createPair(tech));
  });

  return cards.flat();
}

function createPair(tech) {
  return [
    {
      id: createID(tech),
      icon: tech,
      flipped: false,
    },
    {
      id: createID(tech),
      icon: tech,
      flipped: false,
    },
  ];
}

function createID(tech) {
  return tech + parseInt(Math.random() * 1000);
}

function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cards[randomIndex], cards[currentIndex]] = [
      cards[currentIndex],
      cards[randomIndex],
    ];
  }
}

/*
  inicializar tabuleiro
    criar cada card dentro de tabuleiro
  criar a carta front e back
  criar o evento de click
*/

function initializeBoard(cards) {
  let board = document.getElementById("game-board");

  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
  });
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, cardElement) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);
  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "./assets/images/" + card.icon + ".png";
    iconElement.alt = card.icon;
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "&lt;/&gt;";
  }
  cardElement.appendChild(cardElementFace);
}

function flipCard() {}

startGame();
