window.onload = function () {
  document.querySelector('.color').classList.add('selected');
  // enter = eventoDeOrigem.target.style.backgroundColor = 'black';
}
let cor;
// let colorPalet = document.getElementById('color-palette');
// let criarDiv = document.createElement('div');
// criarDiv.className = 'color';
// console.log(criarDiv);
// for (let index = 0; index < 4; index += 1) {
//   criarDiv;
//   colorPalet.appendChild(criarDiv);
// }


function palletCollor() { 
  // let pallet = []; 
  for (let index = 0; index < 4; index += 1) {
    let criarDiv = document.createElement('div');
    criarDiv.className = 'color';
    document.getElementById('color-palette').appendChild(criarDiv);
  }
}
palletCollor();

function pallets() {
  // let pallet = [];
  for (let indexHor = 0; indexHor < 5; indexHor += 1) {
    let criarDiv = document.createElement('div');
    document.getElementById('pixel-board').appendChild(criarDiv);
    for (let indexVer = 0; indexVer < 5; indexVer += 1) {
      let criarDiv = document.createElement('div');
      criarDiv.className = 'pixel';
      document.getElementById('pixel-board').appendChild(criarDiv);
    }
  }
}
pallets();

function colorPallet() {
  getColor = document.getElementsByClassName('color');
  getColor[0].style.backgroundColor = 'black';
  getColor[1].style.backgroundColor = 'red';
  getColor[2].style.backgroundColor = 'blue';
  getColor[3].style.backgroundColor = 'yellow';
}
colorPallet();

pegarCor = document.getElementById('color-palette');
pegarCor.addEventListener('click', getCor);

receberColor = document.getElementById('pixel-board');
receberColor.addEventListener('click', receberCor);

// let cor = document.getElementsByClassName('color')[0];
// removClass = document.getElementById('color-palette')
// removClass.addEventListener('click', removClassF);

// function removClassF() {
//   let tamanhoPaletteColor = document.getElementsByClassName('.color');
//   for (let index = 0; index < tamanhoPaletteColor.length; index += 1) {
//     document.getElementsByClassName('color')[index].classList.remove('selected');
//   }
// }

function getCor(eventoDeOrigem) {
  let rem = document.getElementsByClassName('color');
  for (let index = 0; index < rem.length; index += 1) {
    document.getElementsByClassName('color')[index].classList.remove('selected');
  }
  eventoDeOrigem.target.classList.add('selected');
  cor = eventoDeOrigem.target.style.backgroundColor;
}

function receberCor(eventoDeOrigem) {
  console.log(eventoDeOrigem.target.style.backgroundColor)
  // cor = eventoDeOrigem.target.style.backgroundColor = 'black';
  eventoDeOrigem.target.style.backgroundColor = 'black';
  eventoDeOrigem.target.style.backgroundColor = cor;
  // document.getElementsByClassName('pixel') = document.getElementsByClassName('color')[0];
  // document.getElementsByClassName('pixel').nextElementSibling.style.backgroundColor = 'yellow';
}