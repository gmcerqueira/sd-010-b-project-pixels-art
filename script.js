createPixelBoard(5);
selected();


function createPixelBoard(numberPixels) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let column = 0; column < numberPixels; column += 1) {
    const createColumn = document.createElement('div');
    createColumn.className = 'tr';
    pixelBoard.appendChild(createColumn);
    for (let row = 0; row < numberPixels; row += 1) {
      const createRow = document.createElement('div');
      createRow.className = 'pixel td';
      createColumn.appendChild(createRow);
    }
  }
}

function selected() {
  const colorBox = document.querySelectorAll('.color');  
  for (let index = 0; index < colorBox.length; index += 1) {
    colorBox[index].addEventListener('click', () => {
      for (let i = 0; i < colorBox.length; i += 1) {
        colorBox[i].classList.remove('selected');
      }
      colorBox[index].classList.add('selected');
      changeColor();
    })
  }
}

function changeColor() {
  const colorBox = document.querySelectorAll('.color');
  const selected = document.querySelector('.selected');
  
  for (let index = 0; index < colorBox.length; index += 1) {   
    const classListColor = colorBox[index].classList;
    if (classListColor[2] === 'selected') {      
      selected.style.backgroundColor = `${classListColor[1]}`;       
    }      
  }
}
