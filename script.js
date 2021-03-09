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

function addClassToPaletteBox() {
  const paletteBox = document.getElementById('color-palette');
  const boxes = paletteBox.children[0].children[0].children;
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].classList.add(`color${index + 1}`);
  }
}

createBoxTable(4, 'color', 'color-palette');
addClassToPaletteBox();
createBoxTable(5, 'pixel', 'pixel-board', 5);
