window.onload = () => {
  start();
};

// Generic Create Element function

const createGenElement = (
  elName,
  className = '',
  contentText = '',
  idValue = ''
) => {
  const elementCreated = document.createElement(elName);
  elementCreated.textContent = contentText;
  if (className.length > 0) elementCreated.setAttribute('class', className);
  if (idValue.length > 0) elementCreated.setAttribute('id', idValue);
  return elementCreated;
};

// Elements

const palletes = Array.from(document.querySelectorAll('.color'));
const pixelBoard = document.querySelector('#pixel-board');

// Setting pallete colors
const setPalleteColors = () => {
  let r = Math.ceil(Math.random() * 84);
  let g = Math.ceil(Math.random() * 84);
  let b = Math.ceil(Math.random() * 84);
  palletes.map((pallete, index) => {
    if (!index) {
      pallete.style.backgroundColor = 'black';
    } else {
      pallete.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r += 84;
      g += 84;
      b += 84;
    }
  });
};

// Set Pixel Grid by x Amount

const setPixelGrid = (size) => {
  for (let row = 0; row < size; row += 1) {
    const tr = document.createElement('tr');

    for (let column = 0; column < size; column += 1) {
      const td = createGenElement('td', 'pixel');
      if (column > 0) {
        td.style.borderLeft = 0;
      }
      if (row > 0) {
        td.style.borderTop = 0;
        td.style.height = '39px';
      }
      tr.appendChild(td);
    }

    pixelBoard.appendChild(tr);
  }
};

function start() {
  setPalleteColors();
  setPixelGrid(8);
}
