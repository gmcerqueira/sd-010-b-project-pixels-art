const pixelBoard = document.getElementById('pixel-board');
const pixelBlack = document.getElementById('black');
const colors = document.getElementsByClassName('color');
// const pixelRandomOne = document.getElementById('colorOne');
// const pixelRandomTwo = document.getElementById('colorTwo');
// const pixelRandomThree = document.getElementById('colorThree');

function randomColor() {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
}

pixelBlack.style.backgroundColor = "black";
for (let index = 1; index < 4; index += 1) {
  colors[index].style.backgroundColor = randomColor();
}

// pixelRandomOne.style.backgroundColor = randomColor();
// pixelRandomTwo.style.backgroundColor = randomColor();
// pixelRandomThree.style.backgroundColor = randomColor();

function createBox() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.className = 'pixelLine';
    for (let z = 0; z < 5; z += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      line.appendChild(cell);
    }
    pixelBoard.appendChild(line);
  }
}

createBox();
