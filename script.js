function setPixelClass() {
  let pixel = document.getElementsByClassName('pixel');
  let colorPalette = document.querySelectorAll('.color-palette');

  for (let item = 0; item < colorPalette.length; item += 1) {
    seletecColorPalette = colorPalette[item];
    //console.log(seletecColorPalette);
  }

  seletecColorPalette.addEventListener('click', function (event) {
    console.log(event.target);
  });
}

setPixelClass();
