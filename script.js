let colorPixels = document.querySelectorAll('.color');
let colors = ['black', 'red', 'blue', 'green'];
let colorPallete = document.querySelector('#color-palette');
let colorsPalette = ['black', 'red', 'blue', 'green'];

for (let i = 0; i < colorPixels.length; i += 1) {
  colorPixels[i].style.backgroundColor = colors[i];
}

function createColorPalette(colors) {
  for (let i = 0; i < colors.length; i += 1) {
    let colorPixels = document.createElement('div');  
    colorPixels.className = 'color';
    colorPixels.style.backgroundColor = colors[i];
    colorPallete.appendChild(colorPixels);
  }
}
createColorPalette(colorsPalette);