function createPaletteColors() {
  const createBoxColor = document.createElement('div');
  createBoxColor.className = 'color';
  const colors = ['black', 'blue', 'green', 'red'];
  const boxColor = document.getElementsByClassName('color');

  for (let index = 0; index < boxColor.length; index += 1) {
    boxColor[index].style.backgroundColor = colors[index];
  }
}
createPaletteColors();

window.onload = function initializeColorBlack() {
  const boxColorBlack = document.querySelectorAll('.color')[0];
  boxColorBlack.className = 'color selected';
  const boxColorBlackStyle = boxColorBlack.style.backgroundColor;
  localStorage.setItem('color', boxColorBlackStyle);
};

function selectedPalette() {
  const color = document.querySelector('#color-palette');
  color.addEventListener('click', (event) => {
    const element = event;
    document.querySelector('.selected').className = 'color';
    element.target.className = 'color selected';
  });
}
selectedPalette();

function draw() {
  const table = document.querySelector('#pixel-board');
  table.addEventListener('click', (event) => {
    const element = event;
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    element.target.style.backgroundColor = colorSelected;
  });
}
draw();

function clear() {
  const button = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
clear();

const generateButton = document.getElementById('generate-board');
const pixelBoard = document.getElementById('table-body');

generateButton.addEventListener('click', () => {
  const inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
  } else {
    clear();
    pixelBoard.innerText = '';
    if (inputValue >= 1 && inputValue <= 50) {
      for (let index = 1; index <= inputValue; index += 1) {
        const createTr = document.createElement('tr');
        createTr.className = 'line';
        pixelBoard.appendChild(createTr);
        for (let index2 = 1; index2 <= inputValue; index2 += 1) {
          const createTd = document.createElement('td');
          createTd.className = 'pixel';
          createTr.appendChild(createTd);
        }
      }
    }
  }
});
