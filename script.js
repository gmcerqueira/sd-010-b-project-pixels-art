let palleteColors = document.querySelectorAll('.color');

for (let index = 0; index < palleteColors.length; index += 1) {
  palleteColors[index].addEventListener('click', function () {
    let selectedClass = document.getElementsByClassName('selected')[0];
    selectedClass.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

let colorPixels = document.getElementsByClassName('pixel');

for (let indexPixel = 0; indexPixel < colorPixels.length; indexPixel += 1) {
  colorPixels[indexPixel].addEventListener('click', function(){
    let newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    colorPixels[indexPixel].style.backgroundColor = newColor;
  });
}
