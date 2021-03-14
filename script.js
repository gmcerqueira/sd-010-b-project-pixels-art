const boxes = 5;
const table = document.getElementById('pixel-board');
const pixelID = document.getElementsByClassName('pixel');
const blackP = document.getElementById('one');
const redP = document.getElementById('two');
const greenP = document.getElementById('three');
const yellowP = document.getElementById('four');

function pixelBoard() {
  for (let i = 0; i < boxes; i += 1) {
    const createRow = document.createElement('tr');
    table.appendChild(createRow);
    for (let i2 = 0; i2 < boxes; i2 += 1) {
      const createBox = document.createElement('td');
      table.appendChild(createBox).className = 'pixel';
      pixelID[pixelID.length - 1].id = `cell-${i + 1}-${i2 + 1}`;
      pixelID[pixelID.length - 1].style.background = '#ffffff';
    }
  } 
}

function black() {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  blackP.classList.add('selected');
}

function red() {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  redP.classList.add('selected');
}

function green() {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  greenP.classList.add('selected');
}

function yellow() {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  yellowP.classList.add('selected');
}

function cleanNow() {
  const button = document.getElementById('clean');
  button.addEventListener('click', clean);
}

blackP.addEventListener('click', black);
redP.addEventListener('click', red);
greenP.addEventListener('click', green);
yellowP.addEventListener('click', yellow);

pixelBoard();
listen();
cleanNow();
