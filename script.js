// criar div com classe color
function criarDiv() {
  const novaDiv = document.createElement('div');
  novaDiv.className = 'color';
  return novaDiv;
}

// definir as divs a paleta
function atribuirPaleta(divs) {
  const selecionarPaleta = document.querySelector('#color-palette');
  selecionarPaleta.appendChild(divs);
}

// definir numero de paletas de cores
const paletaNumber = 4;

for (let index = 0; index < paletaNumber; index += 1) {
  atribuirPaleta(criarDiv());
}

// adiciona cores aleatorias as paletas
function adicionarBgcolor() {
  const getDiv = document.getElementsByClassName('color');
  for (let index = 0; index < getDiv.length; index += 1) {
    const randomizer = Math.round(Math.random() * 255);
    const randomizer2 = Math.round(Math.random() * 255);
    const randomizer3 = Math.round(Math.random() * 255);
    const randomRgb = `rgb(${randomizer}, ${randomizer2}, ${randomizer3})`;
    if (index === 0) {
      getDiv[index].style.backgroundColor = 'black';
      getDiv[index].id = 'black';
      getDiv[index].className += ' selected';
    } else {
      getDiv[index].style.backgroundColor = randomRgb;
      getDiv[index].id = randomRgb;
    }
  }
  return getDiv;
}

// adiciona os pixels

function criarPixels() {
  const novoPixel = document.createElement('div');
  novoPixel.className = 'pixel';
  novoPixel.style.backgroundColor = 'white';
  return novoPixel;
}

function criaLinhas() {
  const novaLinha = document.createElement('div');
  novaLinha.className = 'linha';
  return novaLinha;
}

function criarTabelaPixel(pixel) {
  const tabelaPixel = document.querySelector('#pixel-board');
  tabelaPixel.appendChild(pixel);
}

let pixelTamanho = 5;
if (pixelTamanho < 5) {
  pixelTamanho = 5;
} else if (pixelTamanho > 50) {
  pixelTamanho = 50;
}

for (let index = 0; index < pixelTamanho; index += 1) {
  criarTabelaPixel(criaLinhas());
  for (let index2 = 0; index2 < pixelTamanho; index2 += 1) {
    criarTabelaPixel(criarPixels());
  }
}

// eventos



window.onload = function () {
  adicionarBgcolor();
};
