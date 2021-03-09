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
};
createPixelBoard(5);