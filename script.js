//cria uma div com a classe color
function createDiv(idElement) {
  let paletteDiv = document.createElement('div');
  paletteDiv.className = 'color'
  return paletteDiv
}
//recebe uma variavel e injeta na main
function injectMain(element) {
  const elementMain = document.querySelector('main');
  elementMain.appendChild(element);
  return elementMain;
}

// adiciona titulo
const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
injectMain(title);

//cria section para paleta de cores
let colorPalette = document.createElement('section');
colorPalette.id = 'color-palette';

//cria divs e injeta em section e injeta section na main
for (let index = 0; index < 4; index += 1) {
  colorPalette.appendChild(createDiv());
}
injectMain(colorPalette);

let firstDiv = document.querySelector('#color-palette').firstChild;
firstDiv.id = 'black';
let secondDiv = document.querySelector('#color-palette').firstChild.nextSibling;
secondDiv.id = 'blue';
let thirdDiv = document.querySelector('#color-palette').firstChild.nextSibling.nextSibling;
thirdDiv.id = 'red';
let fourthDiv = document.querySelector('#color-palette').lastChild;
fourthDiv.id = 'yellow';

