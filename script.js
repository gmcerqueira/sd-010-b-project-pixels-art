function recuperaN() {
  const n = Number(sessionStorage.getItem('n'));
  if (n < 5) {
    sessionStorage.setItem('n', '5');
  }
  if (n > 50) {
    sessionStorage.setItem('n', '50');
  }
  return Number(sessionStorage.getItem('n'));
}

function coresAleatórias() {
  const cor = `#${((1 << 24) * Math.random() | 0).toString(16)}`; // creditos: https://stackoverflow.com/questions/1484506/random-color-generator
  return cor;
}

function criaPixels() {
  const n = recuperaN();
  const tabela = document.getElementById('pixel-board');
  for (let linha = 0; linha < n; linha += 1) {
    const criaLinha = document.createElement('tr');
    tabela.appendChild(criaLinha);
    for (let celula = 0; celula < n; celula += 1) {
      const criaCelula = document.createElement('td');
      const linhaApoio = document.getElementsByTagName('tr');
      linhaApoio[linhaApoio.length - 1].appendChild(criaCelula).className = 'pixel';
      document.getElementsByClassName('pixel');
      const apoio = document.getElementsByClassName('pixel');
      apoio[apoio.length - 1].id = `cell-${linha + 1}-${celula + 1}`;
      apoio[apoio.length - 1].style.background = '#ffffff';
    }
  }
}

criaPixels();

function esvaziaTabela() {
  const tabela = document.getElementById('pixel-board');
  while (tabela.firstChild) { // esvazia o board para criar novo, tirado do link https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    tabela.removeChild(tabela.lastChild);
  }
}

function tamanho() {
  const numero = document.getElementById('board-size');
  const n = numero.value;
  if ((n === null) || (n === '')) {
    alert('Board inválido!');
  } else {
    sessionStorage.setItem('n', n);
    esvaziaTabela();
    criaPixels();
  }
}

function leInput() {
  const botao = document.getElementById('generate-board');
  botao.addEventListener('click', tamanho);
}
leInput();

function colocaCores() {
  const pixelCores = document.getElementsByClassName('color');
  pixelCores[0].style.background = '#000000';
  for (let index = 1; index < pixelCores.length; index += 1) {
    pixelCores[index].style.background = coresAleatórias();
  }
}

colocaCores();

function verificaCoresUm() {
  const pixelCores = document.getElementsByClassName('color');
  const colorUm = getComputedStyle(pixelCores[1]).getPropertyValue('background-color');
  const colorDois = getComputedStyle(pixelCores[2]).getPropertyValue('background-color');
  const colorTres = getComputedStyle(pixelCores[3]).getPropertyValue('background-color');
  const preto = getComputedStyle(document.getElementById('black')).getPropertyValue('background-color');
  const branco = getComputedStyle(document.getElementById('opcoes')).getPropertyValue('background-color');
  if (colorUm === colorDois) {
    colocaCores();
  }
  if (colorUm === colorTres) {
    colocaCores();
  }
  if (colorUm === preto) {
    colocaCores();
  }
  if (colorUm === branco) {
    colocaCores();
  }
}

function verificaCoresDois() {
  const pixelCores = document.getElementsByClassName('color');
  const colorUm = getComputedStyle(pixelCores[1]).getPropertyValue('background-color');
  const colorDois = getComputedStyle(pixelCores[2]).getPropertyValue('background-color');
  const colorTres = getComputedStyle(pixelCores[3]).getPropertyValue('background-color');
  const preto = getComputedStyle(document.getElementById('black')).getPropertyValue('background-color');
  const branco = getComputedStyle(document.getElementById('opcoes')).getPropertyValue('background-color');
  if (colorDois === colorUm) {
    colocaCores();
  }
  if (colorDois === colorTres) {
    colocaCores();
  }
  if (colorDois === preto) {
    colocaCores();
  }
  if (colorDois === branco) {
    colocaCores();
  }
}