function coresAleatórias() {
  const cor = `#${((1 << 24) * Math.random() | 0).toString(16)}`; // creditos: https://stackoverflow.com/questions/1484506/random-color-generator
  return cor;
}

function criaPixels() {
  const n = 5;
  const tabela = document.getElementById('pixel-board');
  for (let linha = 0; linha < n; linha += 1) {
    const criaLinha = document.createElement('tr');
    tabela.appendChild(criaLinha);
    for (let celula = 0; celula < n; celula += 1) {
      const criaCelula = document.createElement('td');
      tabela.appendChild(criaCelula).className = 'pixel';
      document.getElementsByClassName('pixel');
      let apoio = document.getElementsByClassName('pixel');
      apoio[apoio.length - 1].id = `cell-${linha+1}-${celula+1}`;
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
    document.location.reload(true);
  }
  if (pixelCores[1].style.background === pixelCores[3].style.background) {
    document.location.reload(true);
  }
  if (String(pixelCores[1].style.background) === '#000000') {
    document.location.reload(true);
  }
  if (String(pixelCores[1].style.background) === '#ffffff') {
    document.location.reload(true);
  }
}

function verificaCoresDois() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[2].style.background === pixelCores[1].style.background) {
    document.location.reload(true);
  }
  if (pixelCores[2].style.background === pixelCores[3].style.background) {
    document.location.reload(true);
  }
  if (String(pixelCores[2].style.background) === '#000000') {
    document.location.reload(true);
  }
  if (String(pixelCores[2].style.background) === '#ffffff') {
    document.location.reload(true);
  }
}

function verificaCoresTres() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[3].style.background === pixelCores[1].style.background) {
    document.location.reload(true);
  }
  if (pixelCores[3].style.background === pixelCores[2].style.background) {
    document.location.reload(true);
  }
  if (String(pixelCores[3].style.background) === '#000000') {
    document.location.reload(true);
  }
  if (String(pixelCores[3].style.background) === '#ffffff') {
    document.location.reload(true);
  }
}

verificaCoresUm();
verificaCoresDois();
verificaCoresTres();

let pixelPreto = document.getElementById('black');
let pixelCorUm = document.getElementById('corUm');
let pixelCorDois = document.getElementById('corDois');
let pixelCorTres = document.getElementById('corTres');

function pegaCorPreta() {
  let elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelPreto.classList.add('selected');
}
function pegaCorUm() {
  let elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorUm.classList.add('selected');
}
function pegaCorDois() {
  let elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorDois.classList.add('selected');
}
function pegaCorTres() {
  let elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorTres.classList.add('selected');
}

pixelPreto.addEventListener('click', pegaCorPreta);
pixelCorUm.addEventListener('click', pegaCorUm);
pixelCorDois.addEventListener('click', pegaCorDois);
pixelCorTres.addEventListener('click', pegaCorTres);

function criarListenerCelulas() {
  let quadro = document.getElementById('pixel-board');
  quadro.addEventListener('click', function pintar(event){
    event.target.style.background = document.getElementsByClassName('selected')[0].style.background;
  });
}

criarListenerCelulas();