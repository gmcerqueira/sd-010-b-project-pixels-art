// let colorPalet = document.getElementById('color-palette');
// let criarDiv = document.createElement('div');
// criarDiv.className = 'color';
// console.log(criarDiv);
// for (let index = 0; index < 4; index += 1) {
//   criarDiv;
//   colorPalet.appendChild(criarDiv);
// }

function palletCollor() {
  let pallet = [];
  for (let index = 0; index < 4; index += 1) {
    let criarDiv = document.createElement('div');
    criarDiv.className = 'color';
    pallet = document.getElementById('color-palette').appendChild(criarDiv);
  }
}
palletCollor();

function pallets () {
  let pallet = [];
  for (let indexHor = 0; indexHor < 5; indexHor += 1) {
    let criarDiv = document.createElement('div');
    pallet[indexHor] = document.getElementById('pixel-board').appendChild(criarDiv);
    for (let indexVer = 0; indexVer < 5; indexVer += 1) {
      let criarDiv = document.createElement('div');
      criarDiv.className = 'pixel';
      pallet[indexHor] = document.getElementById('pixel-board').appendChild(criarDiv);
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
