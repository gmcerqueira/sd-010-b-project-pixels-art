function selectBlack(event) {
  let colorRed = document.getElementById('vermelho');
  let colorBlue = document.getElementById('azul');
  let colorGreen = document.getElementById('verde');

  colorRed.className = 'color';
  colorBlue.className = 'color';
  colorGreen.className = 'color';
  event.target.className = 'color selected'
}

function selectRed(event) {
  let corPreto = document.getElementById('preto');
  let corAzul = document.getElementById('azul');
  let corVerde = document.getElementById('verde');

  corPreto.className = 'color';
  corAzul.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected'
}

function selectBlue(event) {
  let corPreto = document.getElementById('preto');
  let corVermelho = document.getElementById('vermelho');
  let corVerde = document.getElementById('verde');
  
  corPreto.className = 'color';
  corVermelho.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected'
}

function selectGreen(event) {
  let corPreto = document.getElementById('preto');
  let corVermelho = document.getElementById('vermelho');
  let corAzul = document.getElementById('azul');

  corPreto.className = 'color';
  corVermelho.className = 'color';
  corAzul.className = 'color';
  event.target.className = 'color selected'
}

let blackButton = document.getElementById('preto');
blackButton.addEventListener('click', selectBlack);

let redButton = document.getElementById('vermelho');
redButton.addEventListener('click', selectRed);

let blueButton = document.getElementById('azul');
blueButton.addEventListener('click', selectBlue);

let greenButton = document.getElementById('verde');
greenButton.addEventListener('click', selectGreen);

function pintaPixel(event) {
  let selecionaCor = document.querySelector('.selected').id;
  let pixel = event.target;
  pixel.style.backgroundColor = selecionaCor.style.backgroundColor;
}

let colore = document.querySelector('.pixel');
colore.addEventListener('click', pintaPixel);