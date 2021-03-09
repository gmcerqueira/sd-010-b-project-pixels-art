// cria a tabela 5x5 dinamicamente
window.onload = function() {
  // cria a paleta de cores
  function createPalette() {
    let paletteDiv = document.getElementById('color-palette');
    let colors = ['yellow', 'blue', 'green'];
    let paletteBlack = document.createElement('div');
    paletteBlack.className = 'color selected';
    paletteBlack.style.backgroundColor = 'black';
    paletteDiv.appendChild(paletteBlack);
    for (let color of colors) {
      let palette = document.createElement('div');
      palette.className = 'color';
      palette.style.backgroundColor = color;
      paletteDiv.appendChild(palette);
    }
  }
  createPalette();

  // cria o grid de N por N
  let n = 5;
  function createGrid(size) {
    let board = document.getElementById('pixel-board');
    for (let index = 0; index < n; index += 1) {
      let row = document.createElement('TR');
      row.id = `row${index}`;
      board.appendChild(row);
      for (let index2 = 0; index2 < n; index2 += 1) {
        let cell = document.createElement('TD');
        cell.className = "pixel";
        cell.style.backgroundColor = 'white';
        row.appendChild(cell);
      }
    }
  }
  createGrid(5);

  // monitora os clicks na página

  let selected = document.getElementsByClassName('selected');
  console.log(selected);
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel') ) {
        event.target.style.backgroundColor = selected[0].style.backgroundColor;
    }
  }, false);

};