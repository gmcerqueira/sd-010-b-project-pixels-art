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
    for (let i = 0; i < 5; i += 1) {
      const elem = createElement('span');
      elem.classList.add('pixel');
      document.getElementById('pixel-board').appendChild(elem);
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

// função para limpar a board dos pixels
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => { e.style.backgroundColor = 'white'; }); // pinta os pixels de branco
}

// função para criar board personalizada (em construção)

// window.load para carregar as funções na página
window.onload = function init() {
  sessionStorage.setItem('color', 'black'); // para definir a cor padrão
  setPaletteColor(); // para chamar a função das paletas de cores
  setPixelBoard(); //  para chamar a função da board dos pixels
  document.getElementById('color-palette').addEventListener('click', getSelected); // adiciona o evento "clique do mouse" à paleta de cores
  document.getElementById('pixel-board').addEventListener('click', paintPixel); // adiciona o evento "clique do mouse" à board de pixels
  document.getElementById('clear-board').addEventListener('click', clearBoard); // adiciona o evento "clique do mouse" ao botão Limpar
};
