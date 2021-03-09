// ---------------------------------------------------
// CREATE NEW BOARD

// Criação da div .row
const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  pixelBoard.appendChild(rowDiv);
}
// Criação da div .pixel
const rowDiv = document.getElementsByClassName('row');

for (let i = 0; i < rowDiv.length; i += 1) {
  for (let j = 0; j < rowDiv.length; j += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    rowDiv[i].appendChild(pixelDiv);
  }
}

let pixels = document.querySelectorAll('.pixel');

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

// ---------------------------------------------------
// CREATE NEW BOARD

// Criação da div .row
function createRows(n) {
  const newPixelBoard = document.getElementById('pixel-board');

  for (let i = 0; i < n; i += 1) {
    const newRowDiv = document.createElement('div');
    newRowDiv.className = 'row';
    newPixelBoard.appendChild(newRowDiv);
  }
}
// Criação da div .pixel
function createPixels() {
  const newRowDiv = document.getElementsByClassName('row');

  for (let i = 0; i < newRowDiv.length; i += 1) {
    for (let j = 0; j < newRowDiv.length; j += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      newRowDiv[i].appendChild(pixelDiv);
    }
  }
}

// Remoção do board anterior
function removeBoard() {
  document.getElementById('pixel-board').innerHTML = '';
}

// Criação do board
function createBoard(n) {
  removeBoard();
  createRows(n);
  createPixels();
  pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
}

// Ao clicar no botão, pegar o número no input e imprimir na função createBoard
let boardSize = document.getElementById('board-size').value;
const button = document.getElementById('generate-board');

function board() {
  boardSize = document.getElementById('board-size').value;
  createBoard(boardSize);
}

button.addEventListener('click', board);
