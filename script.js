const colorPalette = document.getElementById('color-palette');
const boxBlack = colorPalette.children[0].children[0];
const box1 = colorPalette.children[0].children[1];
const box2 = colorPalette.children[0].children[2];
const box3 = colorPalette.children[0].children[3];

// código retirado do forum https://stackoverflow.com/questions/1484506/random-color-generator
// código gera cores aleatórias
function getRancomColor() {
  let color = '#';
  const letters = '0123456789ABCDEF';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

boxBlack.style.backgroundColor = 'black';
box1.style.backgroundColor = getRancomColor();
box2.style.backgroundColor = getRancomColor();
box3.style.backgroundColor = getRancomColor();
