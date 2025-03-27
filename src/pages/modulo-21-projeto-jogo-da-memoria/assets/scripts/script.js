const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";
const FLIP = "flip";

function startGame() {
  initializeBoard(game.createCards());
}

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

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add(FLIP);
    if (game.secondCard) {
      if (game.checkMatch()) {
        game.clearCards();
        if (game.checkGameOver()) {
          let gameOverLayer = document.getElementById("game-over");
          gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          unflipedCards();
          game.unflipedCards();
        }, 1000);
      }
    }
  }
}

function unflipedCards() {
  let firstCard = document.getElementById(game.firstCard.id);
  let secondCard = document.getElementById(game.secondCard.id);

  firstCard.classList.remove(FLIP);
  secondCard.classList.remove(FLIP);
}

startGame();
