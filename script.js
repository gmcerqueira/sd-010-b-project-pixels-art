function createColorPalette() {
  const pallet = document.createElement('ul');
  pallet.id = 'color-palette';
  document.body.appendChild(pallet);
  const colors = ['black', 'blue', 'red', 'green'];
  for (let i = 0; i < colors.length; i += 1) {
    const newColor = document.createElement('li');
    newColor.className = 'color';
    newColor.style.backgroundColor = colors[i];
    pallet.appendChild(newColor);
  }
}
function blackSquareSelected() {
  const blackSquare = document.querySelector('.color');
  blackSquare.className += ' selected';
}
window.onload = function createPixelsBoard() {
  const board = document.createElement('ul');
  board.id = 'pixel-board';
  document.body.appendChild(board);
  for (let i = 0; i < 5; i += 1) {
    const tableRow = document.createElement('div');
    tableRow.className = 'board-tr';
    board.appendChild(tableRow);
  }
  const tableRows = document.getElementsByClassName('board-tr');
  for (let i2 = 0; i2 < tableRows.length; i2 += 1) {
    for (let i3 = 0; i3 < 5; i3 += 1) {
      const pixel = document.createElement('li');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      tableRows[i2].appendChild(pixel);
    }
  }
  blackSquareSelected();
};

function selectColor() {
  const allColors = document.getElementsByClassName('color');
  for (let i = 0; i < allColors.length; i += 1) {
    allColors[i].addEventListener('click', (evt) => {
      for (let i2 = 0; i2 < allColors.length; i2 += 1) {
        allColors[i2].className = 'color';
      }
      evt.target.className += ' selected';
    });
  }
}

createColorPalette();
selectColor();
