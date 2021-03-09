// let colorPalette = document.getElementById('color-palette');
// let colors = document.querySelectorAll('.color');

// let pixels = document.querySelectorAll('.pixel');
const line = document.querySelector('.line');
const pixelBoard = document.getElementById('pixel-board');

const boardSize = 5;
// Functions:

function createLinePixel() {
  for (let i = 0; i < boardSize; i += 1) {
    const createLine = document.createElement('div');
    createLine.className = 'line';
    pixelBoard.appendChild(createLine);
  }
}

function createPixels() {
  const array = pixelBoard.childNodes;
  for (let x = 0; x < array.length; x += 1) {
    for (let i = 0; i < array.length; i += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel td';
      array[x].appendChild(createPixel);
    }
  }
}

createLinePixel();
createPixels();
// function fillBoard() {
//   for (let i = 0; i < boardSize; i += 1) {
//   }
// }
// fillBoard();
