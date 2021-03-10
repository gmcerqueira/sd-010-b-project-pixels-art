let colorBlack = 'black';

function setColorClass(event) {
  const colorSelected = document.querySelectorAll('.selected');
  for (let item = 0; item < colorSelected.length; item += 1) {
    colorSelected[item].classList.remove('selected');
  }

  let eventTarget = event.target;
  eventTarget = event.target;
  colorBlack = eventTarget.style.backgroundColor;
  target.classList.add('selected');

  /*
  if (eventTarget.classList.contains('color')) {
    eventTarget.classList.add('selected');
  }
  */

  /*
  colorSelected[1].addEventListener('click', function (event) {
    console.log(event.target);
    console.log(colorSelected[item].style);
    
    // procurar tirar o elemeto que esta selecionado previamente
    // esta selecionado pela classe

    
  });*/
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
