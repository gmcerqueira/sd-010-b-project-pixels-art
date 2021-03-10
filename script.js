const paletteContainer = document.getElementById('color-palette');
const pixelBoardContainer = document.getElementById('pixel-board');

function criaDiv() {
  let paleta = [1, 2, 3, 4];
  for (let i = 0; i < paleta.length; i += 1) {
    let criaPaleta = document.createElement('div');
    criaPaleta.className = 'color';
    paletteContainer.appendChild(criaPaleta);
  }
  return paletteContainer;
}
criaDiv();

function criaTela() {
  for (let j = 0; j < 25; j += 1) {
    let criaPixel = document.createElement('div');
    criaPixel.className = 'pixel';
    pixelBoardContainer.appendChild(criaPixel);
  }
  return pixelBoardContainer;
}
criaTela();

function paletaSelecionada() {
  const cor = document.querySelector('#color-palette');
  cor.addEventListener('click', (event) => {
  const elemento = event;
  document.querySelector('.selected').className = 'color';
  elemento.target.className = 'color selected';
  });
  }
  paletaSelecionada();
  
function pintar() {
  const selecionaCor = document.querySelector('#pixel-board');
  selecionaCor.addEventListener('click', (event) => {
    const elemento = event;
    const corSelecionada = document.querySelector('.selected').style.backgroundColor;
    elemento.target.style.backgroundColor = corSelecionada;
  });
}
pintar();

document.getElementsByClassName('color')[0].className += ' selected';
document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'yellow';