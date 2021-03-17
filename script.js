let selectedColor = 'black';
let oldColor;
let board;

document.addEventListener('click', (e) => {
  const event = e;
  if (event.target.classList.contains('color')) {
    oldColor = document.getElementById(selectedColor);
    oldColor.classList.remove('selected');
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  } else if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }
});

document.getElementById('clear-board').onclick = () => {
  board = document.getElementsByClassName('pixel');
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
};

document.getElementById('generate-board').onclick = () => {
  const sizeInput = document.querySelector('#board-size');
  let pixelSize = sizeInput.value;
  if (pixelSize !== '') {
    if (pixelSize > 50) {
      pixelSize = 50;
      sizeInput.value = 50;
    } else if (pixelSize < 5) {
      pixelSize = 5;
      sizeInput.value = 5;
    }
    board = document.getElementsByClassName('pixel');
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.width = `${pixelSize}px`;
      board[i].style.height = `${pixelSize}px`;
      board[i].style.backgroundColor = 'white';
    }
  } else alert('Board inválido!');
};
