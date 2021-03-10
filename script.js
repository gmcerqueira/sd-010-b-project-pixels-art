function colourSetUp(colorArray) {
  let colors = colorArray;
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'blue';
  colors[3].style.backgroundColor = 'green';
}

window.onload = function () {
  function paletteColour(number) {
    const divFather = document.createElement('div');
    divFather.setAttribute('id', 'color-palette');
    document.body.appendChild(divFather);
    for (let i = 0; i < number; i += 1) {
      const colorPallete = document.createElement('div');
      colorPallete.setAttribute('class', 'color');
      divFather.appendChild(colorPallete);
    }
    const colorsDiv = document.querySelectorAll('.color');
    colourSetUp(colorsDiv);
  }

  function makeBoard() {
    const pixelBoard = document.createElement('div'); //table
    pixelBoard.setAttribute('id', 'pixel-board')
    document.body.appendChild(pixelBoard);
    for (let i = 0; i < 5; i += 1) {
      const headRow = document.createElement('div') //th
      headRow.setAttribute('class', 'row-head');
      pixelBoard.appendChild(headRow);
      for (let j = 0; j < 5; j += 1) {
        const lineElemento = document.createElement('div') //td
        lineElemento.setAttribute('class', 'pixel')
        headRow.appendChild(lineElemento);
      }
    }
  }

  function selectedBlack() {
    let colorsDiv = document.querySelectorAll('.color');
    for (let k = 0; k < colorsDiv.length; k += 1) {
      if (colorsDiv[k].style.backgroundColor === 'black') {
        colorsDiv[k].className = 'color selected';
      }
    }
  }

  paletteColour(4);
  makeBoard();
  selectedBlack();
};
