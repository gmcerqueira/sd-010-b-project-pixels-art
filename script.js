window.onload = function () {
  document.getElementById('black').classList.add('selected');
}

//Paleta de Cores
let colorPalette = ['black', 'green', 'red', 'blue'];
let nonSelected = document.getElementsByClassName('color');
let heldColor = 'red';
// let selectedPalette = document.querySelector('.selected');

//Botões da paleta de cores
let getPaletteList = document.querySelector('#color-palette');

for (index = 0; index < 4; index += 1) {
  let paletteBox = document.createElement('div');
  paletteBox.id = colorPalette[index];
  paletteBox.className = 'color';
  getPaletteList.appendChild(paletteBox);
  paletteBox.addEventListener('click', function () {
    paletteBox.classList.add('selected');
  });
}

//Número de Pixels
let pixelsList = [];
for (index = 0; index < 25; index += 1) {
  pixelsList.push(index);
};

//Criando a tabela: 
let getPixelsList = document.querySelector('#pixel-row');

for (let row = 0; row < 5; row += 1) {
  let pixelRow = document.createElement('tr');
  getPixelsList.appendChild(pixelRow);
  for (let index = 0; index < 5; index += 1) {
    let getPixelsBoxes = getPixelsList.lastChild;
    let pixelBox = document.createElement('td');
    pixelBox.className = 'pixel';
    getPixelsBoxes.appendChild(pixelBox);
    pixelBox.addEventListener('click', function () {
      pixelBox.style.backgroundColor = heldColor;     
    });
  };
};
