function setPixelClass() {
  const colorPalette = document.querySelectorAll('.color-palette');
  const colorSelected = document.querySelectorAll('.color');

  for (let item = 0; item < colorPalette.length; item += 1) {
    colorPalette[item];
    // console.log(seletecColorPalette);
    colorPalette[item].addEventListener('click', function (event) {
      // console.log(event.target);
      //console.log(colorPalette[item].style);

      if (colorPalette[item].length === 0) {
        event.target.className = 'color';
      }
      console.log(colorPalette[item]);
    });
  }
}

setPixelClass();
