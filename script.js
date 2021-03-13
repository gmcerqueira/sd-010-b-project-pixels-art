// Função feita baseada no código do colega Trybe Renan Braga e
// correções realizadas junto com a colega Trybe Duda Wiltiner

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
    let clearPixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < clearPixel.length; i +=1) {
        clearPixel[i].style.backgroundColor = 'white';
    }
  }

//Função utilizada pela colega Trybe Aline Barbosa
  let setColor = document.getElementsByClassName('color');
  for(let i =0; i < setColor.length; i+=1){
  setColor[i].addEventListener('click', selectColor);
}
function selectColor(event){
document.getElementsByClassName('selected')[0].
classList.remove('selected');
event.target.classList.add('selected');
 }
} 