const containerPalette = document.querySelector('#color-palette');
const containerQuadro = document.querySelector('#pixel-board');
const colorsPalette = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const botaoLimparCores = document.querySelector('#clear-board');
const textoInput = document.querySelector('#board-size')
const botaoGerarPixels = document.querySelector('#generate-board');
let quadroPixelInicial = 5;

function createPalette() {
  for(let i = 0; i < 4; i += 1) {
    const selectors = document.createElement('div');
    selectors.className = 'color';
    containerPalette.appendChild(selectors);
    if (i === 0) {
      selectors.className += ' selected';
    }
  }
    
}

createPalette();

function createPixels() {
  for (let index = 0; index < quadroPixelInicial; index += 1) {
    const line = document.createElement('div');
    containerQuadro.appendChild(line);

    for (let index2 = 0; index2 < quadroPixelInicial; index2 += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
}

createPixels();



document.getElementsByClassName('color')[0].style.backgroundColor = "black"
document.getElementsByClassName('color')[1].style.backgroundColor = "red"
document.getElementsByClassName('color')[2].style.backgroundColor = "green"
document.getElementsByClassName('color')[3].style.backgroundColor = "blue"


function changeColor () {
  let paletaDeCores = document.querySelector('#color-palette');
  




}


