const pixelBoard = document.getElementById('pixel-board');

function createBox() {
  for (let i = 0; i < 5; i+= 1) {
    const line = document.createElement('div');
    line.className = 'pixelLine';
    for (let z = 0; z < 5; z+= 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      line.appendChild(cell);
    }
    pixelBoard.appendChild(line);
  }
}

createBox();
