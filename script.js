// Functions:

function createElements(tag) {
  const element = document.createElement(tag);
  return element;
}

function createColorPalette() {
  for (let i = 0; i < 4; i += 1) {
    const element = createElements('div');
    element.className = 'color';
    document.querySelector('#color-palette').appendChild(element);
  }
}
createColorPalette();

// function createPixels() {
//   const array = pixelBoard.childNodes;
//   for (let x = 0; x < array.length; x += 1) {
//     for (let i = 0; i < array.length; i += 1) {
//       const createPixel = document.createElement('div');
//       createPixel.className = 'pixel td';
//       array[x].appendChild(createPixel);
//     }
//   }
// }
// createLinePixel();
// createPixels();

// // Events:
// function clickColorPicker() {
//   let getSelected = colorPalette[i].style.backgroundColor;
//   const colorPalette = document.querySelector('#color-palette').children;
//   const pixelBoard = document.getElementById('pixel-board')

//   for (let i = 0; i < colorPalette.length; i += 1) {
//     colorPalette[i].addEventListener('click', (event) => {
      
//     });
//   }
// }

window.onload = () => {
  const defaultColorPixels = document.querySelectorAll('.pixel');
  const pixelColorStorage = localStorage.setItem('backgroundColor', 'white');
  defaultColorPixels.style.backgroundColor = pixelColorStorage;

  const color1 = document.getElementById('color1');
  const colorStorage = localStorage.setItem('backgroundColor', 'black');
  color1.style.backgroundColor = colorStorage;

  const colorSelected = localStorage.setItem('class', 'selected');
  color1.className = colorSelected;
};
