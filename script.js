// Função feita baseada no código do colega Trybe Renan Braga e
// orientações para correção pela colega Trybe Duda Wiltiner
// eslint-disable-next-line func-names
window.onload = function () {
  pixelBoardContainer = document.getElementById('pixel-board');

  function createScreen() {
    let lines = columns = 5;
    for (let i = 0; i < lines; i += 1) {
      criaLinha = document.createElement('div');
      criaLinha.className = 'line';
      pixelBoardContainer.appendChild(criaLinha);
      for(let j = 0; j < columns; j +=1){
        criaPixel = document.createElement('div');
        criaPixel.className = 'pixel';
        criaLinha.appendChild(criaPixel);
      }
    }
  }
createScreen();



// Função utilizada pelo colega Trybe Nikolas Silva
let clearGrid= document.getElementById('clear-board');

clearGrid.addEventListener('click', clearColor);

function clearColor() {
    let clearGrid = document.querySelectorAll('.pixel');
    for (let i = 0; i < clearGrid.length; i +=1) {
        clearGrid[i].style.backgroundColor = 'white';
    }
  }
}