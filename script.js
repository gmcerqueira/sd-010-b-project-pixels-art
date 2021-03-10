const boxes = 5;
const table = document.getElementById('pixel-board');

function pixelBoard() {
    for (let i = 0; i < boxes; i += 1) {
      const createRow = document.createElement('tr');
      table.appendChild(createRow);
      for (let i2 = 0; i2 < boxes; i2 += 1) {
        const createBox = document.createElement('td');
        table.appendChild(createBox).className = 'pixel';
      }
    }
  }
  
  pixelBoard();