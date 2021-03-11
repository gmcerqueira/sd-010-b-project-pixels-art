// const title = document.querySelector('#title');
// const color = document.querySelector('.color');
// const pixel = document.querySelector('.pixel');

// D7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', (event) => { // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  const colorPaletteSelected = document.getElementById(event.target.id);
  const verify = colorPaletteSelected.className;
  verify === ['#color-palette',
  event.stopPropagation(),
  document.querySelector('.selected').className = '.color',
  colorPaletteSelected.className = 'color selected'];
});

// D8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', (event) => {
  const selectedPixel = event.target;
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

// D10 - Quadro de pixels definido pela pessoa usuária.
const inputSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', () => {
  const numberRow = pixelBoard.children.length;
  let number = 0;
  (inputSize.value === '') ? (number = ''):
  (inputSize.value < 5) ? (number = 5, inputSize.value = number):
  (inputSize.value > 50) ? (number = 50, inputSize.value = number) : 
  (number = parseInt(inputSize.value));
  if (numberRow > number && number !== '') {
    for (let indexRow = 0; indexRow < numberRow; indexRow += 1) {
      if (indexRow < number) {
        for (let indexColum = 1; indexColum <= (numberRow - number); indexColum += 1) {
          let lastRow = numberRow - indexColum;
          pixelBoard.children[indexRow].removeChild(pixelBoard.children[indexRow].children[lastRow]);
        }
      } else {
        let remove = pixelBoard.lastChild;
          pixelBoard.removeChild(remove);
      }
    }
    pixelBoard.style.width = `${(number * 41)}px`;
    pixelBoard.style.height = `${(number * 41)}px`;
  } else if (numberRow < number && number !== '') {
    for (let indexRow = 0; indexRow < number; indexRow += 1) {
      if (indexRow < numberRow) {
        for (let pixels = numberRow; pixels < number; pixels += 1) {
          const pixelNew = document.createElement('tr');
          pixelNew.className = 'pixel';
          pixelBoard.children[indexRow].appendChild(pixelNew);
        }
      } else {
        for (let indexNewRow = numberRow; indexNewRow <= number; indexNewRow += 1) {
          const rowNew = document.createElement('tr');
          rowNew.className = '.tr';
          pixelBoard.appendChild(rowNew);
          break;
        }
        for (let pixels = 0; pixels < number; pixels += 1) {
          let index = indexRow;
          const pixelNew = document.createElement('td');
          pixelNew.className = 'pixel';
          pixelBoard.children[index].appendChild(pixelNew);
        }
      }
    }
    pixelBoard.style.width = `${(number * 41)}px`;
    pixelBoard.style.height = `${(number * 41)}px`;
  } else {
    number === '',
    document.alert('Board inválido!'), document.alert('Números iguais.');
  }
});
