function createElement(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function setPaletteColor() {
  const colorPalette = '#color-palette';
  for (let index = 0; index < 4; index += 1) {
    const elem = createElement('span');
    elem.classList.add('color');
    document.querySelector(colorPalette).appendChild(elem);
  }
  const cores = ['black', 'red', 'green', 'blue'];
  const array = document.getElementById('color-palette').childNodes;
  array.forEach((element, index) => {
    const elem = element; elem.style.backgroundColor = cores[index];
  });
  const colors = document.getElementsByClassName('color');
  colors[0].classList.add('selected');
}

function setPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    for (let i = 0; i < 5; i += 1) {
      const elem = createElement('span');
      elem.classList.add('pixel');
      document.getElementById('pixel-board').appendChild(elem);
    }
  }
}

function getSelected(event) {
  const elem = event.target;
  if (!elem.id) {
    const colors = document.querySelectorAll('.color');
    colors.forEach((element) => element.classList.remove('selected'));
    elem.classList.add('selected');
  }
  sessionStorage.color = elem.style.backgroundColor;
}

function paintPixel(event) {
  const elem = event.target;
  if (!elem.id) {
    const colorToPaint = sessionStorage.color;
    elem.style.backgroundColor = colorToPaint;
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => { e.style.backgroundColor = ''; });
}
window.onload = function init() {
  sessionStorage.setItem('color', 'black');
  setPaletteColor();
  setPixelBoard();
  document.getElementById('color-palette').addEventListener('click', getSelected);
  document.getElementById('pixel-board').addEventListener('click', paintPixel);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
};
