const colorPalette = document.querySelectorAll('#color-palette li');

// eslint-disable-next-line max-lines-per-function
function changeColor() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[0].addEventListener('click', () => {
      colorPalette[0].classList.add('selected');
      colorPalette[1].classList.remove('selected');
      colorPalette[2].classList.remove('selected');
      colorPalette[3].classList.remove('selected');
    });
    colorPalette[1].addEventListener('click', () => {
      colorPalette[1].classList.add('selected');
      colorPalette[0].classList.remove('selected');
      colorPalette[2].classList.remove('selected');
      colorPalette[3].classList.remove('selected');
    });
    colorPalette[2].addEventListener('click', () => {
      colorPalette[2].classList.add('selected');
      colorPalette[0].classList.remove('selected');
      colorPalette[1].classList.remove('selected');
      colorPalette[3].classList.remove('selected');
    });
    colorPalette[3].addEventListener('click', () => {
      colorPalette[3].classList.add('selected');
      colorPalette[0].classList.remove('selected');
      colorPalette[1].classList.remove('selected');
      colorPalette[2].classList.remove('selected');
    });
  }
}

changeColor();
