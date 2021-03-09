const black = document.getElementsByClassName('black')[0];
const orangered = document.getElementsByClassName('orangered')[0];
const green = document.getElementsByClassName('green')[0];
const blue = document.getElementsByClassName('blue')[0];

const paletaCores = [black, orangered, green, blue];

function selectColor(event) {
  for (index in paletaCores ) {
    if (paletaCores[index].classList.contains('selected')) {
        deselectColor();
    }
  }
  
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
orangered.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);

function deselectColor() {
    const currentColor = document.querySelector('.selected');
    currentColor.className = 'color';
  }
  
