function createPaletteColors() {
  const createBoxColor = document.createElement('div');
  createBoxColor.className = 'color';
  let colors = ['black', 'blue', 'green', 'red'];
  const boxColor = document.getElementsByClassName('color');

  for (let index = 0; index < boxColor.length; index += 1) {
    boxColor[index].style.backgroundColor = colors[index];
  }
}
createPaletteColors();
