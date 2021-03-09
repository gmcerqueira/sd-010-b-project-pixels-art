// cria a tabela 5x5 dinamicamente
window.onload = function () {
  // cria a paleta de cores
  function createPalette() {
    const paletteDiv = document.getElementById('color-palette');
    const colors = ['yellow', 'blue', 'green'];
    const paletteBlack = document.createElement('div');
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
  function createGrid(size) {
    const board = document.getElementById('pixel-board');
    for (let index = 0; index < size; index += 1) {
      let row = document.createElement('TR');
      row.id = `row${index}`;
      board.appendChild(row);
      for (let index2 = 0; index2 < size; index2 += 1) {
        let cell = document.createElement('TD');
        cell.className = 'pixel';
        cell.style.backgroundColor = 'white';
        row.appendChild(cell);
      }
    }
  }
  createGrid(5);

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color') && !event.target.classList.contains('selected')){
      document.querySelectorAll('.selected')[0].className = 'color';
      event.target.className = 'color selected';
      console.log(event.target.className);
    }

    if (event.target.classList.contains('pixel') ) {
      let selected = document.getElementsByClassName('selected');
      event.target.style.backgroundColor = selected[0].style.backgroundColor;
    }

    if (event.target.id === 'clear-board') {
      let pixelList = document.querySelectorAll('.pixel');
      for (let pixel of pixelList) {
        pixel.style.backgroundColor = 'white';
      }
    }

    if (event.target.id === 'generate-board') {
      const size = document.getElementById('board-size');
      if (size.value && size.value > 0) {
        if (size.value < 5) {size.value = 5}
        if (size.value > 50) {size.value = 50}
        const parent = document.getElementById('pixel-board');
        removeAllChildNodes(parent);
        createGrid(Number(size.value));
      } else {
        alert("Board inválido!");
      }
    }
  }, false);
};
