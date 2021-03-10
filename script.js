
  //cria uma div com a classe color
  function createDivPalette() {
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

//cria divs, injeta em section e injeta section na main
for (let index = 0; index < 4; index += 1) {
  colorPalette.appendChild(createDivPalette());
}
injectMain(colorPalette);

//recupera as divs da paleta de cores e coloca o id para colorir.
let firstDiv = document.querySelector('#color-palette').firstChild;
firstDiv.id = 'black';
let secondDiv = document.querySelector('#color-palette').firstChild.nextSibling;
secondDiv.id = 'blue';
let thirdDiv = document.querySelector('#color-palette').firstChild.nextSibling.nextSibling;
thirdDiv.id = 'red';
let fourthDiv = document.querySelector('#color-palette').lastChild;
fourthDiv.id = 'yellow';
document.querySelector('#black').classList = 'color selected';


// usei como consulta para resolver o problema, a propriedade display do CSS deste site para posicionar os elementos. URL => https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css | Usei a propriedade display do CSS deste site para posicionar os elementos.

// Cria board de pixels
let boardPixel = document.createElement('div');
boardPixel.id = 'pixel-board';

for (let column = 0; column < 5; column += 1){
  let lineDiv = document.createElement('div');
    lineDiv.className = 'line';
  for (let line = 0; line < 5; line += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = 'white';
    
    lineDiv.appendChild(pixel);
  }
boardPixel.appendChild(lineDiv);
}
injectMain(boardPixel);


const divsCoorsPalette = document.getElementsByClassName('color');
  
  for (let index = 0; index < divsCoorsPalette.length; index += 1) {
    divsCoorsPalette[index].addEventListener('click', function (event){
      
      divsCoorsPalette[0].className = 'color';
      divsCoorsPalette[1].className = 'color';
      divsCoorsPalette[2].className = 'color';
      divsCoorsPalette[3].className = 'color';

      if (event.target.className === 'color'){
          event.target.className = 'color selected';
      };
    });
  };
 