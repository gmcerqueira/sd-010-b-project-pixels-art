function createPixelBox(className) {
  let pixelBox = document.createElement('div');
  pixelBox.className = className;
  return pixelBox;
}

for (let index = 0; index <= 24; index += 1) {
  document.getElementById('pixel-board').appendChild(createPixelBox('pixel'));
}
// window.onload((document.getElementById('box1').className = 'color selected'));
function getBox (boxId) {
  document.getElementById(boxId);
}
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');

function changeClassBox1 () {
  box1.className = 'color selected';
  box2.className = 'color';
  box3.className = 'color';
  box4.className = 'color';
}
function changeClassBox2 () {
  box2.className = 'color selected';
  box1.className = 'color';
  box3.className = 'color';
  box4.className = 'color';
}
function changeClassBox3 () {
  box3.className = 'color selected';
  box1.className = 'color';
  box2.className = 'color';
  box4.className = 'color';
}
function changeClassBox4 () {
  box4.className = 'color selected';
  box1.className = 'color';
  box2.className = 'color';
  box3.className = 'color';
}

box1.addEventListener('click', changeClassBox1);
box2.addEventListener('click', changeClassBox2);
box3.addEventListener('click', changeClassBox3);
box4.addEventListener('click', changeClassBox4);

