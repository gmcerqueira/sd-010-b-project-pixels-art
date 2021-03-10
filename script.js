
const colorPallete = document.getElementById('color-palette');
let divPallete = document.createElement('div');

for (let divs = 0; divs < 4; divs += 1) {
  divPallete = document.createElement('div');
  divPallete.className = 'color';
  colorPallete.appendChild(divPallete);
}

// Requesito 6

// https://www.geeksforgeeks.org/how-to-add-a-class-to-dom-element-in-javascript/ --> referência
const blackSelected = document.querySelector('.color');
blackSelected.classList.add('selected');

const boardSquares = [];
for (let i = 0; i < 5; i += 1) {
  boardSquares[i] = i;
}

// Requesito 4

const bigSquare = document.getElementById('pixel-board');
let createLines = document.createElement('tr');
let createCol = document.createElement('td');

for (let j = 0; j < boardSquares.length; j += 1) {
  createLines = document.createElement('tr');
  createLines.className = 'table-lines';
  bigSquare.appendChild(createLines);
  for (let k = 0; k < boardSquares.length; k += 1) {
    let lineSquare = document.querySelectorAll('.table-lines');
    lineSquare = document.querySelectorAll('.table-lines');
    createCol = document.createElement('td');
    createCol.className = 'pixel';
    lineSquare[j].appendChild(createCol);
  }
}

// Requesito 9

const buttonClear = document.querySelector('#clear-board');
const whiteSquare = document.querySelectorAll('.pixel');

function clearBorder () {
  for (let w = 0; w < whiteSquare.length; w += 1) {
    whiteSquare[w].style.backgroundColor = 'white';
  }
};

buttonClear.addEventListener('click', clearBorder);