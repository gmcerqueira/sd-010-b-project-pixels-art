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

let colorSelected = document.querySelector('#black-color');

function colorSelection(event) {
  let colorSelected = document.querySelector('selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}