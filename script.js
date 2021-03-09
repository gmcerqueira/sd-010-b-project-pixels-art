function setPixelClass() {
  let colorPalette = document.querySelectorAll('.color-palette');
  let colorSelected = document.querySelectorAll('.color');

  for (let item = 0; item < colorPalette.length; item += 1) {
    colorPalette[item];
    // console.log(seletecColorPalette);
    colorPalette[item].addEventListener('click', function (event) {
      console.log(event.target);
      console.log(colorPalette[item].style);

      colorPalette[item].style = colorSelected;

      console.log((colorSelected.className = 'selected'));
    });
  }
}

setPixelClass();
