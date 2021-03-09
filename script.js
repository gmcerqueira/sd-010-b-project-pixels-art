window.onload = function() {
  const divPixel = document.querySelector('#pixel-board');
  function addPixelTable() {
    for (let index = 1; index <= 5; index += 1 ) {  
      let lineDiv = document.createElement('div');
      for (let k = 1; k <= 5; k += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        lineDiv.appendChild(pixel);
      }
      divPixel.appendChild(lineDiv);
    }
  }
  addPixelTable();

  function addEvents() {
    const divsPixels = document.querySelectorAll('.pixel');
    const blackElement = document.querySelector('.black');
    blackElement.className += ' selected'

    for (let index = 0; index < divsPixels.length; index += 1) {
      divsPixels[index].addEventListener('click', function() {
        divsPixels[index].className += ' pixEv';
      });
    }
  }
  addEvents()

  let selectedColor = '';
  function changeColor() {
    let color = document.querySelectorAll('.color');
      for (let i = 0; i < color.length; i += 1) {
        color[i].addEventListener('click', function(event) {
          for(let k = 0; k < color.length; k += 1) {
            color[k].classList.remove('selected')
          }
            color[i].classList.toggle('selected');
            selectedColor = event.target.id;
        })
      }  
    }
   changeColor()

  let pixel = document.querySelectorAll('.pixel');
  function paintPixel(){
    for(let i = 0; i < pixel.length; i += 1){
      pixel[i].addEventListener('click', function(){
        pixel[i].style.backgroundColor = selectedColor;
      })
    }
  }
  paintPixel()

  function clearBoard() {
    let clearButton = document.querySelector('#clear-board');
      clearButton.addEventListener('click', function() {
        for(let i = 0; i < pixel.length; i += 1) {
          pixel[i].style.backgroundColor = 'white'
        }
      })      
  }
  clearBoard()

  let buttonColor = document.querySelector('#buttonColor');
    buttonColor.addEventListener('change', function(){
      selectedColor = buttonColor.value
    })
}