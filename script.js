function selectBlack(event) {
  const colorRed = document.getElementById('vermelho');
  const colorBlue = document.getElementById('azul');
  const colorGreen = document.getElementById('verde');

  colorRed.className = 'color';
  colorBlue.className = 'color';
  colorGreen.className = 'color';
  event.target.className = 'color selected';
}

function selectRed(event) {
  const corPreto = document.getElementById('preto');
  const corAzul = document.getElementById('azul');
  const corVerde = document.getElementById('verde');

  corPreto.className = 'color';
  corAzul.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected'
}

function selectBlue(event) {
  const corPreto = document.getElementById('preto');
  const corVermelho = document.getElementById('vermelho');
  const corVerde = document.getElementById('verde');
  
  corPreto.className = 'color';
  corVermelho.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected'
}

function selectGreen(event) {
  const corPreto = document.getElementById('preto');
  const corVermelho = document.getElementById('vermelho');
  const corAzul = document.getElementById('azul');

  corPreto.className = 'color';
  corVermelho.className = 'color';
  corAzul.className = 'color';
  event.target.className = 'color selected'
}

const blackButton = document.getElementById('preto');
blackButton.addEventListener('click', selectBlack);

const redButton = document.getElementById('vermelho');
redButton.addEventListener('click', selectRed);

const blueButton = document.getElementById('azul');
blueButton.addEventListener('click', selectBlue);

const greenButton = document.getElementById('verde');
greenButton.addEventListener('click', selectGreen);

function pintaPixel(event) {
  let pixel = event.target;
  let selecionaCor = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = selecionaCor;
}

let colore = document.querySelector('.pixel');
colore.addEventListener('click', pintaPixel);

function limpaGrid() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
  }
}

const buttonClean = document.getElementById('clear-board');
buttonClean.addEventListener('click', limpaGrid);