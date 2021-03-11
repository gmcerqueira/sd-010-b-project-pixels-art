// let input = 5;

let paletteColor = document.querySelectorAll(".color");
let firstPaletteColor = document.querySelector(".color");
    firstPaletteColor.style.backgroundColor = "black";
    firstPaletteColor.classList.add('selected');

let colors = document.querySelectorAll(".color");
let pixels = document.querySelectorAll('.pixel');

function colorSelection(){
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', seletionChange);
  }
}
colorSelection();

function seletionChange(picked) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) {
      colors[index].classList.remove('selected');
    }
  }
  picked.target.classList.add('selected');
};
  
function colorPainting() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorChange);
  }
};
colorPainting();

function colorChange(painting) {
  painting.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}

let clearButton = document.getElementById("clear-board").addEventListener("click", clearBoard);  
function clearBoard() {    
  let clear = document.querySelectorAll(".pixel");  
  for (let i = 0; i < clear.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = "white"
  }
}

// let inputText = document.getElementById('board-size').innerText;
// inputText.addEventListener(InputEvent,testInput)
// function testInput () {
//   if (inputText >= '5' && inputText <= 50) {
//     let boardButton = document.getElementById('generate-board');
//     boardButton.addEventListener('click',generateBoard(inputText));
//   } else {
//     alert('Board inválido!');
//   }
// }
// let rowFather = document.getElementById('pixel-board');
// function generateBoard(inputText) {
//   for (let i = 0; i < inputText; i += 1) {
//     let tableRow = document.createElement('tr');
//     tableRow.className = 'tableRow'
//     rowFather.appendChild(tableRow);
//   }
// }

function tableConstruction(inputText) {
  let rowFather = document.querySelectorAll('#pixel-board');
  for (let i = 0; i < inputText; i += 1) {
    let tableRow = rowFather.insertRow([i]);
    rowFather.appendChild(tableRow[i]);
    tableRow[i].className = 'tableRow';    
    let tableDataFathers = document.getElementsByClassName('tableRow');
    for (let j = 0; j < inputText; j += 1) {
      let tableCell = tableRow[i].insertCell([j]);      
      tableDataFathers.appendChild(tableCell);
      tableCell.className = 'pixel';
    }
  }
}
tableConstruction(5)

function randomColors() {
  for (let index = 1; index < paletteColor.length; index += 1) {
    paletteColor[index].style.backgroundColor = getRandomColor()
  }
}
randomColors();

// Esse código abaixo, de gerar cores aleatórias retirei do stackoverflow: https://stackoverflow.com/questions/1484506/random-color-generator //

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}