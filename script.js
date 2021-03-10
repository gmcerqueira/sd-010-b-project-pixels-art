function Quadro () {
  let maxPixel = 25;
  for(index = 1; index <= maxPixel; index+=1) {
    let getTable = document.getElementById('pixel-board');
    let createBlock = document.createElement('div');
    createBlock.className = 'pixel';
    getTable.appendChild(createBlock);
  }
}
Quadro();
//Agradecimentos ao Renato GSolza Turma 10 - Tribo B, por ter me auxiliado a entender melhor o objetivo do desafio
function clickNasPaletas () {
let getPixel = document.getElementsByClassName('selected')[0];
getPixel.classList.remove('selected');
event.target.classList.add('selected');
}

let getColor = document.getElementsByClassName('color');
for(let index = 0; index < getColor.length; index+=1) {
 
  getColor[index].addEventListener('click',clickNasPaletas); 
}
