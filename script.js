const containerPalette = document.querySelector('#color-palette');
const containerQuadro = document.querySelector('#pixel-board');
const colorsPalette = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

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

for (let index = 0; index < colorsPalette.length; index += 1) {
  colorsPalette[index].addEventListener('click', function () {
    let classSelected = document.getElementsByClassName('selected')[0];
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

for(let index = 0; index < pixels.length; index+= 1){
  pixels[index].addEventListener('click', function(){
    let corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixels[index].style.backgroundColor = corNova;
  })
}



document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
document.getElementsByClassName('color')[1].style.backgroundColor = 'rgb(18,10,143)';
document.getElementsByClassName('color')[2].style.backgroundColor = 'rgb(0,128,0)';
document.getElementsByClassName('color')[3].style.backgroundColor = 'rgb(255,255,0)';
