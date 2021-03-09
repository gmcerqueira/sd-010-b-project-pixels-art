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
const clearBtn = document.querySelector('#clear-board');
const palletes = Array.from(document.querySelectorAll('.color'));
const pixelBoard = document.querySelector('#pixel-board');

// Setting pallete colors
const setPalleteColors = () => {
  const colors = ['black', 'orange', 'red', 'blue', 'green', 'yellow'];
  palletes.map((pallete, index) => {
    pallete.style.backgroundColor = colors[index];
  });
};

// Set Pixel Grid by x Amount

const setPixelGrid = (size) => {
  for (let row = 0; row < size; row += 1) {
    const tr = document.createElement('tr');

    for (let column = 0; column < size; column += 1) {
      const td = createGenElement('td', 'pixel');
      // if (column > 0) {
      //   td.style.borderLeft = 0;
      // }
      // if (row > 0) {
      //   td.style.borderTop = 0;
      //   // td.style.height = '39px';
      // }
      tr.appendChild(td);
    }

    pixelBoard.appendChild(tr);
  }
};

// Set Color to paint

const selectPalleteColor = () => {
  palletes.map((pallete) => {
    pallete.addEventListener('click', (event) => selectColor(event.target));
  });
};

const selectColor = (element) => {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').setAttribute('class', 'color');
    element.classList.add('selected');
  } else {
    element.classList.add('selected');
  }
};

// Adding listeners to pixels
const setPixelColor = () => {
  const pixelsBoxes = Array.from(document.querySelectorAll('.pixel'));
  pixelsBoxes.map((pixel) => {
    pixel.addEventListener('click', (event) => paintFunction(event.target));
    pixel.addEventListener('click', (event) => {});
  });
};

// Paint Function

const paintFunction = (pixel) => {
  if (!document.querySelector('.selected')) {
    return;
  }
  const color = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = color;
};

// clear button
const clearAllPixels = () => {
  clearBtn.addEventListener('click', () => {
    const pixelsBoxes = Array.from(document.querySelectorAll('.pixel'));
    pixelsBoxes.map((pixel) => {
      pixel.style.backgroundColor = 'white';
    });
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').setAttribute('class', 'color');
    }
  });
};

function start() {
  setPalleteColors();
  setPixelGrid(5);
  selectPalleteColor();
  setPixelColor();
  clearAllPixels();
}
