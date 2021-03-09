window.onload = function() {
  let divPixel = document.querySelector('#pixel-board');

  function addPixelTable() {
    for (let index = 1; index <= 5; index += 1 ){
      let lineDiv = document.createElement('div');
        for (let k = 1; k <= 5; k += 1) {
          let pixel = document.createElement('div');
            pixel.className = 'pixel';
            lineDiv.appendChild(pixel);
      }
      divPixel.appendChild(lineDiv);
    }
  }

  addPixelTable();

  function addEvents() {
    let divsPixels = document.querySelectorAll('.pixel');
    let blackElement = document.querySelector('.black');
    blackElement.className += 'selected';

    for (let index = 0; index < divsPixels.length; index += 1) {
        divsPixels[index].addEventListener('click', function() {
            divsPixels[index].className += ' pixEv';
        });
    }
  }
  addEvents();


}