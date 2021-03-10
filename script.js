const colorPalette = document.getElementById('color-palette');
const boxBlack = colorPalette.children[0].children[0];
const box1 = colorPalette.children[0].children[1];
const box2 = colorPalette.children[0].children[2];
const box3 = colorPalette.children[0].children[3];
const main = document.querySelector('.main');

// código retirado do forum https://stackoverflow.com/questions/1484506/random-color-generator
// função que gera cores aleatórias para cada box da paleta de cor
function getRancomColor() {
  let color = '#';
  const letters = '0123456789ABCDEF';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Cor de cada quadro da paleta
boxBlack.style.backgroundColor = 'black';
box1.style.backgroundColor = getRancomColor();
box2.style.backgroundColor = getRancomColor();
box3.style.backgroundColor = getRancomColor();

// criando box central
const divPixelBoard = document.getElementById('pixel-board');

for (let i = 1; i <= 5; i += 1) {
  const divPixelLine = document.createElement('div');
  divPixelLine.className = 'tr';
  divPixelBoard.appendChild(divPixelLine);

  for (let i2 = 1; i2 <= 5; i2 += 1) {
    const divPixelCol = document.createElement('div');
    divPixelCol.className = 'pixel td';
    divPixelLine.appendChild(divPixelCol);
  }
}
