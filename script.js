function createPixelGrid(gridSize) {
  const pixelGrid = document.querySelector('#pixel-board');

  for (let lineIndex = 0; lineIndex < gridSize; lineIndex += 1) {
    const createPixelsLine = document.createElement('div');
    createPixelsLine.className = 'tr'; 

    pixelGrid.appendChild(createPixelsLine);

    for (let columIndex = 0; columIndex < gridSize; columIndex += 1) {
      const createPixelsColum = document.createElement('div');
      createPixelsColum.className = 'td pixel';

      createPixelsLine.appendChild(createPixelsColum);
    }
  }
}

createPixelGrid(5); 

const colorSelected = document.querySelectorAll('.color');

function selectColor() {
  let colorSelection = document.getElementsByClassName('color');
  for (let index =0; index < colorSelection.length; index += 1) {
    colorSelection[index].addEventListener('click', function(event) {
      for (let indexRemove = 0; indexRemove < colorSelection.length; indexRemove += 1) {
        colorSelection[indexRemove].classList.remove('selected');
      }
      colorSelection[index].classList.add('selected');
    })
  }
}

selectColor();