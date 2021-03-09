const colorPallete = document.querySelector('#color-palette');
const colors = ['black', 'red', 'blue', 'green'];
const pixelBoard = document.querySelector('#pixel-board');

// Criando e adicionando cores a paleta
function createColorPalette(colorList) {
  for (let i = 0; i < colorList.length; i += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.style.backgroundColor = colorList[i];
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

// Definindo cor preta como inicial
function defaultColor() {
  colorPallete.firstElementChild.classList.add('selected');
}

// Selecionando uma cor quando clicar em cima dela na paleta de cores
function selectColor() {
  const children = colorPallete.childNodes;
  colorPallete.addEventListener('click', (event) => {
    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

createColorPalette(colors);
defaultColor();
createBoard(5);
selectColor();
