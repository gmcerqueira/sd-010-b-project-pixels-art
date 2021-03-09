const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const inlineDivs = document.getElementsByClassName('inlineDivs');
const paletteOne = document.getElementsByClassName('color');

for (let counterDiv = 0; counterDiv < 5; counterDiv += 1) {
  pixelBoard.appendChild(document.createElement('div'));
  pixelBoard.lastChild.className = 'inlineDivs';
  for (let counterPixel = 0; counterPixel < 5; counterPixel += 1) {
    inlineDivs[counterDiv].appendChild(document.createElement('div'));
    inlineDivs[counterDiv].lastChild.className = 'pixel';
  }
}

localStorage.setItem('cor', 'white');

for (let counter = 0; counter < 25; counter += 1) {
  pixel[counter].style.backgroundColor = (localStorage.getItem('cor'));
  pixel[counter].style.border = '1px solid black';
  pixel[counter].style.height = '40px';
  pixel[counter].style.width = '40px';
  pixel[counter].style.display = 'inline-block';
}

localStorage.setItem('corInicial', 'black');
sessionStorage.setItem('selectedPalette', 'selected');
paletteOne[0].className += (sessionStorage.getItem('initialClassPaletteOne'));
paletteOne[0].style.backgroundColor = (localStorage.getItem('corInicial'));
