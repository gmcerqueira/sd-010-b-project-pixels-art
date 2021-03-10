function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelLine.style.display = 'inline-block';
    pixelLine.style.marginTop = '70px';
    pixelBoard.appendChild(pixelLine);

    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.border = '1px solid black';
      pixel.style.width = '40px';
      pixel.style.height = '40px';
      pixel.style.backgroundColor = 'white';
      pixelLine.appendChild(pixel);
    }
  }
}

createPixelBoard();
