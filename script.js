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

function colorPicker (e) {
  const ref = document.querySelectorAll('.color');
  const seletedItem = document.getElementsByClassName('selected');
  const pixelBoard = document.getElementById('pixel-board').children;
  const element = e;
  for (let i = 0; i < ref.length; i += 1) {
    ref[i].addEventListener('click', (e) => {
      if (element.selected !== seletedItem[i]) {
        e.target.className.add('selected');
      } else {
        e.target.className.remove('selected');
      }
    });
  }
  // for (let i = 0; i < ref.length; i += 1) {
  //   pixelBoard[i].addEventListener('click', (e) => {
  //     e.target.style.backgroundColor = selceted.style.backgroundColor;
  //   });
  // }
}
colorPicker();

// for (let i = 0; i < ref.length; i++) {
//   referencias[i].addEventListener('click', (e) => {
//       selecionada.style.backgroundColor = e.target.style.backgroundColor
//   });
// }

// for (let i = 0; i < pixels_em_branco.length; i++) {
//   pixels_em_branco[i].addEventListener('click', (e) => {
//       e.target.style.backgroundColor = selecionada.style.backgroundColor
//   })
// }
//   for (let i = 0; i < colorPalette.length; i += 1) {
//     colorPalette[i].addEventListener('click', (event) => {

//     });
//   }

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
