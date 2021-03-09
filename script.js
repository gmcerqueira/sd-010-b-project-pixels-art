const containerPalette = document.querySelector('#color-palette');
const tamanhoPalette = [1, 2, 3, 4];
const containerQuadro = document.querySelector('#pixels-board');

function createPalette() {
  for (let index = 0; index < tamanhoPalette.length; index += 1) {
    let selectors = document.createElement('div');
    selectors.className = 'color';
    containerPalette.appendChild(selectors);
  }
  return containerPalette;
}

createPalette();

function createBox() {
  for (let index = 0; index < 50; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'pixels';
    containerQuadro.appendChild(createDiv);
  }
}

createBox();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'green';
document.getElementsByClassName('color')[3].style.backgroundColor = 'yellow';

