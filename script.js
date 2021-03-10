// colors to set on color-palette section
let colorsList = [
  'rgb(0, 0, 0)',
  'rgb(214, 40, 40)',
  'rgb(247, 127, 0)',
  'rgb(0, 48, 73)'
];
let colorItems = document.querySelectorAll('.color'); // color palette
let pixelBoard = document.querySelector('#pixel-board'); // this gets the whole board
let colorPalette = document.querySelector('#color-palette'); // get the color-palette section

// set colors, from colorsList, to color palette
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
  row[rowNumber].appendChild(pixel);
}

// creates a row of pixels
function createRow(rowNumber) {
  let row = document.createElement('tr');
  pixelBoard.appendChild(row);
  for (let i = 0; i < 5; i++) {
    createPixel(rowNumber);
  }
}

// creates the pixel board
function createBoard() {
  for (let i = 0; i < 5; i++) {
    createRow(i);
  }
}

// sets black as the selected color
// I took this code block from Gustavo Cerqueira's project at https://github.com/tryber/sd-010-b-project-pixels-art/blob/gmcerqueira-project-pixels-art/script.js
function setSelectedColor() {
  colorPalette.firstElementChild.classList.add('selected');
}

window.onload = () => {
  buttonColor();
  createBoard();
  setSelectedColor();
}
