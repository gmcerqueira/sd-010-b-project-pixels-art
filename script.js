// Funções utilizadas

// Array de cores para a paleta
const colors = ['yellow', 'blue', 'green', 'red',
  'orange', 'brown', 'grey', 'aqua', 'khaki', 'lime',
  'beige', 'coral', 'cyan', 'crimson', 'gray', 'ivory',
  'lavender', 'magenta', 'linen', 'maroon', 'moccasin',
  'navy', 'olive', 'orchid', 'pink', 'plum', 'peru',
  'purple', 'salmon', 'sienna', 'silver', 'tan',
  'thistle', 'teal', 'tomato', 'turquoise', 'violet', 'wheat'];

function createPalette() {
  const paletteDiv = document.getElementById('color-palette');
  const paletteBlack = document.createElement('div');
  paletteBlack.className = 'color selected';
  paletteBlack.style.backgroundColor = 'black';
  paletteDiv.appendChild(paletteBlack);
  for (let index = 0; index < 3; index += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';
    const number = Math.ceil((Math.random()) * colors.length);
    console.log(number);
    palette.style.backgroundColor = colors[number];
    paletteDiv.appendChild(palette);
  }
}

function createGrid(size) {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    const row = document.createElement('TR');
    row.id = `row${index}`;
    board.appendChild(row);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const cell = document.createElement('TD');
      cell.className = 'pixel';
      cell.style.backgroundColor = 'white';
      row.appendChild(cell);
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function resizeMinMax(parameter) {
  if (parameter < 5) {
    return 5; 
  }
  if (parameter > 50) {
    return 50; 
  }
}

window.onload = function () {
  // cria a paleta de cores
  createPalette();

  // cria o grid de N por N
  createGrid(5);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color') && !event.target.classList.contains('selected')) {
      document.querySelectorAll('.selected')[0].className = 'color';
      event.target.className = 'color selected';
    }

    if (event.target.classList.contains('pixel')) {
      const selected = document.getElementsByClassName('selected');
      event.target.style.backgroundColor = selected[0].style.backgroundColor;
    }

    if (event.target.id === 'clear-board') {
      const pixelList = document.querySelectorAll('.pixel');
      for (let pixel of pixelList) {
        pixel.style.backgroundColor = 'white';
      }
    }

    if (event.target.id === 'generate-board') {
      const size = document.getElementById('board-size');
      if (size.value && size.value > 0) {
        size.value = resizeMinMax(size.value);
        const parent = document.getElementById('pixel-board');
        removeAllChildNodes(parent);
        createGrid(Number(size.value));
      } else {
        alert('Board inválido!');
      }
    }
  }, false);
};
