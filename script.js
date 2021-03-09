function selectBlack(event) {
  let colorRed = document.getElementById('vermelho');
  let colorBlue = document.getElementById('azul');
  let colorGreen = document.getElementById('verde');

  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectRed(event) {
  let corPreto = document.getElementById('preto');
  let corAzul = document.getElementById('azul');
  let corVerde = document.getElementById('verde');

  corPreto.classList.remove('selected');
  corAzul.classList.remove('selected');
  corVerde.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectBlue(event) {
  let corPreto = document.getElementById('preto');
  let corVermelho = document.getElementById('vermelho');
  let corVerde = document.getElementById('verde');
  
  corPreto.classList.remove('selected');
  corVermelho.classList.remove('selected');
  corVerde.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectGreen(event) {
  let corPreto = document.getElementById('preto');
  let corVermelho = document.getElementById('vermelho');
  let corAzul = document.getElementById('azul');

  corPreto.classList.remove('selected');
  corVermelho.classList.remove('selected');
  corAzul.classList.remove('selected');
  event.target.classList.add('selected');
}

let blackButton = document.getElementById('preto');
blackButton.addEventListener('click', selectBlack);

let redButton = document.getElementById('vermelho');
redButton.addEventListener('click', selectRed);

let blueButton = document.getElementById('azul');
blueButton.addEventListener('click', selectBlue);

let greenButton = document.getElementById('verde');
greenButton.addEventListener('click', selectGreen);