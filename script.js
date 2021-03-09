const colorPallete = document.querySelector('#color-palette');
const colorsPalette = ['black', 'red', 'blue', 'green'];
const pixelBoard = document.querySelector('#pixel-board');

// Criando e adicionando cores a paleta
function createColorPalette(colors) {
  for (let i = 0; i < colors.length; i += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.style.backgroundColor = colors[i];
    colorPallete.appendChild(colorPixel);
  }
}

// Criando quadro
function createRow(size) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    row.appendChild(pixel);
  }
  return row;
}

function createBoard(size) {
  for (let i = 0; i < size; i += 1) {
    pixelBoard.appendChild(createRow(size));
  }
}

createColorPalette(colorsPalette);
createBoard(5);
