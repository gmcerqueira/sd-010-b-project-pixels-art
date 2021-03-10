const boxes = 5;
const table = document.getElementById('pixel-board');

function pixelBoard() {
  for (let i = 0; i < boxes; i += 1) {
    const createRow = document.createElement('tr');
    table.appendChild(createRow);
    for (let i2 = 0; i2 < boxes; i2 += 1) {
      const createBox = document.createElement('td');
      table.appendChild(createBox).className = 'pixel';
    }
  }
}

const blackP = document.getElementById('one');
const redP = document.getElementById('two');
const greenP = document.getElementById('three');
const yellowP = document.getElementById('four');

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

blackP.addEventListener('click', black);
redP.addEventListener('click', red);
greenP.addEventListener('click', green);
yellowP.addEventListener('click', yellow);

pixelBoard();
