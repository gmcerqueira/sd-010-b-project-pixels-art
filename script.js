// const inputButton = document.getElementById('generate-board');
// const inputText = document.getElementById('board-size');
// const inputText = 5;
// let n = 5;

// function testInput() {  
//   if (inputText.value <= 5 && inputText.value !== "") {
//     n = 5;
//     // boardButton.addEventListener('click', tableConstruction(5));
//   }
//   if (inputText.value > 5 && inputText.value < 50) {
//     n = 50;
//     // boardButton.addEventListener('click', tableConstruction(inputText.value));
//   }
//   if (inputText.value >= 50) {
//     n = inputText.value;
//     // boardButton.addEventListener('click', tableConstruction(50));
//   }
//   if (inputText.value === "") {
//     alert('Board inválido!');
//   }
//   return n
// }
// inputButton.addEventListener('click', testInput);
// inputButton.addEventListener('click',tableConstruction);

const rowFather = document.querySelector('#pixel-board');
function tableConstruction(n) {
  for (let i = 0; i < n; i += 1) {
    const tableRow = document.createElement('tr');
    for (let j = 0; j < n; j += 1) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
      tableCell.className = 'pixel';
    }
    tableRow.className = 'tableRow';
    rowFather.appendChild(tableRow);
  }
}
tableConstruction(5);

const paletteColor = document.querySelectorAll('.color');
const firstPaletteColor = document.querySelector('.color');
firstPaletteColor.style.backgroundColor = 'black';
firstPaletteColor.classList.add('selected');

const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

function seletionChange(picked) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) {
      colors[index].classList.remove('selected');
    }
  }
  picked.target.classList.add('selected');
}

function colorSelection() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', seletionChange);
  }
}
colorSelection();

function colorChange(x) {
  const pix = x.target;
  pix.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}

function colorPainting() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorChange);
  }
}
colorPainting();

function clearBoard() {
  const clear = document.querySelectorAll('.pixel');
  for (let i = 0; i < clear.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', clearBoard);

// Esse código abaixo, de gerar cores aleatórias retirei do stackoverflow: https://stackoverflow.com/questions/1484506/random-color-generator //

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomColors() {
  for (let index = 1; index < paletteColor.length; index += 1) {
    paletteColor[index].style.backgroundColor = getRandomColor();
  }
}
randomColors();
