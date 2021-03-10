const paletteBox = document.getElementById('color-palette');
const array = [1, 2, 3, 4];

function createDivs() {
  for (let index = 0; index < array.length; index += 1) {
    const createColors = document.createElement('div');
    createColors.className = 'color';
    paletteBox.appendChild(createColors);
  }
  return paletteBox;
}

createDivs();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'orange';
document.getElementsByClassName('color')[0].className += ' selected';

const pixelBox = document.getElementById('pixel-board');

function boardPixel() {
  for (let index = 0; index < 25; index += 1) {
    const creatPixels = document.createElement('div');
    creatPixels.className = 'pixel';
    pixelBox.appendChild(creatPixels);
  }
  return pixelBox;
}

boardPixel();

function getPalette(event) {
  let palette = event.target;
  if (!palette.id) {
    let pixelColor = document.querySelectorAll('.color');
    pixelColor.forEach((element) => element.classList.remove('selected'));
    palette.classList.add('selected');
  }
  sessionStorage.color = palette.style.backgroundColor;
}

function paintBoard(event) {
  let palette = event.target;
  if (!palette.id) {
    const paintPixel = sessionStorage.color;
    palette.style.backgroundColor = paintPixel;
  }
}

document.getElementById('color-palette').addEventListener('click', getPalette);
document.getElementById('pixel-board').addEventListener('click', paintBoard);
