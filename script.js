let spanSecond = null;
spanSecond = document.getElementById('second-color');

let spanThird = null;
spanThird = document.getElementById('third-color');

let spanFouth = null;
spanFouth = document.getElementById('fourth-color');
const dataSetColor = 'data-color';
function changeSecondColor(element) {
  spanSecond.setAttribute(dataSetColor, element.target.value);
  spanSecond.style.backgroundColor = element.target.value;
}

function changeThirdColor(element) {
  spanThird.setAttribute(dataSetColor, element.target.value);
  spanThird.style.backgroundColor = element.target.value;
}

function changeFourthColor(element) {
  spanFouth.setAttribute(dataSetColor, element.target.value);
  spanFouth.style.backgroundColor = element.target.value;
}

let inpSecond = null;
inpSecond = document.getElementById('input-second');

let inpThird = null;
inpThird = document.getElementById('input-third');

let inpFourth = null;
inpFourth = document.getElementById('input-fourth');

inpSecond.addEventListener('change', changeSecondColor);
inpThird.addEventListener('change', changeThirdColor);
inpFourth.addEventListener('change', changeFourthColor);

function addColorInPixel() {
  let color = null;
  color = document.getElementsByClassName('selected')[0];
  this.style.backgroundColor = color.dataset.color;
}

/* Criando quadro de pixels dinamicamente: */

function generateBoard(number) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.width = `${(number * 43)}px`;
  pixelBoard.innerHTML = '';
  for (let index = 0; index < number * number; index += 1) {
    /* if (index % number === 0) {
      let breakRow = null;
      breakRow = document.createElement('br');
      pixelBoard.appendChild(breakRow);
    } */
    let pixel = null;
    pixel = document.createElement('span');
    pixel.setAttribute('id', index + 1);
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.addEventListener('click', addColorInPixel);
    pixelBoard.appendChild(pixel);
  }
}

window.onload = () => {
  generateBoard(5);
};
/* Fazendo com que um elemento da palheta de cores marque selected caso um deles for clicado */

function getPaletteItems() {
  return document.getElementsByClassName('color');
}
let paletterItems = [];
paletterItems = getPaletteItems();

function markAllWithNotSelected() {
  for (let index = 0; index < paletterItems.length; index += 1) {
    paletterItems[index].className = 'color';
  }
}

function markSelected(element) {
  markAllWithNotSelected();
  element.target.setAttribute('class', 'color selected');
}

for (let index = 0; index < paletterItems.length; index += 1) {
  paletterItems[index].addEventListener('click', markSelected);
}
console.log(getPaletteItems());

/* Criando botão para limpar todo o quadro de pixels: */

const buttonClearBoard = document.getElementById('clear-board');

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

buttonClearBoard.addEventListener('click', clearBoard);

/* Desafio 10: */
const buttonGenerateBoard = document.getElementById('generate-board');
function generateBoardByInput() {
  const inputBoardSize = document.getElementById('board-size');
  let number = parseInt(inputBoardSize.value, 10);
  if (inputBoardSize.value === '' || number <= 0) {
    alert('Board inválido!');
  } else if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  generateBoard(number);
}

buttonGenerateBoard.addEventListener('click', generateBoardByInput);
