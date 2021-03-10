function criarCores() {
  let pai = document.getElementById('color-palette');
 
  for(i = 0; i < 4; i += 1 ) {
    let filho = document.createElement('li');
    filho.className = 'color';
    pai.appendChild(filho);
  }
  let cor = document.getElementsByClassName('color');
  
  let black = cor[0];
  let green = cor[1];
  let red = cor[2];
  let blue = cor[3];

  black.style.backgroundColor = 'black';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  blue.style.backgroundColor = 'blue';
} 
criarCores()

function criarQuadro() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      let filho = document.createElement('li');
      filho.className = 'pixel';
      document.getElementById('pixel-board').appendChild(filho);
    }
  }
} 
criarQuadro()

function CorPretaSelected() {
  let blackColor = document.getElementsByClassName('color')[0];
  blackColor.className = 'selected';  
} 
CorPretaSelected()


  