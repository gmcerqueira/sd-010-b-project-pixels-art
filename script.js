window.onload = function() {
  let firstDiv = document.querySelector("#pixel-board")
  
  function addPixelTable() {
    for (let i = 0; i <= 5; i += 1){
      let linePixel = document.createElement('div');
      for (let columPixel = 1 columPixel <= 5; columPixel += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        linePixel.appendChild(pixel);
      }
      firstDiv.appendChild(linePixel);
    }
  }
  addPixelTable();
}