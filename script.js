let colors = ['black', 'red', 'green', 'blue', 'yellow'];
const rowsAndCols = 5;
let h1 = document.getElementById('title');
h1.insertAdjacentHTML('afterend', '<div id="color-palette"></div>');
fillLineColor();

function fillLineColor() {
  let colorPalette = document.getElementById('color-palette');
  for (let i = 0; i < colors.length; i += 1) {
    let color = document.createElement('div');
    color.className = (i !== 0 ? 'color' : 'color selected');
    colorPalette.appendChild(color);
  }
  pixelColor();
}

function pixelColor() {
  let bgColor = document.getElementsByClassName('color');
  for (let i = 0; i < bgColor.length; i += 1) {
    bgColor[i].style.backgroundColor = colors[i];
  }
}

function fillLinePixel(rowPixel) {
  for (let i = 0; i < rowsAndCols; i += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    rowPixel.appendChild(pixel);
  }
}

function lines() {
  let pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < rowsAndCols; i += 1) {
    let rowPixel = document.createElement('div');
    rowPixel.className = 'row-pixel';
    pixelBoard.appendChild(rowPixel);
    fillLinePixel(rowPixel);
  }
}
lines();
