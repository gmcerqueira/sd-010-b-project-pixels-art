

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

// let inputButton = document.getElementById('generate-board');
// inputButton.addEventListener('click',testInput)

// function testInput () {  
//   let inputText = parseInt(document.getElementById('board-size').innerText,10);
//   if (inputText >= 5 && inputText <= 50) {
//     console.log("teste");
//     // let boardButton = document.getElementById('generate-board');
//     // boardButton.addEventListener('click',generateBoard(inputText));
//   } else {
//     alert('Board inválido!');
//   }
// }

// function generateBoard(){
//   console.log("teste");
// }
// let rowFather = document.getElementById('pixel-board');
// function tableRows(inputText) {
//   for (let i = 0; i < inputText; i += 1) {
//     let tableRow = document.createElement('tr');
//     rowFather.appendChild(tableRow);
//     tableRow.className = 'tableRow';    
//     return tableRow;
//   }
//   tableCell(inputText)
// }
// tableRows(5);

// let tableCellsFathers = document.getElementsByClassName('tableRow');
// function tableCell(inputText) {
//   for (let i = 0; i < inputText; i += 1){
//     let tableCells = document.createElement('td');
//     tableCells.className = 'pixel';
//     tableCellsFathers.appendChild(tableCells);
//   }
// }
// let rowFather = document.querySelectorAll('#pixel-board');
// function tableConstruction(rowFather,inputText) {  
//   for (let i = 0; i < inputText; i += 1) {
//     let tableRow = rowFather.insertRow([i]);    
//     tableRow.className = 'tableRow';    
//     let tableDataFathers = document.getElementsByClassName('tableRow');
//     for (let j = 0; j < inputText; j += 1) {
//       let tableCell = tableRow[i].insertCell([j]);      
//       tableDataFathers.appendChild(tableCell);
//       tableCell.className = 'pixel';
//     }
//     rowFather.appendChild(tableRow[i])
//   }
// }
// tableConstruction(rowFather,5)

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