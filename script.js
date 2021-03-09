function selectBlack(event) {
  const colorRed = document.getElementById('red');
  const colorBlue = document.getElementById('blue');
  const colorGreen = document.getElementById('green');

  colorRed.className = 'color';
  colorBlue.className = 'color';
  colorGreen.className = 'color';
  event.target.className = 'color selected';
}

function selectRed(event) {
  const corPreto = document.getElementById('black');
  const corAzul = document.getElementById('blue');
  const corVerde = document.getElementById('green');

  corPreto.className = 'color';
  corAzul.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected';
}

function selectBlue(event) {
  const corPreto = document.getElementById('black');
  const corVermelho = document.getElementById('red');
  const corVerde = document.getElementById('green');
  
  corPreto.className = 'color';
  corVermelho.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected';
}

function selectGreen(event) {
  const corPreto = document.getElementById('black');
  const corVermelho = document.getElementById('red');
  const corAzul = document.getElementById('blue');

  corPreto.className = 'color';
  corVermelho.className = 'color';
  corAzul.className = 'color';
  event.target.className = 'color selected';
}

const blackButton = document.getElementById('black');
blackButton.addEventListener('click', selectBlack);

const redButton = document.getElementById('red');
redButton.addEventListener('click', selectRed);

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', selectBlue);

const greenButton = document.getElementById('green');
greenButton.addEventListener('click', selectGreen);

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function (event) {
  const backgroundColor = document.querySelector('.selected');  
  const estilo = backgroundColor.getAttribute('id');
  event.target.style.backgroundColor = estilo;  
});

function limpaGrid() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const buttonClean = document.getElementById('clear-board');
buttonClean.addEventListener('click', limpaGrid);
