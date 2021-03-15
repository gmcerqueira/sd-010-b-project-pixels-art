const colorsList = ['black', 'red', 'green', 'blue'];

let ativo;

const palletColors = document.querySelector('#color-palette');

for (let index = 0; index < colorsList.length; index += 1) {
  const color = colorsList[index];
  const palletColorItem = document.createElement('div');
  palletColorItem.classList.add('color');

  if (index === 0) {
    palletColorItem.classList.add('selected');
    ativo = 0;
  }
  palletColorItem.style.background = color;

  palletColors.appendChild(palletColorItem);
}

const pixelBoard = document.querySelector('#pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('span');
  pixel.classList.add('pixel');

  pixelBoard.appendChild(pixel);
}

let quadradosCores = document.getElementsByClassName('color');

for (let indexEvent = 0; indexEvent < quadradosCores.length; indexEvent += 1) {
  quadradosCores[indexEvent].addEventListener('click', function (evento) {
    quadradosCores[ativo].classList.remove('selected');
    quadradosCores[indexEvent].classList.add('selected');
    ativo = indexEvent;
  });
}
