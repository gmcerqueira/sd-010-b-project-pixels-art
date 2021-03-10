function tamanho() {
  const numero = document.getElementById('board-size');
  const n = numero.value;
  sessionStorage.setItem('n', n);
  location.reload();
}

function leInput() {
  const botao = document.getElementById('generate-board');
  botao.addEventListener('click', tamanho);
}
leInput();

function recuperaN() {
  let n = Number(sessionStorage.getItem('n'));
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
  if (pixelCores[1].style.background === pixelCores[2].style.background) {
    location.reload();
  }
  if (pixelCores[1].style.background === pixelCores[3].style.background) {
    location.reload();
  }
  if (String(pixelCores[1].style.background) === '#000000') {
    location.reload();
  }
  if (String(pixelCores[1].style.background) === '#ffffff') {
    location.reload();
  }
}

function verificaCoresDois() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[2].style.background === pixelCores[1].style.background) {
    location.reload();
  }
  if (pixelCores[2].style.background === pixelCores[3].style.background) {
    location.reload();
  }
  if (String(pixelCores[2].style.background) === '#000000') {
    location.reload();
  }
  if (String(pixelCores[2].style.background) === '#ffffff') {
    location.reload();
  }
}

function verificaCoresTres() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[3].style.background === pixelCores[1].style.background) {
    location.reload();
  }
  if (pixelCores[3].style.background === pixelCores[2].style.background) {
    location.reload();
  }
  if (String(pixelCores[3].style.background) === '#000000') {
    location.reload();
  }
  if (String(pixelCores[3].style.background) === '#ffffff') {
    location.reload();
  }
}

verificaCoresUm();
verificaCoresDois();
verificaCoresTres();

const pixelPreto = document.getElementById('black');
const pixelCorUm = document.getElementById('corUm');
const pixelCorDois = document.getElementById('corDois');
const pixelCorTres = document.getElementById('corTres');

function pegaCorPreta() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelPreto.classList.add('selected');
}
function pegaCorUm() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorUm.classList.add('selected');
}
function pegaCorDois() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorDois.classList.add('selected');
}
function pegaCorTres() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorTres.classList.add('selected');
}

pixelPreto.addEventListener('click', pegaCorPreta);
pixelCorUm.addEventListener('click', pegaCorUm);
pixelCorDois.addEventListener('click', pegaCorDois);
pixelCorTres.addEventListener('click', pegaCorTres);

function criarListenerCelulas() {
  const quadro = document.getElementById('pixel-board');
  quadro.addEventListener('click', function (event) {
    event.target.style.background = document.getElementsByClassName('selected')[0].style.background;
  });
}

criarListenerCelulas();

function limpar() {
  const n = recuperaN();
  for (let linha = 0; linha < n; linha += 1) {
    for (let celula = 0; celula < n; celula += 1) {
      document.getElementById(`cell-${linha + 1}-${celula + 1}`).style.background = '#ffffff';
    }
  }
}

function adicionaLimpar() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', limpar);
}

adicionaLimpar();
