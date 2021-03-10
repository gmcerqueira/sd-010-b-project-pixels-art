function setColorClass() {
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

setColorClass();

function setPixelColor() {
  let selectedColor = document.getElementsByClassName('selected color');
  let pixel = document.querySelectorAll('.pixel');
  let color = document.querySelectorAll('.color');
  let paintColorPixel = color.style.backgroundColor;

  pixel.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedColor.length > 0 && eventTargetColor !== paintColorPixel) {
      event.target.style.color = selectedColor[0].style.backgroundColor;
    } else if (
      eventTargetColor === paintColorPixel &&
      selectedColor.length !== 0
    ) {
      event.target.style.color = 'white';
    }
  });
}

setPixelColor();
