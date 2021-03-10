/*
   Essa função cria um element div, altera sua classe para 'pixel' e o retorna.
  */
function createPixel() {
  const pixel = document.createElement('div'); // cria um element div e armazena em pixel
  pixel.className = 'pixel'; // altera a classe do element para 'pixel'
  return pixel; // retorna o element criado
}

/*
   Essa função recebe width e height e cria um board contendo width colunas e height linhas preenchidos com elementos da classe 'pixel'.
  */
function generateBoard(width, height) {
  const board = document.getElementById('pixel-board'); // board armazena o elemento html do id pixel-board
  for (let line = 0; line < height; line += 1) { // para cada linha até height
    const pixelLine = document.createElement('div'); // cria um element div e armazena em pixelLine
    pixelLine.className = 'pixel-row'; // altera a classe do element para 'pixel-row'

    for (let column = 0; column < width; column += 1) { // para cada coluna até width
      pixelLine.appendChild(createPixel()); // o pixel criado é adicionado como filho em pixelLine
    }

    board.appendChild(pixelLine); // a linha de pixels é adicionada como filha em board
  }
}

/*
   Essa função recebe o evento disparado por um elemento da classe color e obtem esse elemento. Caso haja cor selecionada, retira a classe selected dela. Por fim, acrescenta a classe selected ao elemento que disparou o evento.
  */
function selectedColor(event) {
  const nextElementColor = event.target; // armazena o elemento color que disparou o evento

  // verifica se há elemento da classe color selecionado e armazena em currentElementColor
  const currentElementColor = document.querySelector('.selected');

  if (currentElementColor) { // se há elemento selecionado currentElementColor !== null
    currentElementColor.classList.remove('selected'); // remove a classe 'selected' do elemento color atual
  }

  nextElementColor.classList.add('selected'); // adiciona a classe 'selected' ao futuro elemento color.
}

/*
   Essa função executa a function init para carregar valores, gerar board e adicionar escutadores de evento click que dispara a function selectedColor.

   Material consultado sobre o loop forEach
   https://www.w3schools.com/jsref/jsref_foreach.asp

   Material consultado sobre arrow functions
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   https://www.w3schools.com/js/js_arrow_function.asp
  */
window.onload = function init() { // define uma função init para carregar valores e gerar board
  const boardSize = 5; // define o tamanho do board
  const width = boardSize; // define width a partir de boardSize
  const height = boardSize; // define height a partir de boardSize

  // armazena o primeiro elemento da classe color (black) e armazena em intialColor
  const initialColor = document.querySelector('.color');

  initialColor.classList.add('selected'); // define a cor black como inicial
  generateBoard(width, height); // gera o board de dimensão width X height

  // obtem uma lista de elementos da classe color e armazena em colorElementsList
  const colorElementsList = document.querySelectorAll('.color');

  // para cada elemento da lista, adiciona um escutador de eventos click que dispara a function selectedColor
  colorElementsList.forEach((colorElement) => {
    colorElement.addEventListener('click', selectedColor);
  });
};
