const paletteBox = document.getElementById('color-palette');
const array = [1, 2, 3, 4];

function createDivs() {
  for (let index = 0; index < array.length; index += 1) {
    let createColors = document.createElement('div');
    createColors.className = 'color';
    paletteBox.appendChild(createColors);
  }
  return paletteBox;
}

createDivs();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'orange';
