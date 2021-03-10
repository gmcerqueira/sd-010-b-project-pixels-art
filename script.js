const colorPalette = document.querySelectorAll('#color-palette li');

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

// eslint-disable-next-line sonarjs/cognitive-complexity
function selectedPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const color = document.querySelector('.selected');
      if (color.matches('.selected')) {
        if (pixels[i].style.backgroundColor === `${color.style.backgroundColor}`) {
          // eslint-disable-next-line max-len
          pixels[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
        } else {
          // eslint-disable-next-line max-len
          pixels[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
        }
      } else {
        pixels[i].style.backgroundColor = 'white';
        // eslint-disable-next-line max-len
      }
    });
  }
}

selectedPixel();

function clearPixels() {
  const clearButton = document.getElementById('clear-board');
  const getPixel = document.querySelectorAll('.pixel');

  clearButton.addEventListener('click', () => {
    for (let i = 0; i < getPixel.length; i += 1) {
      getPixel[i].style.backgroundColor = 'white';
    }
  });
}

clearPixels();
