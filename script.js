const pallete = document.getElementById('color-palette');
const squearePixel = document.getElementById('pixel-board');

function viewPallete() {
  for (let index = 0; index < 4; index += 1) {
    const box = document.createElement('div');
    box.className = 'color';
    pallete.appendChild(box);
  }
  return pallete;
}
viewPallete();

function createSquarePixel() {
  for (let index = 0; index < 25; index += 1) {
    const box2 = document.createElement('div');
    box2.className = 'pixel';
    squearePixel.appendChild(box2);
  }
  return squearePixel;
}
createSquarePixel();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[0].className += ' selected';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';
