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
  pixelBoard.style.backgroundColor = 'white';
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

const buttonPixel = document.getElementById('generate-board');
const input = document.getElementById('board-size');

buttonPixel.addEventListener('click', function(){
 if (input.value === "") {
    alert('Board inválido!')
  }

  const pixelBoard = document.getElementById('pixel-board');
  document.getElementById('board-container').removeChild(pixelBoard);

  const divMotherOfPixel = document.getElementById('board-container');
  const createBoard = document.createElement('div')
  divMotherOfPixel.appendChild(createBoard)
  createBoard.id = 'pixel-board';

  for (let counterInline = 0; counterInline < input.value; counterInline += 1) {
    createBoard.appendChild(document.createElement('div'));
    createBoard.lastChild.className = 'inlineDivs';
    for (let counterPixel = 0; counterPixel < input.value; counterPixel += 1) {
      const getInlineDiv = document.getElementsByClassName('inlineDivs');
      getInlineDiv[counterInline].appendChild(document.createElement('div'));
      getInlineDiv[counterInline].lastChild.className = 'pixel'
    }
  }
})

if (input.value == ""){
  localStorage.setItem('cor', 'white');
  const getPixel = document.getElementsByClassName('pixel');
  for (let counter = 0; counter < getPixel.length; counter += 1) {
    getPixel[counter].style.backgroundColor = (localStorage.getItem('cor'));
    getPixel[counter].style.border = '1px solid black';
    getPixel[counter].style.height = '40px';
    getPixel[counter].style.width = '40px';
    getPixel[counter].style.display = 'inline-block';
  }
} 
/* else {

    const pixelPicker = document.getElementsByClassName('pixel');
    localStorage.setItem('cor', 'white');
    pixelPicker[0].style.height= '40px';
    pixelPicker[0].style.width= '40px';
    pixelPicker[0].style.display
  }
}
 */

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