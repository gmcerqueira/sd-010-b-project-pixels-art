const colorPalette = document.createElement('table');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);

const sizePalette = 4;

function createPalette() {
  for (let index = 0; index < sizePalette; index += 1) {
    const square = document.createElement('td');
    square.className = 'color';
    colorPalette.appendChild(square);
  }
};

function colorSquare() {
  const square = document.querySelectorAll('.color');
  square[0].style.backgroundColor = 'black';
  square[1].style.backgroundColor = 'blue';
  square[2].style.backgroundColor = 'green';
  square[3].style.backgroundColor = 'red';
};

createPalette();
colorSquare();
