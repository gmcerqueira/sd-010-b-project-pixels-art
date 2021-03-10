function paleta() {
  let color = ['black', 'red', 'blue', 'green'];
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < color.length; index += 1) {
    let colorGround = color[index];
    let paletteItem = document.createElement('div');
    paletteItem.className = 'color';
    paletteItem.style.backgroundColor = colorGround;
    colorPalette.appendChild(paletteItem);
  }
}
paleta();
function quadrado() {
  const pixelsBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    let pixelcreate = document.createElement('div');
    pixelcreate.className = 'pixel';
    pixelsBoard.appendChild(pixelcreate);
  }
}
quadrado();
