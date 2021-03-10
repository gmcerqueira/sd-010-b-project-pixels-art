function setPixelClass() {
  const colorSelected = document.querySelectorAll('.color');
  for (let item = 0; item < colorSelected.length; item += 1) {
    colorSelected[item];
    colorSelected[item].addEventListener('click', function (event) {
      console.log(event.target);
      console.log(colorSelected[item].style);
      if (colorSelected[item] !== 'selected') {
        event.target.classList.add('selected');
      } else {
        event.target.classList.remove('selected');
      }
    });
  }
}

setPixelClass();
