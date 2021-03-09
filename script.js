const btnColor = document.querySelectorAll('.color');
const btnClear = document.querySelector('#clear-board');
const inputBoardSize = document.querySelector('#board-size');
const btnBoardSIze = document.querySelector('#generate-board');

const setColor = () => {
  for (let btn of btnColor) {
    const [firstColor, secondColor, thirdColor] = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];

    btnColor[0].style.backgroundColor = 'black';

    btn.style.backgroundColor = 'rgb(' + firstColor + ', ' + secondColor + ', ' + thirdColor + ')';

    btn.addEventListener('click', (e) => {
      for (btn of btnColor) {
        btn.classList.remove('selected');
      }
      e.target.classList.add('selected');
    });
  }
};

setColor();

const paintPixel = (pixel) => {
  for (const btn of btnColor) {
    if (btn.className === 'color selected') {
      pixel.style.backgroundColor = btn.style.backgroundColor;
    }
  }
};

const checkEmptyValue = (value) => {
  value === '' ? alert('Board inválido!') : null;
};

const createRow = (value, board) => {
  for (let i = 0; i < value; i += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    board.appendChild(newRow);

    for (let j = 0; j < value; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      newRow.appendChild(pixel);
      pixel.addEventListener('click', () => {
        paintPixel(pixel);
      });
    }
  }
};

const setSize = (value) => {
  checkEmptyValue(value);

  value > 50 ? (value = 50) : null;
  value < 5 ? (value = 5) : null;

  const board = document.getElementById('pixel-board');
  board.innerText = '';

  createRow(value, board);
};

btnBoardSIze.addEventListener('click', () => {
  setSize(inputBoardSize.value);
});
// Clears the board ==================================== //

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = '';
  }
};

btnClear.addEventListener('click', clearBoard);

// clearBoard();

window.onload = () => {
  setSize(5);
};
