const colorPalette = document.querySelectorAll('#color-palette li');

// Gerar corer aleatórias
function generateRandomColor() {
  const hexadecimais = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';

  // Pega um número aleatório no array acima
  for (let i = 0; i < 6; i += 1) {
    // E concatena à variável cor
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

generateRandomColor();

// Atribuir as cores aleatórias á paleta
// eslint-disable-next-line sonarjs/no-duplicate-string
const corValor1 = window.getComputedStyle(colorPalette[1]).getPropertyValue('background-color');
const corValor2 = window.getComputedStyle(colorPalette[2]).getPropertyValue('background-color');
const corValor3 = window.getComputedStyle(colorPalette[3]).getPropertyValue('background-color');

const trocaCor1 = corValor1.replace(corValor1, generateRandomColor());
const trocaCor2 = corValor2.replace(corValor2, generateRandomColor());
const trocaCor3 = corValor3.replace(corValor3, generateRandomColor());
colorPalette[1].style.backgroundColor = trocaCor1;
colorPalette[2].style.backgroundColor = trocaCor2;
colorPalette[3].style.backgroundColor = trocaCor3;

// Definir o elemento que terá a classe select
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[0].addEventListener('click', () => {
    colorPalette[0].classList.add('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
  });
  colorPalette[1].addEventListener('click', () => {
    colorPalette[1].classList.add('selected');
    colorPalette[0].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
  });
  colorPalette[2].addEventListener('click', () => {
    colorPalette[2].classList.add('selected');
    colorPalette[0].classList.remove('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
  });
  colorPalette[3].addEventListener('click', () => {
    colorPalette[3].classList.add('selected');
    colorPalette[0].classList.remove('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
  });
}

// eslint-disable-next-line sonarjs/cognitive-complexity
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line sonarjs/cognitive-complexity
function selectedPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const color = document.querySelector('.selected');
      if (color.matches('.selected')) {
        if (pixels[i].style.backgroundColor === `${color.style.backgroundColor}`) {
          // eslint-disable-next-line max-len
          pixels[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
        } else {
          // eslint-disable-next-line max-len
          pixels[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
        }
      } else {
        pixels[i].style.backgroundColor = 'white';
        // eslint-disable-next-line max-len
      }
    });
  }
}

selectedPixel();

function clearPixels() {
  const clearButton = document.getElementById('clear-board');
  const getPixel = document.querySelectorAll('.pixel');

  clearButton.addEventListener('click', () => {
    for (let i = 0; i < getPixel.length; i += 1) {
      getPixel[i].style.backgroundColor = 'white';
    }
  });
}

clearPixels();

function userSetSize() {
  const inputValue = document.getElementById('board-size').value;
  const buttonValue = document.getElementById('generate-board');

  const tbody = document.querySelector('tbody');
  const createTr = document.createElement('tr');
  const createTd = document.createElement('td');

  createTd.className = 'pixel';

  buttonValue.addEventListener('click', (event) => {
    for (let i = 0; i <= inputValue; i += 1) {
      tbody.appendChild(createTr);
      createTr.appendChild(createTd);
    }
    event.preventDefault();
  });
}

userSetSize();
