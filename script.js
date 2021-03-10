const containerPalette = document.querySelector('#color-palette');
const containerQuadro = document.querySelector('#pixel-board');

function createPalette() {
  for (let index = 0; index < 4; index += 1) {
    const selectors = document.createElement('div');
    selectors.className = 'color';
    containerPalette.appendChild(selectors);
    if (index === 0) {
      selectors.className += ' selected';
    }
  }
  return containerPalette;
}

createPalette();

function createPixels() {
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    containerQuadro.appendChild(line);

    for (let index2 = 0; index2 < 5; index2 += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
  return containerQuadro;
}

createPixels();

document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
document.getElementsByClassName('color')[1].style.backgroundColor = 'rgb(18,10,143)';
document.getElementsByClassName('color')[2].style.backgroundColor = 'rgb(0,128,0)';
document.getElementsByClassName('color')[3].style.backgroundColor = 'rgb(255,255,0)';
