// let colors = document.querySelectorAll('.color');

// let pixels = document.querySelectorAll('.pixel');
// const line = document.querySelector('.line');
const pixelBoard = document.getElementById('pixel-board');

const boardSize = 5;

window.onload = function () {
  const color1 = document.getElementById('color1');
  const colorStorage = localStorage.setItem('backgroundColor', 'black');
  color1.style.backgroundColor = colorStorage;
};
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



// Events:
let colorPalette = document.querySelector('#color-palette').children;
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', function() {
    
  });
}
