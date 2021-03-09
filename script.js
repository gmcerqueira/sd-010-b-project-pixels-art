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
  event.target.className = 'color selected';
}

function selectBlue(event) {
  const corPreto = document.getElementById('preto');
  const corVermelho = document.getElementById('vermelho');
  const corVerde = document.getElementById('verde');
  corPreto.className = 'color';
  corVermelho.className = 'color';
  corVerde.className = 'color';
  event.target.className = 'color selected';
}

function selectGreen(event) {
  const corPreto = document.getElementById('preto');
  const corVermelho = document.getElementById('vermelho');
  const corAzul = document.getElementById('azul');
  corPreto.className = 'color';
  corVermelho.className = 'color';
  corAzul.className = 'color';
  event.target.className = 'color selected';
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
  let selecionaCor = document.querySelector('.selected').id;
  let pixel = event.target;
  pixel.style.backgroundColor = selecionaCor;
}

const colore = document.querySelector('.pixel');
colore.addEventListener('click', pintaPixel);