// let colorBlack = 'black';

function setColorClass() {
  const colorSelected = document.querySelectorAll('.selected');
  const color = document.querySelectorAll('.color');

  for (let index = 0; index < color.length; index += 1) {
    // color[index].classList.remove('selected');
    color[index].addEventListener('click', function (event) {
      console.log(event.target);
      console.log(color[index].style);
      color[0].classList.remove('selected');
      color[1].classList.remove('selected');
      color[2].classList.remove('selected');
      color[3].classList.remove('selected');
      if (color[index].classList.contains('selected')) {
        color[index].classList.remove('selected');
      } else {
        color[index].classList.add('selected');
      }
      // procurar tirar o elemeto que esta selecionado previamente
      // esta selecionado pela classe
    });
  }

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
