// Executa o requisito 6 quando a página é carregada totalmente:
// window.addEventListener('load', defaultColor);
// Função que verifica se existe dados no localStorage para criar um defaultSize:
function checkLocalStorage() {
  if (localStorage.getItem('number') === null) {
  const defaultLocalStorage = localStorage.setItem('number', '5');
  }
}

checkLocalStorage();

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

    if (colors[index] === 'black') {
      tables.className = 'selected color';
    }
    allTables.appendChild(tables);
  }
}

tablesFatherCreator();
colorsTableMaker();
createButton();
InputData();
inputButton();

// 4. e 5. Adicionar à página um quadro com N pixels com 40*40px e 1px de borda:
let numberOfPixels = localStorage.getItem('number');
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


// 6. Definir a cor preta como a cor selecionada ao carregar a página:
/* function defaultColor() {
  const setDefaultColor = document.querySelector('#black');
  setDefaultColor.className = 'selected color';
} */

// 7. Ao clicar numa cor, a classe da mesma muda para selected:
function selectColorOnClick() {
  const colors = document.querySelector('#color-palette');

  // Condição para mudar a cor:
  colors.addEventListener('click', function (event) {
    const colorToSelect = document.getElementsByClassName('color');

    for (let index = 0; index < colorToSelect.length; index += 1) {
      const colorSelected = document.querySelector('.selected');
      if (colorToSelect.className !== 'selected color') {
        // O Allan Tanaka deu-me uma ajuda nesse ponto com a lógica do meu código, pois mesmo funcionando, eu  precisava de inverter a ordem dos dois comandos abaixo para resolver o erro que aparecia no console.
        colorSelected.className = 'color';
        event.target.className = 'selected color';
      }
    }
  });
}

selectColorOnClick();

// 8. Pintar o pixel dentro do quadro após selecionar uma cor na paleta:
function paintWithPixels() {
  const paintPixels = document.querySelector('#pixel-board');
  paintPixels.addEventListener('click', function (event) {
    const selectColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectColor;
  });
}

paintWithPixels();

// 9. Cria um botão que reseta as cores dos pixels.
// Criar o botão:
function createButton() {
  const buttonSibling = document.querySelector('body');
  const buttonMaker = document.createElement('button');
  buttonMaker.id = 'clear-board';
  buttonMaker.innerText = 'Limpar';
  buttonSibling.append(buttonMaker);
}

// Funcionalidade do botão:
function buttonOnClick() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    const elementsToReset = document.getElementsByClassName('pixel');

    for (let index = 0; index < elementsToReset.length; index += 1) {
      elementsToReset[index].style.backgroundColor = 'white';
    } 
  });
}

buttonOnClick();

// 10. Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária:
// Função para criar o imput:
function InputData() {
  const inputFather = document.querySelector('body');
  const inputAreaMaker = document.createElement('input');
  inputAreaMaker.id = 'board-size';
  inputAreaMaker.type = 'number';
  inputAreaMaker.maxLength = '2';
  inputAreaMaker.min = '5';
  inputAreaMaker.max = '50';
  inputFather.appendChild(inputAreaMaker);
}

// Função para criar o input button:
function inputButton() {
  const inputFather = document.querySelector('body');
  const inputButtonMaker = document.createElement('button');
  inputButtonMaker.id = 'generate-board';
  inputButtonMaker.innerText = 'VQV';
  inputFather.appendChild(inputButtonMaker);
}

// Função que adiciona funcionalidades ao input e ao botão do input:
function inputAndButton() {
  const onButtonClick = document.querySelector('#generate-board');

  // Função para armazenar novo valor para a pixel-board:
  function storeNewData() {
    const storeData = document.querySelector('#board-size');
    const value = storeData.value;

    if (value === '') {
      alert('Board inválido!');
    } else if (value >= 5 && value <= 50) {
      localStorage.number = value;
    } else if (value < 5) {
      localStorage.number = '5';
    } else if (value > 50) {
      localStorage.number = '50';
    } else {
      alert('Board inválido!');
    }
  }

  // Função para limpar a pixel board anterior:
  function refreshPixelBoard() {
    const getPixels = document.querySelector('#pixel-board');
    const elementsToRemove = document.querySelectorAll('#pixel-board div');

    for (index = 0; index < elementsToRemove.length; index += 1) {
      getPixels.removeChild(elementsToRemove[index]);
    }
  }
  onButtonClick.addEventListener('click', refreshPixelBoard);
  onButtonClick.addEventListener('click', storeNewData);
  onButtonClick.addEventListener('click', pixelsForBoard);
}
inputAndButton();

console.log(document.querySelector('body'));
