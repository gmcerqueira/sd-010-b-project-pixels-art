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

window.onload = function () {
  const boxColorBlack = document.querySelectorAll('.color')[0];
  boxColorBlack.className = 'color selected';
  const boxColorBlackStyle = boxColorBlack.style.backgroundColor;
  localStorage.setItem('color', boxColorBlackStyle);
};

function selectedPalette() {
  const color = document.querySelector('#color-palette');
  color.addEventListener('click', function (event) {
    event.target.className = 'color selected';
    document.querySelector('.selected').className = 'color';
  });
}
selectedPalette();
