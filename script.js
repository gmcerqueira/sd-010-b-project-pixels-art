let colorPalette = document.getElementById('color-palette');
let black = colorPalette.children[0].children[0];
let cor1 = colorPalette.children[0].children[1];
let cor2 = colorPalette.children[0].children[2];
let cor3 = colorPalette.children[0].children[3];

// código retirado do forum https://stackoverflow.com/questions/1484506/random-color-generator

function getRancomColor() {
  let color = '#';
   const letters = '0123456789ABCDEF';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

black.style.backgroundColor = 'black';
cor1.style.backgroundColor = getRancomColor();
cor2.style.backgroundColor = getRancomColor();
cor3.style.backgroundColor = getRancomColor();
