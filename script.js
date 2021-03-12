const inputText = 5;
// let inputButton = document.getElementById('generate-board');
// let inputText = document.getElementById('board-size');
// function testInput () {
//     if (parseInt(inputText.innerText, 10) >= 5 && parseInt(inputText.innerText, 10) <= 50) {
//     console.log("teste");
//     // let boardButton = document.getElementById('generate-board');
//     boardButton.addEventListener('click',generateBoard(inputText));
//   } else {
//     alert('Board inválido!');
//   }
// }
// inputButton.addEventListener('click', testInput);

const rowFather = document.querySelector('#pixel-board');
function tableConstruction() {
  for (let i = 0; i < inputText; i += 1) {
    const tableRow = document.createElement('tr');
    // let tableDataFathers = document.getElementsByClassName('tableRow');
    for (let j = 0; j < inputText; j += 1) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
      tableCell.className = 'pixel';
    }
    tableRow.className = 'tableRow';
    rowFather.appendChild(tableRow);
  }
}
tableConstruction();

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
