// ---------------------------------------------------
// BOARD
// Criação da div .row

const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  pixelBoard.appendChild(rowDiv);
}

// Criação da div .pixel

const rowDiv = document.getElementsByClassName('row');

for (let i = 0; i < rowDiv.length; i += 1) {
  for (let j = 0; j < rowDiv.length; j += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    rowDiv[i].appendChild(pixelDiv);
  }
}

// ---------------------------------------------------
// Mudança da Classe .selected

const black = document.querySelector('.black');
const second = document.querySelector('.second-color');
const third = document.querySelector('.third-color');
const fourth = document.querySelector('.fourth-color');

function teste () {
  black.classList.remove('selected');
  second.classList.remove('selected');
  third.classList.remove('selected');
  fourth.classList.remove('selected');
  this.classList.add('selected');
};

black.addEventListener('click', teste);
second.addEventListener('click', teste);
third.addEventListener('click', teste);
fourth.addEventListener('click', teste);
