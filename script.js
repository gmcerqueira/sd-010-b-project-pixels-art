window.onload = function () {
  localStorage.setItem('backgroundColor', 'black');
};
// Functions:
// Cria elementos:
function createElements(tag) {
  const element = document.createElement(tag);
  return element;
}

// Cria paletta:
function createColorPalette() {
  const palettes = document.getElementById('color-palette').childNodes;
  const colors = ['black', 'blue', 'red', 'cyan'];

  for (let i = 0; i < 4; i += 1) {
    const element = createElements('div');
    // element.id.add(colors[i]);
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

// Fabricio:

// for (let i = 0; i < ref.length; i++) {
//   referencias[i].addEventListener('click', (e) => {
//       selecionada.style.backgroundColor = e.target.style.backgroundColor
//   });
// }

// window.onload = () => {
//   const defaultColorPixels = document.querySelectorAll('.pixel');
//   const pixelColorStorage = localStorage.setItem('backgroundColor', 'white');
//   defaultColorPixels.style.backgroundColor = pixelColorStorage;

//   const color1 = document.getElementById('color1');
//   const colorStorage = localStorage.setItem('backgroundColor', 'black');
//   color1.style.backgroundColor = colorStorage;

//   const colorSelected = localStorage.setItem('class', 'selected');
//   color1.className = colorSelected;
// };
