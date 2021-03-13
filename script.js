window.onload = () => {
  localStorage.setItem('backgroundColor', 'black');
};

// Cria elementos:
function createElements(tag) {
  const element = document.createElement(tag);
  return element;
}

// Color Generator
function colorGenerator() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}
const cor1 = colorGenerator();
const cor2 = colorGenerator();
const cor3 = colorGenerator();
const cor4 = colorGenerator();

// Cria paletta:
function createColorPalette() {
  const palettes = document.getElementById('color-palette').childNodes;
  const colors = [cor1, cor2, cor3, cor4];

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

function refreshBtn() {
  const btn = createElements('button');
  btn.id = 'btn';
  btn.innerText = 'Reset';
  document.querySelector('#color-palette').appendChild(btn);
  btn.addEventListener('click', () => {
    document.getElementsByClassName('pixel').style.backgroundColor = 'white';
  });
}
refreshBtn();

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
    palettes[i].addEventListener('click', (e) => {
      selectedItem[0].classList.remove('selected');
      e.target.classList.add('selected');
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
