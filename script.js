function createItem(className, type) {
  let box = document.createElement(type);
  box.className = className;
  return box;
}
function palleteBox (className) {
  for (let index = 0; index < className.length; index += 1) {
  document.getElementsByClassName(className)[index].style.backgroundColor = colorArray[index];
  }
}

let paletteNumber = 4;
let boxNumber = 25;
let colorArray = ['black', 'cyan', 'yellow', 'red'];

document.getElementById('pixel-board').style.width = document.get + 'px';

for (let index = 0; index < paletteNumber; index += 1) {
  document.getElementById('color-palette').appendChild(createItem('color','td'));
  document.getElementsByClassName('color')[index].id = 'box'+[index];
}

for (let index = 0; index < boxNumber; index += 1) {
  document.getElementById('pixel-board').appendChild(createItem('pixel','td'));
  document.getElementsByClassName('pixel')[index].id = 'paint'+[index];
} 

let box0 = document.getElementById('box0');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');

// window.onload(changeClassBox0());

function changeClassBox0() {
  box0.className = 'color selected';
  box1.className = 'color';
  box2.className = 'color';
  box3.className = 'color';
}
function changeClassBox1() {
  box1.className = 'color selected';
  box0.className = 'color';
  box2.className = 'color';
  box3.className = 'color';
}
function changeClassBox2() {
  box2.className = 'color selected';
  box0.className = 'color';
  box1.className = 'color';
  box3.className = 'color';
}
function changeClassBox3() {
  box3.className = 'color selected';
  box0.className = 'color';
  box1.className = 'color';
  box2.className = 'color';
}

box0.addEventListener('click', changeClassBox0);
box1.addEventListener('click', changeClassBox1);
box2.addEventListener('click', changeClassBox2);
box3.addEventListener('click', changeClassBox3);

function resetBoard () {
  let pixelArray = document.getElementsByClassName('pixel');
  for (index = 0; index < pixelArray.length; index += 1) {
    pixelArray[index].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click',resetBoard);
palleteBox('color');


