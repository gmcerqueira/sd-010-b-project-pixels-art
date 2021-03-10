let selectedColor = 'black';
let oldColor;

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    oldColor = document.getElementById(selectedColor);
    oldColor.classList.remove('selected');
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  } else if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }
});

document.getElementById('clear-board').onclick = function () {
  let board = document.getElementsByClassName('pixel');
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}
