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

function blackColorInitial() {
  const boxColorBlack = document.querySelectorAll('.color')[0];
  boxColorBlack.className = 'selected';
  const boxColorBlackStyle = boxColorBlack.style.backgroundColor;
  localStorage.setItem('color', boxColorBlackStyle);
}
blackColorInitial();
