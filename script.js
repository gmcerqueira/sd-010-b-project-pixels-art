window.onload = initialSetup;

function initialSetup() {
  color1.classList.add('selected');
}

// const boardSize = document.getElementById('board-size').value;

const sizeButton = document.getElementById('generate-board');

// sizeButton.addEventListener('click',function saveSize(){
  
// })

function createPixelBoard() {
  let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);

    let pixelRowRef = document.querySelector('#pixel-board').lastChild;
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRowRef.appendChild(pixel);
    }
  }
}

createPixelBoard();


const colorsList = document.querySelectorAll('.color');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

color1.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color1.classList.add('selected');
});

color2.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color2.classList.add('selected');
});

color3.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color3.classList.add('selected');
});

color4.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color4.classList.add('selected');
});

let pixelList = document.querySelectorAll('.pixel');

pixelList.forEach(function (elem) {
  elem.addEventListener('click', function () {
    elem.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue('background-color');
  });
});

// referencia para a funcao acima disponível em: https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element

let resetButton = document.getElementById('clear-board');

resetButton.addEventListener('click', function () {
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
})

