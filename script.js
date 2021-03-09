window.onload = function () {
  const colorPalette = document.getElementById('color-palette');
  const boxBlack = colorPalette.children[0].children[0];
  const box1 = colorPalette.children[0].children[1];
  const box2 = colorPalette.children[0].children[2];
  const box3 = colorPalette.children[0].children[3];

  boxBlack.style.backgroundColor = '#000000';
  box1.style.backgroundColor = '#fdcb6e';
  box2.style.backgroundColor = '#fab1a0';
  box3.style.backgroundColor = '#00b894';
};
