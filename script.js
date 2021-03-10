// const title = document.querySelector('#title');
const colorPalette = document.querySelector('#color-palette');
// const color = document.querySelector('.color');
const pixelBoard = document.querySelector('#pixel-board');
// const pixel = document.querySelector('.pixel');

colorPalette.addEventListener('click', event => { // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  const colorSelected = document.getElementById(event.target.id);
  const verify = colorSelected.className;
  verify === 'color-palette' ? (
  event.stopPropagation()
  ) : (
    document.querySelector('.selected').className = 'color',
    colorSelected.className = 'color selected')
}, false);

pixelBoard.addEventListener('click', event => {
  const selectedPixel = event.target;
  const selectedColor = document.querySelector('.selected');
  const selectedColorRgb = window.getComputedStyle(selectedColor, 
    null).getPropertyValue('background-color');
  selectedPixel.style.backgroundColor = selectedColorRgb;
});
