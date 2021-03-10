const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const inlineDivs = document.getElementsByClassName('inlineDivs');
const paletteColors = document.getElementsByClassName('color');
const paletteBoard = document.getElementById('color-palette');
const buttonDiv = document.querySelector('#buttonDiv');
const button = document.createElement('button');

//funcao que seta a primeira cor como preto
localStorage.setItem('initialColor', 'black');
localStorage.setItem('Selected', ' selected');
paletteColors[0].style.backgroundColor = (localStorage.getItem('initialColor'));
paletteColors[0].className += (localStorage.getItem('Selected'));

//funcao que da cor a outros elementos da paleta
const colorsBackground = ['#fec5bb', '#d8e2dc', '#fec89a'];
for (let counter = 0; counter < colorsBackground.length; counter += 1) {
  const getColorsClass = document.querySelectorAll('.color');
  getColorsClass[counter + 1].style.backgroundColor = colorsBackground[counter];
}

//funcao que seleciona uma cor
paletteBoard.addEventListener('click', function (event) {
  document.querySelector('.selected').className = 'color';
  event.target.className += ' selected';
});

//funcao que cria as primeiras celulas
for (let counterDiv = 0; counterDiv < 5; counterDiv += 1) {
  pixelBoard.appendChild(document.createElement('div'));
  pixelBoard.lastChild.className = 'inlineDivs';
  for (let counterPixel = 0; counterPixel < 5; counterPixel += 1) {
    inlineDivs[counterDiv].appendChild(document.createElement('div'));
    inlineDivs[counterDiv].lastChild.className = 'pixel';
  }
}

//funcao que denomina as propriedades das primeiras celulas
localStorage.setItem('cor', 'white');
const getPixel = document.getElementsByClassName('pixel');
for (let counter = 0; counter < getPixel.length; counter += 1) {
  getPixel[counter].style.backgroundColor = (localStorage.getItem('cor'));
  getPixel[counter].style.border = '1px solid black';
  getPixel[counter].style.height = '40px';
  getPixel[counter].style.width = '40px';
  getPixel[counter].style.display = 'inline-block';
}

//funcao do botao de adicionar pixels
const buttonPixel = document.getElementById('generate-board');
const input = document.getElementById('board-size');
buttonPixel.addEventListener('click', function(){
 if (input.value === "") {
    alert('Board inválido!')
  }

  const pixelBoard = document.getElementById('pixel-board');
  const divMotherOfPixel = document.getElementById('board-container');
  divMotherOfPixel.removeChild(pixelBoard);
  
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

  //funcao que indica o tamanho dos pixels
  const pixel = document.getElementsByClassName('pixel');
  for (let counter = 0; counter < pixel.length; counter += 1) {
    pixel[counter].style.backgroundColor = 'white';
    pixel[counter].style.height = '40px';
    pixel[counter].style.width = '40px';
    pixel[counter].style.display = 'inline-block';
    pixel[counter].style.border = '1px solid black';
  }
})

//funcao que limpa os pixels
buttonDiv.appendChild(button);
button.id = 'clear-board';
button.innerText = 'Limpar';
button.addEventListener('click', function () {
  pixelBoard.style.backgroundColor = 'white';
  for (let counter = 0; counter < pixel.length; counter += 1) {
    pixel[counter].style.backgroundColor = 'white';
  }
});

//funcao que pega o pixel e o colore
const colorPixel = document.getElementById('pixel-board');
colorPixel.addEventListener('click', function (event) {
  const backgroundColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = backgroundColor;
});