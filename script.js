// Executa o requisito 6 quando a página é carregada totalmente:
window.addEventListener('load', defaultColor);

// 1. Adiciona o título:
function headerMaker() {
  const generateHeader = document.querySelector('body');
  const headerGenerator = document.createElement('h1');
  headerGenerator.id = 'title';
  headerGenerator.innerText = 'Paleta de Cores';
  generateHeader.appendChild(headerGenerator);
}
headerMaker();

// 2. e 3. Adiciona a paleta de cores:
function tablesFatherCreator() {
  const generateTable = document.querySelector('body');
  const tablesFather = document.createElement('div');
  tablesFather.id = 'color-palette';
  generateTable.appendChild(tablesFather);
}

function colorsTableMaker() {
  const colors = [
    'black',
    'crimson',
    'darkgoldenrod',
    'yellow',
  ];

  for (let index = 0; index < colors.length; index += 1) {
    const allTables = document.querySelector('#color-palette');
    const tables = document.createElement('div');
    tables.id = colors[index];
    tables.className = 'color';
    tables.style.backgroundColor = colors[index];
    allTables.appendChild(tables);
  }
}

tablesFatherCreator();
colorsTableMaker();

// 4. e 5. Adicionar à página um quadro com N pixels com 40*40px e 1px de borda:
const numberOfPixels = 5;
const boardFather = document.querySelector('body');

function pixelsBoardFather() {
  const fatherCreator = document.createElement('div');
  fatherCreator.id = 'pixel-board';
  boardFather.append(fatherCreator);
}

function pixelsForBoard() {
  const pixelsFather = document.getElementById('pixel-board');

  // Criar as linhas com N de pixels:
  for (let line = 0; line < numberOfPixels; line += 1) {
    const createLines = document.createElement('div');
    pixelsFather.appendChild(createLines);

    // Criar as colunas com N de pixels:
    for (let column = 0; column < numberOfPixels; column += 1) {
      const createRows = document.createElement('div');
      createRows.className = 'pixel';
      createRows.style.backgroundColor = 'white';
      pixelsFather.appendChild(createRows);
    }
  }
}

pixelsBoardFather();
pixelsForBoard();

console.log(document.querySelector('body'));

// 6. Definir a cor preta como a cor selecionada ao carregar a página:
function defaultColor() {
  const setDefaultColor = document.querySelector('#black');
  setDefaultColor.className = 'color selected';
}
