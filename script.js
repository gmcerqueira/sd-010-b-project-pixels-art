// Cria divs color
const paletaDeCores = document.getElementById('color-palette');
for (let i = 0; i < 4; i += 1) {
  const criaPaleta = document.createElement("div");
  criaPaleta.className = 'color';
  paletaDeCores.appendChild(criaPaleta);
}

// adicionar cor as divs color
const colors = document.getElementsByClassName('color');
const black = colors[0];
const red = colors[1];
const green = colors[2];
const yellow = colors[3];
black.style.background = 'black';
red.style.background = 'red';
green.style.background = 'green';
yellow.style.background = 'yellow';

// cria tabela dos pixels a serem coloridos
const tableCreate = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  const cells = document.createElement('tr');
  tableCreate.appendChild(cells);
}
const tableCreateCells = document.querySelectorAll('pixel-board, tr');
for (let i = 0; i < tableCreateCells.length; i += 1) {
  for (let n = 0; n < tableCreateCells.length; n += 1) {
    const lines = document.createElement('td');
    lines.className = 'pixel';
    tableCreateCells[i].appendChild(lines);
  }
}