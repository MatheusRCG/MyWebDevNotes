let techs = [ 
  'bootstrap',
  'css',
  'electron',
  'firebase',
  'html',
  'javascript',
  'jquery',
  'mongo',
  'node',
  'react',
]

function startGame() {
  cards = createCards(techs)
  shuffleCards(cards)
  console.log(cards)
}

function createCards(techs) {
  let cards = []

  for (let tech of techs) {
    cards.push(createPair(tech))
  }

  return (cards.flat())
}

function createPair(tech) {
  return [
    {
      id: createID(tech),
      icon: tech,
      flipped: false
    },
    {
      id: createID(tech),
      icon: tech,
      flipped: false
    }
  ]
}

function createID(tech) {
  return tech + parseInt(Math.random() * 1000)
}

function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); 
    currentIndex--;
    [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
  }
}

startGame()