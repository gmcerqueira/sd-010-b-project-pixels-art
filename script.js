let paletaBlack = window.document.getElementsByClassName('color')[0];
paletaBlack.style.background = 'black';
paletaBlack.className += " selected";
let paletaRed = window.document.getElementsByClassName('color')[1];
paletaRed.style.background = 'red';
let paletaBlue = window.document.getElementsByClassName('color')[2];
paletaBlue.style.background = 'blue';
let paletaGreen = window.document.getElementsByClassName('color')[3];
paletaGreen.style.background = 'green';
let selectedColor = 'black';
let boardSize = "";
let boardSizeInt = 5;
let pixelBoard = window.document.getElementById('pixel-board');
createAllPixels(boardSizeInt);


let boardSizeLength = window.document.getElementById('board-size');
let button = window.document.getElementById('generate-board');
button.addEventListener('click', converter)

function converter() {
  boardSize = boardSizeLength.value;
  let boardSizeInt = parseInt(boardSize)
  createAllPixels(boardSizeInt);
  }



let allPalettes = window.document.querySelectorAll('.color');
let colorPalette = window.document.getElementById('color-palette');
colorPalette.addEventListener('click', function (event) {
  for (i = 0; i < allPalettes.length; i += 1) {
    allPalettes[i].classList.remove('selected')
  }
  event.target.className += ' selected'
  selectedColor = event.target.style.background;
})


function createAllPixels(size) {
  for (lines = 0; lines < size; lines += 1) {
    let tableRow = window.document.createElement('tr');
    pixelBoard.appendChild(tableRow)
    for (columns = 0; columns < size; columns += 1) {
      let tableCell = window.document.createElement('th')
      tableCell.style.background = "white";
      tableCell.style.width = "40px";
      tableCell.style.height = "40px";
      tableCell.className = "pixel"
      tableCell.style.border = "solid black 1px"
      tableRow.appendChild(tableCell)
    }
  }
}

pixelBoard.addEventListener('click', function (event) {
  event.target.style.background = selectedColor;
})


function clearColors() {
  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    let getThs = window.document.querySelectorAll('.pixel');
    for (let i = 0; i < getThs.length; i += 1) {
      getThs[i].style.background = 'white';
    }
  })
}
clearColors();
