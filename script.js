window.onload = function () {
  localStorage.setItem('backgroundColor', 'black');
};

// Cria elementos:
function createElements(tag) {
  const element = document.createElement(tag);
  return element;
}

// Color Generator
// const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// const r = randomBetween(0, 255);
// const g = randomBetween(0, 255);
// const b = randomBetween(0, 255);
// // const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string

// const cor1 = `rgb(${r},${g},${b})`;
// const cor2 = `rgb(${r},${g},${b})`;
// const cor3 = `rgb(${r},${g},${b})`;
// const cor4 = `rgb(${r},${g},${b})`;

// Cria paletta:
function createColorPalette() {
  const palettes = document.getElementById('color-palette').childNodes;
  const colors = ['black', 'purple', 'blue', 'red'];
  // console.log(colors);
  for (let i = 0; i < 4; i += 1) {
    const element = createElements('div');
    element.id = colors[i];
    element.className = 'color';
    document.querySelector('#color-palette').appendChild(element);
  }
  palettes.forEach((nodes, index) => {
    const elements = nodes;
    elements.style.backgroundColor = colors[index];
  });
  palettes[0].classList.add('selected');
}
createColorPalette();

// Cria board:
function createPixels() {
  for (let x = 0; x < 5; x += 1) {
    for (let i = 0; i < 5; i += 1) {
      const pixels = createElements('div');
      pixels.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(pixels);
    }
  }
}
createPixels();

// Events:

function colorPicker() {
  const selectedItem = document.getElementsByClassName('selected');
  const palettes = document.getElementsByClassName('color');

  for (let i = 0; i < palettes.length; i += 1) {
    palettes[i].addEventListener('click', () => {
      selectedItem[0].classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
colorPicker();

function setColor() {
  // const paletteSelected = document.getElementsByClassName('color selected');
  const pixelsEmBranco = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixelsEmBranco.length; i += 1) {
    pixelsEmBranco[i].addEventListener('click', () => {
      const selecionada = document.getElementsByClassName('selected')[0].style.backgroundColor;
      pixelsEmBranco[i].style.backgroundColor = selecionada;
    });
  }
}
setColor();
