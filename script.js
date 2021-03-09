function createPixelBox (className) {
  let pixelBox = document.createElement('div');
  pixelBox.className = className;
  return pixelBox;
}

for (let index = 0; index <= 24; index += 1 ) {
  document.getElementById('pixel-board').appendChild(createPixelBox('pixel'));
}
window.onload(document.getElementById('box1').className = 'color selected');
