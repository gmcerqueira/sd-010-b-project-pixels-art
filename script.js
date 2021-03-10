const black = document.getElementById('black');
const orangered = document.getElementById('orangered');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const palette = [black, orangered, green, blue];

function selectColor(event) {
  for (let index = 0; index < palette.length; index++ ) {
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
    for (let index = 0; index < pixels.length; index++) {
      pixels[index].addEventListener('click', paintingPixel);
    }
  }

  boardListener()


  function clearBoard() {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index++) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
  
  const clickButton = document.getElementById('clear-board');
  clickButton.addEventListener('click', clearBoard);


  function createTabPixels() {
  const valueFromInput = document.getElementById('board-size');
  if (valueFromInput.value === ''){
    alert('Board inválido!');
    return null;
  }
  const tabela = document.getElementById('pixel-board');
  tabela.innerHTML = '';
  for (let tr = 0; tr < valueFromInput.value; tr+= 1) {
    const elementByTable = document.createElement('tr');
    tabela.appendChild(elementByTable);
    for (let index = 0; index < valueFromInput.value; index += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      elementByTable.appendChild(td);
    }
  }
  boardListener()
}

const btGenBoard = document.getElementById('generate-board');
btGenBoard.addEventListener('click', createTabPixels);

  
