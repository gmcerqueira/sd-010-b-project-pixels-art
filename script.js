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

// 4. Adicionar à página um quadro com N pixels:
let numberOfPixels = 5;
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

    // Crias as colunas com N de pixels:
    for (let column = 0; column < numberOfPixels; column += 1) {
      const createRows = document.createElement('div')
      createRows.className = 'pixel';
      createRows.style.backgroundColor = 'white';
      pixelsFather.appendChild(createRows);
    }
  }
}

pixelsBoardFather();
pixelsForBoard(numberOfPixels);

console.log(document.querySelector('body'));
