function criaPaleta() {
  const paletaDeCores = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const criaCaixasPaleta = document.createElement('div');
    criaCaixasPaleta.className = 'color';
    paletaDeCores.appendChild(criaCaixasPaleta);
  }

  const caixasPaleta = document.querySelectorAll('.color');
  caixasPaleta[0].style.backgroundColor = 'black';
  caixasPaleta[1].style.backgroundColor = 'red';
  caixasPaleta[2].style.backgroundColor = 'green';
  caixasPaleta[3].style.backgroundColor = 'blue';

  caixasPaleta[0].id = 'box1';
  caixasPaleta[1].id = 'box2';
  caixasPaleta[2].id = 'box3';
  caixasPaleta[3].id = 'box4';
}
criaPaleta();

function criaQuadro() {
  for (let index = 0; index < 5; index += 1) {
    const quadro = document.querySelector('#pixel-board');
    const criaRow = document.createElement('div');
    criaRow.className = 'pixel-row';
    quadro.appendChild(criaRow);
  }
  const row = document.querySelectorAll('.pixel-row');
  for (let index = 0; index < 5; index += 1) {
    for (let indexDois = 0; indexDois < 5; indexDois += 1) {
      const criaPixel = document.createElement('div');
      criaPixel.className = 'pixel';
      row[indexDois].appendChild(criaPixel);
    }
  }
}

criaQuadro();

function seleciona() {
  const cores = document.getElementsByClassName('color');
  cores[0].classList.add('selected');
}

seleciona();

function trocaCores(cores) {
  const corSelecionada = document.querySelector('.selected');
  const novaCorSelecionada = cores.target;
  corSelecionada.classList.remove('selected');
  novaCorSelecionada.classList.add('selected');
}
const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', trocaCores);

function pintaPixel(pixel) {
  const pixelSelecionado = pixel.target;
  const corSelecionada = document.querySelector('.selected');
  pixelSelecionado.style.backgroundColor = corSelecionada.style.backgroundColor;
}
const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', pintaPixel);
}

function apagaTudo() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
const botao = document.querySelector('#clear-board');
botao.addEventListener('click', apagaTudo);
