function createPaletteColors() {
  const createBoxColor = document.createElement('div');
  createBoxColor.className = 'color';
  const colors = ['black', 'blue', 'green', 'red'];
  const boxColor = document.getElementsByClassName('color');

  for (let index = 0; index < boxColor.length; index += 1) {
    boxColor[index].style.backgroundColor = colors[index];
  }
}
createPaletteColors();

window.onload = function initializeColorBlack() {
  const boxColorBlack = document.querySelectorAll('.color')[0];
  boxColorBlack.className = 'color selected';
  const boxColorBlackStyle = boxColorBlack.style.backgroundColor;
  localStorage.setItem('color', boxColorBlackStyle);
};

function selectedPalette() {
  const color = document.querySelector('#color-palette');
  color.addEventListener('click', (event) => {
    const element = event;
    document.querySelector('.selected').className = 'color';
    element.target.className = 'color selected';
  });
}
selectedPalette();

function draw() {
  const table = document.querySelector('#pixel-board');
  table.addEventListener('click', (event) => {
    const element = event;
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    element.target.style.backgroundColor = colorSelected;
  });
}
draw();
