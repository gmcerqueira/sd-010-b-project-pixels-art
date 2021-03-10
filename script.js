const containerPalette = document.querySelector('#color-palette');
const containerQuadro = document.querySelector('#pixel-board');

function createPalette() {
  for (let index = 0; index < 4; index += 1) {
    let selectors = document.createElement('div');
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
      const colun = document.createElement('div');
      colun.className = 'pixel';
      line.appendChild(colun);
    }
  };
}
createPixels();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'green';
document.getElementsByClassName('color')[3].style.backgroundColor = 'yellow';

