// ---------------------------------------------------
// CREATE BOARD
// Criação da div .row

function createRows(n) {
  const pixelBoard = document.getElementById('pixel-board');

  for (let i = 0; i < n; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    pixelBoard.appendChild(rowDiv);
  }
}
// Criação da div .pixel
function createPixels() {
  const rowDiv = document.getElementsByClassName('row');

  for (let i = 0; i < rowDiv.length; i += 1) {
    for (let j = 0; j < rowDiv.length; j += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      rowDiv[i].appendChild(pixelDiv);
    }
  }
}

function createBoard(n) {
  createRows(n);
  createPixels();
}

createBoard(8);

// ---------------------------------------------------
// Mudança da Classe .selected

const selectedColor = document.getElementsByClassName('selected');
const black = document.querySelector('.black');
const second = document.querySelector('.second-color');
const third = document.querySelector('.third-color');
const fourth = document.querySelector('.fourth-color');

function classChange() {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  this.classList.add('selected');
  console.log(selectedColor[0].classList[1]);
}

black.addEventListener('click', classChange);
second.addEventListener('click', classChange);
third.addEventListener('click', classChange);
fourth.addEventListener('click', classChange);

// ---------------------------------------------------
// Utilizando a classe .selected para pintar os pixels
// Referência: https://zellwk.com/blog/css-values-in-js/

const pixels = document.querySelectorAll('.pixel');

function paintPixel() {
  const style = getComputedStyle(selectedColor[0]);
  const color = style.backgroundColor;
  this.style.backgroundColor = color;
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', paintPixel);
}

// ---------------------------------------------------
// Botão para limpar o board

const btn = document.querySelector('#clear-board');

console.log(btn);

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', clearBoard);
