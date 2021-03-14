// colorItems to set on color-palette section
let colorsList = [
  'rgb(0, 0, 0)',
  'rgb(214, 40, 40)',
  'rgb(247, 127, 0)',
  'rgb(0, 48, 73)'
];
let colorItems = document.querySelectorAll('.color'); // color palette
let pixelBoard = document.querySelector('#pixel-board'); // this gets the whole board
let colorPalette = document.querySelector('#color-palette'); // get the color-palette section
const clearButton = document.querySelector('#clear-board'); // gets Limpar button
const vqvButton = document.querySelector('#generate-board');

// set colorItems, from colorsList, to color palette
function buttonColor() {
  for (let i = 0; i < colorItems.length; i++) {
    colorItems[i].style.backgroundColor = colorsList[i];
  }
}

// creates a single pixel
function createPixel(rowNumber) {
  let pixel = document.createElement('td');
  let row = document.querySelectorAll(`#pixel-board>tr`);
  pixel.className = 'pixel';
  pixel.addEventListener('click', paintPixel); // I  this solution at Gustavo Cerqueira's Project: @gmcerqueira
  row[rowNumber].appendChild(pixel);
}

// creates a row of pixels
function createRow(rowNumber, colNumber) {
  let row = document.createElement('tr');
  pixelBoard.appendChild(row);
  for (let i = 0; i < colNumber; i++) {
    createPixel(rowNumber);
  }
}

function createBoard(boardSize) {
  pixelBoard.innerHTML = '';
  for (let i = 0; i < boardSize; i++) {
    createRow(i, boardSize);
  }
}

// creates the pixel board
function setBoardSize() {
  vqvButton.addEventListener('click', function () {
    const boardSize = document.querySelector('#board-size').value;
    if (boardSize === '') {
      alert('Board inválido!');
    } else if (boardSize < 5) {
      createBoard(5);
      alert('Valor mínimo do board: 5');
    } else if (boardSize > 50) {
      createBoard(50);
      alert('Valor máximo do board: 50');
    } else {
      createBoard(boardSize);
    }
  });
}

// sets black as the selected color
// I took this code block from Gustavo Cerqueira's project at https://github.com/tryber/sd-010-b-project-pixels-art/blob/gmcerqueira-project-pixels-art/script.js
function setDefaultColor() {
  colorPalette.firstElementChild.classList.add('selected');
}

// selects the color to paint pixels
function changeColorPencil() {
  for (let i = 0; i < colorItems.length; i++) {
    colorItems[i].addEventListener('click', function () {
      for (let i = 0; i < colorItems.length; i++) {
        colorItems[i].classList.remove('selected');
      }
      let clicked = event.target;
      clicked.classList.add('selected');
    });
  }
}

// Paints the single pixel selected
// I found this logic on Gustavo Cerqueira's project: @gmcerqueira
function paintPixel() {
  let pencil = document.querySelector('.selected').style.backgroundColor; // gets background color style from selected color
  this.style.backgroundColor = pencil;
}

// clears all painted pixels
function clearBoard() {
  clearButton.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel'); //gets all pixels
    console.log(pixels);
    for (let i = 0; i < pixels.length; i++) {
      // pixels[i].style.backgroundColor = 'white';
      pixels[i].style = '';
    }
  });
}



window.onload = function () {
  buttonColor();
  setBoardSize();
  setDefaultColor();
  changeColorPencil();
  paintPixel;
  clearBoard();
}
