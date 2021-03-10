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

let colorSection = document.querySelector('#color-palette');

colorSection.addEventListener('click', function(event) {
  let selectedColor = document.querySelector('.selected');

  if (event.target.className) {
    selectedColor.classList.remove('selected')
  } else {
    event.target.classList.add('selected')
  }
});