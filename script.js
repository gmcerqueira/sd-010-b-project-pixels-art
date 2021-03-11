function randomColor() {
  let color = document.querySelectorAll(".color");
  for(let index = 0; index < color.length; index += 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let generatedColor = `rgb(${r}, ${g}, ${b})`;
      color[index].style.backgroundColor = generatedColor;
  }
    color[0].style.backgroundColor = "rgba(0, 0, 0, 1)";
}

// Dei uma olhada nesse site para as cores aleatórias! src: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function selectColor(selected) {
  let oldColor = document.querySelector(".selected");
  oldColor.classList.remove("selected");
  let newColor = selected.target;
  newColor.classList.add("selected");
}

function clear() {
  const paintedPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < paintedPixels.length; index += 1) {
    if (paintedPixels[index].classList.contains('painted')) {
    paintedPixels[index].style.backgroundColor = 'white';
    paintedPixels[index].classList.remove('painted');
  }
}
}
document.getElementById("clear-board").addEventListener("click", clear);

function paintPixels() {
  const colorBlack = document.getElementById('black');
  const colorBlue = document.getElementById('blue');
  const colorRed = document.getElementById('red');
  const colorGreen = document.getElementById('green');
  const fullClass = 'color selected'
  if (colorBlack.className === fullClass) {
    this.style.backgroundColor = 'black';
  } else if (colorBlue.className === fullClass) {
    this.style.backgroundColor = 'blue';
  } else if (colorRed.className === fullClass) {
    this.style.backgroundColor = 'red';
  } else if (colorGreen.className === fullClass) {
    this.style.backgroundColor = 'green';
  }
}

  const pixelColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelColor.length; index += 1) {
    pixelColor[index].classList.add('painted');
    pixelColor[index].addEventListener('click', paintPixels);
}



document.getElementById("color-palette").addEventListener("click", selectColor);
