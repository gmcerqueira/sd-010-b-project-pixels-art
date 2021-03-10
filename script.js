let color = ['black', 'red', 'blue', 'green'];
let colorPalette = document.querySelector('#color-palette');
for (let index = 0; index < color.length; index += 1) {
  let colorGround = color[index];
  let paletteItem = document.createElement('div');
  paletteItem.className = 'color';
  paletteItem.style.backgroundColor = colorGround;
  colorPalette.appendChild(paletteItem);
}