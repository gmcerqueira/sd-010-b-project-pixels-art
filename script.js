let palleteColors = document.querySelectorAll('.color');
let buttonClear = document.getElementById('clear-board');

function pixelCreate() {
  let quadro = document.getElementById('pixel-board');
  for (let j = 0; j < 5; j += 1) {
    let line = document.createElement('div');
    for (let h = 0; h < 5 ; h += 1) {
    let column = document.createElement('div');  
    column.classList.add('pixel');
    line.appendChild(column);
    } 
    quadro.appendChild(line);
  }
}
pixelCreate();

for (let index = 0; index < palleteColors.length; index += 1) {
  palleteColors[index].addEventListener('click', function () {
    let selectedClass = document.getElementsByClassName('selected')[0];
    selectedClass.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

function selectColor() {
  let color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function colorPixels() {
  let board =  document.getElementById('pixel-board');
  board.addEventListener('click', selectColor);
}
colorPixels();

function clear() {
  let pixelsBoard = document.querySelectorAll('.pixel');
  buttonClear.addEventListener('click', () => {
    for (let index = 0; index < pixelsBoard.length; index += 1) {
      pixelsBoard[index].style.backgroundColor = 'white';
    }
  });
}
clear();

document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
document.getElementsByClassName('color')[1].style.backgroundColor = 'rgb(200,56,154)';
document.getElementsByClassName('color')[2].style.backgroundColor = 'rgb(101,255,173)';
document.getElementsByClassName('color')[3].style.backgroundColor = 'rgb(13,36,98)';