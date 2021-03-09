const black = document.getElementById('black');
const orangered = document.getElementById('orangered');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const palette = [black, orangered, green, blue];

function selectColor(event) {
  for (index in palette ) {
    if (palette[index].classList.contains('selected')) {
        palette[index].classList.remove('selected');
    }
  }
  
  event.target.classList.add('selected');
  console.log(event.target.className)
}


/*paletteListener (){
    for(color in paletaCores){
        color.addEventListener('click', selectColor)
    }
}

paletteListener ()*/

black.addEventListener('click', selectColor);
orangered.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);

function paintingPixel(event) {
    event.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  }
  
  function boardListener() {
    const pixels = document.getElementsByClassName('pixel');
    for (index in pixels) {
      pixels[index].addEventListener('click', paintingPixel);
    }
  }

  boardListener()

function deselectColor() {
    const currentColor = document.querySelector('.selected');
    currentColor.className = 'color';
  }
  
