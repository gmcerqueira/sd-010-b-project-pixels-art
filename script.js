// variables
const getPixelBoard = document.getElementById('pixel-board');
const buttonGT = document.getElementById('generate-board');
const buttonIT = document.getElementById('board-size');
const cores = ['black'];

// função para criar paletas de cores
// classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// childNodes: https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// define cores aleatórias
function randomColor() {
  for (let index = 1; index < 4; index += 1) {
    const cor1 = Math.floor(Math.random() * 256);
    const cor2 = Math.floor(Math.random() * 256);
    const cor3 = Math.floor(Math.random() * 256);
    const corRGB = `rgb(${cor1} ${cor2} ${cor3})`;
    cores[index] = corRGB;
  }
}

// define a paleta de cores
function setPaletteColor() {
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const elem = document.createElement('span');
    elem.classList.add('color');
    colorPalette.appendChild(elem);
  }
  randomColor();
  const array = document.getElementById('color-palette').childNodes;
  array.forEach((aux, index) => {
    const elem = aux;
    elem.style.backgroundColor = cores[index];
  });
  const colors = document.getElementsByClassName('color');
  colors[0].classList.add('selected');
}

// função para preenchimento dos pixels
function setPixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const elem = document.createElement('span');
      elem.classList.add('pixel');
      getPixelBoard.appendChild(elem);
    }
  }
}

// função para trocar a cor selecionada
// event.target: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
function getSelected(event) {
  const elem = event.target;
  if (!elem.id) { // if abreviado para especificar algo "se for diferente", onde '!' significa 'não'
    const colors = document.querySelectorAll('.color');
    colors.forEach((aux) => aux.classList.remove('selected'));
    elem.classList.add('selected');
  }
  sessionStorage.color = elem.style.backgroundColor; // define a nova cor
}

// função para alterar a cor de fundo dos pixels
function paintPixel(event) {
  const elem = event.target;
  if (!elem.id) {
    const colorToPaint = sessionStorage.color;
    elem.style.backgroundColor = colorToPaint;
  }
}

// função para limpar a board dos pixels
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => { e.style.backgroundColor = 'white'; }); // pinta os pixels de branco
}

// condicional de tamanho mínimo e máximo
function tableInputs() {
  if (buttonIT.value <= 5) {
    document.getElementById('pixel-board').innerHTML = ''
    tableSize(5);
  }
  if (buttonIT.value > 5 && buttonIT.value < 50) {
    document.getElementById('pixel-board').innerHTML = ''
    tableSize(buttonIT.value);
  }
  if (buttonIT.value >= 50) {
    document.getElementById('pixel-board').innerHTML = ''
    tableSize(50);
  }
  if (buttonIT.value === '') {
    alert('Board inválido!');
  }
  if (buttonIT.value < 0) {
    document.getElementById('pixel-board').innerHTML = ''
    buttonIT.value = Math.min(5,50);
    tableSize(buttonIT.value);
  }
}

// função para criar tabela //criada com ajuda da colega Fernanda Porto
const mainRow = document.querySelector('#pixel-board');

function tableSize(n) {
    for (let i = 0; i < n; i += 1) {
      const tableRow = document.createElement('tr');
      for (let j = 0; j < n; j += 1) {
        const cell = document.createElement('td');
        tableRow.appendChild(cell);
        cell.className = 'pixel';
      }
      tableRow.className = 'tableRow';
      mainRow.appendChild(tableRow);
    }
}

// window.load para carregar as funções na página
window.onload = function init() {
  sessionStorage.setItem('color', 'black'); // para definir a cor padrão (Fonte: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
  setPaletteColor(); // para chamar a função das paletas de cores
  setPixelBoard(); //  para chamar a função da board dos pixels
  document.getElementById('color-palette').addEventListener('click', getSelected); // adiciona o evento "clique do mouse" à paleta de cores
  getPixelBoard.addEventListener('click', paintPixel); // adiciona o evento "clique do mouse" à board de pixels
  document.getElementById('clear-board').addEventListener('click', clearBoard); // adiciona o evento "clique do mouse" ao botão Limpar
  buttonGT.addEventListener('click', tableInputs); // 
  buttonGT.addEventListener('click', tableSize); // 
  tableSize(5);
};
