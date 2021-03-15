const colorPalette = document.getElementById('color-palette');
const black = colorPalette.children[0].children[0];
const cor1 = colorPalette.children[0].children[1];
const cor2 = colorPalette.children[0].children[2];
const cor3 = colorPalette.children[0].children[3];

// código retirado do forum https://stackoverflow.com/questions/1484506/random-color-generator

function getRancomColor() {
  let color = '#';
  const letters = '0123456789ABCDEF';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

black.style.backgroundColor = 'black';
cor1.style.backgroundColor = getRancomColor();
cor2.style.backgroundColor = getRancomColor();
cor3.style.backgroundColor = getRancomColor();

const divPixelBoard = document.getElementById('pixel-board');
let divPixelLine;
let divPixelCol;

function pixelMatriz(nl) {
  for (let i = 1; i <= nl; i += 1) {
    divPixelLine = document.createElement('div');
    divPixelLine.className = 'tab';
    divPixelBoard.appendChild(divPixelLine);

    for (let i2 = 1; i2 <= nl; i2 += 1) {
      divPixelCol = document.createElement('div');
      divPixelCol.className = 'pixel un';
      divPixelLine.appendChild(divPixelCol);
    }
  }
}
pixelMatriz(5);
