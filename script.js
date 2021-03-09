const black = document.getElementsByClassName('black')[0];
const orangered = document.getElementsByClassName('orangered')[0];
const green = document.getElementsByClassName('green')[0];
const blue = document.getElementsByClassName('blue')[0];

const paletaCores = [black, orangered, green, blue];


black.addEventListener('click', selectColor);
orangered.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);

function deselectColor() {
    const currentColor = document.querySelector('.selected');
    currentColor.className = 'color';
  }
  
  function selectColor(event) {
    const selectedColor = event.target;
    deselectColor();
    selectedColor.className += ' selected';
  }