document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll('.square');
  let restartButton = document.getElementById('restart');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })

  restartButton.addEventListener('click', restart);
});

function handleClick(event) {
  
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    
    setTimeout (() => {
      alert('O jogo acabou - O vencedor foi o jogador ' + symbols[playerTime]);
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function restart() {
  console.log('reiniciando');
  
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;

  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.innerHTML = '';
  })
}