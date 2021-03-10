let color = ['black', 'red', 'blue', 'green'];
const trocarCor = document.querySelector('#color-palette');
function palette() {
  for (let index = 0; index < color.length; index += 1) {
    let colorGround = color[index];
    let paletteItem = document.createElement('div');
    paletteItem.className = 'color';
    paletteItem.style.backgroundColor = colorGround;
    trocarCor.appendChild(paletteItem);
  }
}
palette();
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
  cores.classList.add('selected');
}
corInicial();
function trocar () {
  let trocarCor = document.querySelectorAll('.color');
  trocarCor[0].addEventListener('click', function() {
    trocarCor[0].classList.add('selected');
    trocarCor[1].classList.remove('selected');
    trocarCor[2].classList.remove('selected');
    trocarCor[3].classList.remove('selected');
  });
  trocarCor[1].addEventListener('click', function() {
    trocarCor[1].classList.add('selected');
    trocarCor[0].classList.remove('selected');
    trocarCor[2].classList.remove('selected');
    trocarCor[3].classList.remove('selected');
  });
  trocarCor[2].addEventListener('click', function() {
    trocarCor[2].classList.add('selected');
    trocarCor[0].classList.remove('selected');
    trocarCor[1].classList.remove('selected');
    trocarCor[3].classList.remove('selected');
  });
  trocarCor[3].addEventListener('click', function() {
    trocarCor[3].classList.add('selected');
    trocarCor[0].classList.remove('selected');
    trocarCor[1].classList.remove('selected');
    trocarCor[2].classList.remove('selected');
  });
}
