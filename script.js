let colors = ['black', 'red', 'green', 'blue', 'yellow'];

let h1 = document.getElementById('title');
h1.insertAdjacentHTML('afterend', '<div id="color-palette"></div>');
fillLineColor();

function fillLineColor() {
  let colorPalette = document.getElementById('color-palette');
  for (let i = 0; i < colors.length; i += 1) {
    let color = document.createElement('div');
    color.className = 'color';
    colorPalette.appendChild(color);
  }
  pixelColor();
}

function pixelColor() {
  let bgColor = document.getElementsByClassName('color');
  for (let i = 0; i < bgColor.length; i += 1) {
    bgColor[i].style.backgroundColor = colors[i];
  }
}