function createEl(tagName) {
  let element = document.createElement(tagName);
  return element;
}

window.onload = function () {
  function setPaletteColor() {
    for (let index = 0; index < 4; index += 1) {
      let el = createEl('span');
      el.classList.add('color');
      let colorPalette = document.getElementById('color-palette');
      colorPalette.appendChild(el);
    }
    let cores = ['black', 'pink', 'green', 'lightblue'];
    let arr = document.getElementById('color-palette').childNodes;
    arr.forEach((element, index) => element.style.backgroundColor = cores[index]);
    let colors = document.getElementsByClassName('color');
    colors[0].classList.add('selected');
  }

  function setPixelBoard() {
    for (let index = 0; index < 5; index += 1) {
      for (let i = 0; i < 5; i += 1) {
        let el = createEl('span');
        el.classList.add('pixel');
        document.getElementById('pixel-board').appendChild(el);
      }
    }
  }

  function getSelected(event) {
    let el = event.target;
    if (!el.id) {
      let colors = document.querySelectorAll('.color');
      colors.forEach((el) => el.classList.remove('selected'));
      el.classList.add('selected');
    }
    sessionStorage.color = el.style.backgroundColor;
  }

  function paintPixel(event) {
    let el = event.target;
    if (!el.id) {
      let colorToPaint = sessionStorage.color;
      el.style.backgroundColor = colorToPaint;
    }
  }

  function clearBord() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((e) => e.style.backgroundColor = '');
    console.log('teste');
  }

  // ---------------------------------------------------------------
  sessionStorage.setItem('color', 'black');
  setPaletteColor();
  setPixelBoard();
  document.getElementById('color-palette').addEventListener('click', getSelected);
  document.getElementById('pixel-board').addEventListener('click', paintPixel);
  document.getElementById('clear-board').addEventListener('click', clearBord);
};
