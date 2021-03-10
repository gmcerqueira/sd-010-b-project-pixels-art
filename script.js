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
//Agradecimentos ao Renato GSolza Turma 10 - Tribo B, por ter me auxiliado a entender melhor o objetivo do desafio 7;
function clickNasPaletas (event) {
let getSelected = document.getElementsByClassName('selected')[0];
getSelected.classList.remove('selected');
event.target.classList.add('selected');
}

let getColor = document.getElementsByClassName('color');
for(let index = 0; index < getColor.length; index+=1) {
 
  getColor[index].addEventListener('click',clickNasPaletas); 
}


let getPixel = document.getElementsByClassName('pixel');
let selectedColor = document.getElementsByClassName('color');

for(let pixelIndex = 0; pixelIndex < getPixel.length; pixelIndex += 1){

  getPixel[pixelIndex].addEventListener('click', function(event){

    if (selectedColor[0].classList.contains('selected')) {
      event.target.style.background = 'black';

    } else if (selectedColor[1].classList.contains('selected')) {
      event.target.style.background = 'red';

    } else if (selectedColor[2].classList.contains('selected')) {
      event.target.style.background = 'blue';

    } else if (selectedColor[3].classList.contains('selected')) {
      event.target.style.background = 'green';
    }
})
}
