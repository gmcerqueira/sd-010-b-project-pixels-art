function createPaletteColors() {
  const createBoxColor = document.createElement('div');
  createBoxColor.className = 'color';
  const color2 = parseInt(Math.random() * 255, 0);
  const color3 = parseInt(Math.random() * 255, 0);
  const color4 = parseInt(Math.random() * 255, 0);
  const colors = ['black', `rgba(${color2}, ${color3}, ${color4})`,
    `rgba(${color2}, ${color4}, ${color3})`,
    `rgba(${color4}, ${color2}, ${color3})`];
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
  let inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
  } else if (inputValue > 50) {
    inputValue = 50;
  } else if (inputValue < 5) {
    inputValue = 5;
  }
  if ((inputValue >= 1 && inputValue <= 50)) {
    pixelBoard.innerText = '';
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
  clear();
});
