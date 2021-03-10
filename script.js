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

function selectColor() {
  let colorSelection = document.querySelector('#color-palette');
  colorSelection.addEventListener('click', function(event) {
    let selected = event;
    document.querySelector('.selected').className = 'color';
    selected.target.event = 'color selected';
  });
}

console.log(selectColor());

