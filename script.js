function setColorClass() {
  const colorSelected = document.querySelectorAll('.color');
  for (let item = 0; item < colorSelected.length; item += 1) {
    colorSelected[item];
    colorSelected[item].addEventListener('click', function (event) {
      console.log(event.target);
      console.log(colorSelected[item].style);

      if (colorSelected[item].classList.contains('selected')) {
        event.target.classList.remove('selected');
      } else {
        event.target.classList.add('selected');
      }
    });
  }
}

setColorClass();

function setPixelColor() {
  let selectedColor = document.querySelector('.selected');
  let pixel = document.querySelectorAll('.pixel');
  let color = document.querySelectorAll('.color');
  // let paintColorPixel = color.style.backgroundColor;

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      if (selectedColor !== pixel[index].style.color) {
        pixel[0].style.backgroundColor = 'red';
      }
    });
  }
}

setPixelColor();
