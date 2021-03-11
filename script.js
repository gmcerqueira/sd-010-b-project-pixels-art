const colorPalette = 'color-palette';
const pixelBoard = 'pixel-board';

// Cria uma tabela de caixas
function createBoxTable(numOfItems, itemClass, parentId, numOfLines = 1) {
  const paletteBox = document.getElementById(parentId);
  const boxTable = document.createElement('table');
  paletteBox.appendChild(boxTable);
  for (let line = 1; line <= numOfLines; line += 1) {
    const boxLine = document.createElement('tr');
    boxTable.appendChild(boxLine);
    for (let item = 1; item <= numOfItems; item += 1) {
      const boxItem = document.createElement('td');
      boxLine.appendChild(boxItem);
      boxItem.classList.add(itemClass);
    }
  }
}

// Adiciona uma classe para cada box da paleta.
function addClassToPaletteBox() {
    const boxes = document.getElementsByClassName('color');
    for (let index = 0; index < boxes.length; index += 1) {
      boxes[index].classList.add(`color${index + 1}`);
      if (getComputedStyle(boxes[index]).backgroundColor === 'rgb(0, 0, 0)') {
        boxes[index].classList.add('selected');
      }
    }
  }