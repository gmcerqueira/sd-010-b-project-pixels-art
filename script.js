window.onload = function init() {
  localStorage.setItem('backgroundColor', 'black');
};
// Functions:

function createElements(tag) {
  const element = document.createElement(tag);
  return element;
}

function createColorPalette() {
  const palettes = document.getElementById('color-palette').childNodes;
  const colors = ['black', 'blue', 'red', 'cyan'];

  for (let i = 0; i < 4; i += 1) {
    const element = createElements('div');
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

// // Events:

// function colorPicker () {
//   const ref = document.querySelectorAll('.color');

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   }
// }
// for (let i = 0; i < referencias.length; i++) {
//   referencias[i].addEventListener('click', (e) => {
//       selecionada.style.backgroundColor = e.target.style.backgroundColor
//   })
// }

// for (let i = 0; i < pixels_em_branco.length; i++) {
//   pixels_em_branco[i].addEventListener('click', (e) => {
//       e.target.style.backgroundColor = selecionada.style.backgroundColor
//   })
// }

// function clickColorPicker() {
//   let getSelected = colorPalette[i].style.backgroundColor;
//   const colorPalette = document.querySelector('#color-palette').children;
//   const pixelBoard = document.getElementById('pixel-board')

//   for (let i = 0; i < colorPalette.length; i += 1) {
//     colorPalette[i].addEventListener('click', (event) => {

//     });
//   }
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
