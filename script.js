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
const quadro = document.querySelectorAll(".quadro");
function quadrado() {
  for (let index = 0; index < quadro.length; index += 1) {
    for (let indexQ = 1; indexQ == 5; indexQ += 1) {
      let pixelCreado = document.createElement('div');
      pixelCreado.className = 'pixel';
      quadro[index].appendChild(pixelCreado);
    }
  }
}
quadrado();
