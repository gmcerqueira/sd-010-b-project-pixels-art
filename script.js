const colorPallete = document.querySelector('#color-palette');
const colors = ['black', 'red', 'blue', 'green'];
const pixelBoard = document.querySelector('#pixel-board');
const clearBoardButton = document.querySelector('#clear-board');

// Criando e adicionando cores a paleta
function createColorPalette(colorList) {
  for (let i = 0; i < colorList.length; i += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.style.backgroundColor = colorList[i];
    colorPallete.appendChild(colorPixel);
  }
}

// Desenhando no quadro
function drawPixel() {
  const colorSelected = document.querySelector('.selected').style
    .backgroundColor;
  this.style.backgroundColor = colorSelected;
}

// Criando quadro
function createRow(size) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', drawPixel);
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
  children.forEach((child) => {
    child.addEventListener('click', (event) => {
      for (let i = 0; i < children.length; i += 1) {
        children[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  });
}

// Limpando o quadro
function clearBoard() {
  clearBoardButton.addEventListener('click', () => {
    const board = document.querySelectorAll('.pixel');
    console.log(board);
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  });
}

createColorPalette(colors);
defaultColor();
createBoard(5);
selectColor();
clearBoard();
