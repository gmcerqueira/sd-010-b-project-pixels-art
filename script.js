// variables
const inputBoard = document.querySelector('#board-size');
const buttonBoardSize = document.querySelector('#generate-board');
const getPixelBoard = document.getElementById('pixel-board');

// função generalista para criação de elementos
function createElement(tagName) {
  const element = document.createElement(tagName);
  return element;
}

// função para criar paletas de cores
// classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// childNodes: https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function setPaletteColor() {
  const colorPalette = '#color-palette';
  for (let index = 0; index < 4; index += 1) {
    const elem = createElement('span');
    elem.classList.add('color');
    document.querySelector(colorPalette).appendChild(elem);
  }
  const cores = ['black', 'red', 'green', 'blue'];
  const array = document.getElementById('color-palette').childNodes;
  array.forEach((element, index) => {
    const elem = element; elem.style.backgroundColor = cores[index];
  });
  const colors = document.getElementsByClassName('color');
  colors[0].classList.add('selected');
}

// função para preenchimento dos pixels
function setPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const elem = createElement('span');
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
    colors.forEach((element) => element.classList.remove('selected'));
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

// função para criar board personalizada (em construção)
function checkInvalidBoard(value) {
  const valueAux = value === '' ? alert('Board inválido!') : null;
  return valueAux;
}

function createRow(value) {
  const board = getPixelBoard;
  board.innetText = '';

  for (let index = 0; index < value; index += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    board.appendChild(newRow);

    for (let index2 = 0; index2 < value; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      newRow.appendChild(pixel);
      pixel.addEventListener('click', () => {
        paintPixel(pixel);
      });
    }
  }
}

function setSize(value) {
  checkInvalidBoard(value);

  let valueAux = value;
  if (value > 50) valueAux = 50;
  else if (value < 5) valueAux = 5;

  createRow(valueAux);
}

buttonBoardSize.addEventListener('click', () => {
  setSize(inputBoard.value);
});

// função para limpar a board dos pixels
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => { e.style.backgroundColor = 'white'; }); // pinta os pixels de branco
}

// window.load para carregar as funções na página
window.onload = function init() {
  sessionStorage.setItem('color', 'black'); // para definir a cor padrão (Fonte: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
  setPaletteColor(); // para chamar a função das paletas de cores
  setPixelBoard(); //  para chamar a função da board dos pixels
  document.getElementById('color-palette').addEventListener('click', getSelected); // adiciona o evento "clique do mouse" à paleta de cores
  getPixelBoard.addEventListener('click', paintPixel); // adiciona o evento "clique do mouse" à board de pixels
  document.getElementById('clear-board').addEventListener('click', clearBoard); // adiciona o evento "clique do mouse" ao botão Limpar
};
