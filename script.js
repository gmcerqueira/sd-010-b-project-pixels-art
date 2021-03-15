const colors = document.querySelectorAll('.color');
const generateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');
const clearButton = document.getElementById('clear-board');
const pixelClass = document.querySelectorAll('.pixel');

function randomColors() {
  for (let index = 1; index < colors.length; index += 1) {
    const random = `rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254})`;
    colors[index].style.background = random;
  }
  colors[0].style.background = 'black';
}

function createPixels() {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  return pixel;
}

for (let index = 0; index < 25; index += 1) {
  pixelBoard.appendChild(createPixels());
}

let pixelsClass = document.querySelectorAll('.pixel');

function newElement(element) {
  colors.forEach((el) => el.classList.remove('selected'));
  element.classList.toggle('selected');
}

function newPixel(pixel) {
  const pixelAux = pixel;
  pixelAux.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function clearBoard() {
  pixelsClass.forEach((px) => px.setAttribute('style', 'background-color: white;'));
}

function createNewBoard(width) {
  pixelBoard.style.gridTemplateColumns = `repeat(${width}, 40px)`;
  pixelBoard.style.gridTemplateRows = `repeat(${width}, 40px)`;

  for (let index = 0; index < width ** 2; index += 1) {
    pixelBoard.appendChild(createPixels());
  }
  pixelsClass = document.querySelectorAll('.pixel');
  pixelsClass.forEach((px) => px.addEventListener('click', (e) => newPixel(e.target)));
}

function generateNewBoard() {
  let sizeValue = boardSize.valueAsNumber || 5;
  if (sizeValue < 5) sizeValue = 5;
  if (sizeValue > 50) sizeValue = 50;

  if (boardSize.value === '') {
    window.alert('Board inválido!');
  } else {
    pixelsClass.forEach((px) => px.remove());
    createNewBoard(sizeValue);
  }
}

window.onload = function init() {
  randomColors();
  colors.forEach((elementAux) => elementAux.addEventListener('click', (e) => newElement(e.target)));
  pixelsClass.forEach((px) => px.addEventListener('click', (e) => newPixel(e.target)));
  generateBoard.addEventListener('click', generateNewBoard);
  clearButton.addEventListener('click', clearBoard);
}