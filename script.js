let color = ['black', 'red', 'blue', 'green'];
const colorPalette = document.querySelector('#color-palette');
function paleta() {
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
function corInicial() {
  let cores = document.querySelectorAll('.color')[0];
  let padrao = cores.classList;
  padrao.add('selected');
}
corInicial();
