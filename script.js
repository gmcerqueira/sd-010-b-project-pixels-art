function Quadro () {
  let maxPixel = 25;
  for(index = 1; index <= maxPixel; index+=1) {
    let getTable = document.getElementById('pixel-board');
    let createBlock = document.createElement('div');
    createBlock.className = 'pixel';
    getTable.appendChild(createBlock);
  }
}
Quadro();