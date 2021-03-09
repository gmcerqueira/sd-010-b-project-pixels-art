function pixelBox (className) {
  let pixelBox = document.createElement('div');
  pixelBox.className = className;
  return pixelBox;
}

for (index = 0; index <= 24; index += 1 ) {
  document.getElementById('pixel-board').appendChild(pixelBox('pixel'));
}