const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const inlineDivs = document.getElementsByClassName('inlineDivs');
const paletteColors = document.getElementsByClassName('color');
const paletteBoard = document.getElementById('color-palette');
const buttonDiv = document.querySelector('#buttonDiv');
const button = document.createElement('button');

buttonDiv.appendChild(button);
button.id = 'clear-board';
button.innerText = 'Limpar';
button.addEventListener('click', function () {
  pixelBoard.style.backgroundColor = 'white' 
  for (let counter = 0; counter < pixel.length; counter += 1) {
    pixel[counter].style.backgroundColor = 'white';
  }
});

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

const colorsBackground = ['#fec5bb', '#d8e2dc', '#fec89a'];
for (let counter = 0; counter < colorsBackground.length; counter += 1) {
  const getColorsClass = document.querySelectorAll('.color');
  getColorsClass[counter + 1].style.backgroundColor = colorsBackground[counter];
}

localStorage.setItem('initialColor', 'black');
localStorage.setItem('Selected', ' selected');
paletteColors[0].style.backgroundColor = (localStorage.getItem('initialColor'));
paletteColors[0].className += (localStorage.getItem('Selected'));

paletteBoard.addEventListener('click', function (event) {
  document.querySelector('.selected').className = 'color';
  event.target.className += ' selected';
});

pixelBoard.addEventListener('click', function (event) {
  const backgroundColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = backgroundColor;
});
