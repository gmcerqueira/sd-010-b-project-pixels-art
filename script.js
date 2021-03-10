function setPixelClass() {
  // const colorPalette = document.querySelectorAll('.color-palette');
  const colorSelected = document.querySelectorAll('.color');

  for (let item = 0; item < colorSelected.length; item += 1) {
    colorSelected[item];
    // console.log(seletecColorPalette);
    colorSelected[item].addEventListener('click', function (event) {
      console.log(event.target);
      console.log(colorSelected[item].style);

      if (colorSelected[item].classList !== 'selected') {
        colorSelected[item].classList.add('selected');
      } else if (colorSelected[item].classList) {
        colorSelected[item].classList.remove('selected');
      }

      // colorPalette[item].classList.remove('selected');
    });
  }
}

setPixelClass();
