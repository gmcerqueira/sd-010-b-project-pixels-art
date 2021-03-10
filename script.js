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

window.onload = function init() { // define uma função init para carregar valores e gerar board
  const boardSize = 5; // define o tamanho do board
  const width = boardSize; // define width a partir de boardSize
  const height = boardSize; // define height a partir de boardSize

  generateBoard(width, height); // gera o board de dimensão width X height
};
