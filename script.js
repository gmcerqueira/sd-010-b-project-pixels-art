// let colorPalet = document.getElementById('color-palette');
// let criarDiv = document.createElement('div');
// criarDiv.className = 'color';
// console.log(criarDiv);
// for (let index = 0; index < 4; index += 1) {
//   criarDiv;
//   colorPalet.appendChild(criarDiv);
// }

function crindoDivs() {
  let pallet = [];
  for (let index = 0; index < 4; index += 1) {
    let criarDiv = document.createElement('div');
    criarDiv.className = 'color';
    pallet = document.getElementById('color-palette').appendChild(criarDiv);
  }
}
crindoDivs();

function colorPallet() {
  getColor = document.getElementsByClassName('color');
  getColor[0].style.backgroundColor = 'black';
  getColor[1].style.backgroundColor = 'red';
  getColor[2].style.backgroundColor = 'blue';
  getColor[3].style.backgroundColor = 'yellow';
}
colorPallet();
