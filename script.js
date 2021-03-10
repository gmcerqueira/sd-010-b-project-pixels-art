const boxes = 5;
const table = document.getElementById('pixel-board');
const getIt = document.getElementsByClassName('pixel');
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
      getIt[getIt.length - 1].id = `cell-${i + 1}-${i2 + 1}`;
      getIt[getIt.length - 1].style.background = '#ffffff';
    }
  }
}

function listen() {
  table.addEventListener('click', function (event) {
    event.target.style.background = document.getElementsByClassName('selected')[0].style.background;
  });
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

function clean () {
    for (let i = 0; i < boxes; i += 1) {
        for (let i2 = 0; i < boxes; i += 1) {
            document.getElementById(`cell-${i + 1}-${i2 + 1}`).style.background = '#ffffff';    
        }
    }
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
