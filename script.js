function setColorClass() {
  const color = document.querySelectorAll('.color');

  for (let index = 0; index < color.length; index += 1) {
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
    });
  }
}

setColorClass();

function setPixelColor() {
  let selectedColor = document.getElementsByClassName('selected');
  let pixels = document.querySelectorAll('.pixel');
  let ColorDiv = document.querySelector('.color');
  let getColorDiv = ColorDiv.style.backgroundColor;
  //  console.log(selectedColor);
  for (let item = 0; item < selectedColor.length; item += 1) {
    selectedColor[item];
    console.log(selectedColor[item]);

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index];
      console.log(pixels[index]);

      pixels[index].addEventListener('click', function (event) {
        console.log(pixels[index]);
        if (selectedColor[item].classList.contains('black')) {
          pixels[index].style.backgroundColor = 'black';
        } else if (selectedColor[item].classList.contains('red')) {
          pixels[index].style.backgroundColor = 'red';
        } else if (selectedColor[item].classList.contains('green')) {
          pixels[index].style.backgroundColor = 'green';
        } else {
          pixels[index].style.backgroundColor = 'blue';
        }
      });
    }
  }
}

setPixelColor();
