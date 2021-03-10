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


function teste (event) {

} 
  //let teste2 = document.getElementsByClassName('selected')[0].style.black;
  
//teste 1 
// let getPixel = document.getElementsByClassName('pixel');
//  for(let index2 = 0; index2 < getPixel.length; index2+=1) {
//   getPixel[index2].addEventListener('click', function);
//  }

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
// let quadro = document.getElementsByClassName('pixel');
// for (let quadroIndex = 0; quadroIndex < quadro.length; quadroIndex += 1){
//   quadro[quadroIndex].addEventListener('click', function(event){
//     if (document.getElementsByClassName('color')[0].classList.contains('selected')) {
//       event.target.style.background = 'black';
//     } if (document.getElementsByClassName('color')[1].classList.contains('selected')) {
//       event.target.style.background = 'red';
//     } if (document.getElementsByClassName('color')[2].classList.contains('selected')) {
//       event.target.style.background = 'blue';
//     } if (document.getElementsByClassName('color')[3].classList.contains('selected')) {
//       event.target.style.background = 'green';
//     }
//   })
// }