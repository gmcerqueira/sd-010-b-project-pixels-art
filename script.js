// const title = document.querySelector('#title');
// const color = document.querySelector('.color');
// const pixel = document.querySelector('.pixel');

// D7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', (funcao) => { // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  const colorPaletteSelected = document.getElementById(funcao.target.id);
  const verify = colorPaletteSelected.className;
  verify === '#color-palette' ? (funcao.stopPropagation()
  ) : (document.querySelector('.selected').className = 'color',
  colorPaletteSelected.className = 'selected');
});

// D8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', (funcao) => {
  const selectedPixel = funcao.target;
  const selectedColor = document.querySelector('.selected');
  const selectedColorRgb = window.getComputedStyle(selectedColor,
    null).getPropertyValue('background-color');
  selectedPixel.style.backgroundColor = selectedColorRgb;
});

// D9 - botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
const clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
