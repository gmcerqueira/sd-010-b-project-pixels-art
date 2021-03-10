function createTable(number) {
  const table = document.getElementById('pixel-board');
  for (let indexLine = 0; indexLine < number; indexLine += 1) {
    const tableLine = document.createElement('tr');
    table.appendChild(tableLine);
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
      const tableColumns = document.createElement('td');
      tableColumns.className = 'pixel';
      tableColumns.style.backgroundColor = 'white';
      tableLine.appendChild(tableColumns);
    }
  }
}
createTable(5);

function selectColor() {
  const pallet = document.getElementsByClassName('color');
  for (let indexPallet = 0; indexPallet < pallet.length; indexPallet += 1) {
    pallet[indexPallet].addEventListener('click', function () {
      if (pallet[indexPallet].className === 'color') {
        pallet[indexPallet].className = 'color selected';
        for (let index = 0; index < pallet.length; index += 1) {
          if (pallet[index] !== pallet[indexPallet]) {
            pallet[index].className = 'color';
          }
        }
      } else {
        pallet[indexPallet].className = 'color';
      }
    });
  }
}

selectColor();

function paintPixel() {
  const pixel = document.getElementsByClassName('pixel');
  for (let indexPixel = 0; indexPixel < pixel.length; indexPixel += 1) {
    pixel[indexPixel].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      if (selectedColor !== null){
      const getStyle =window.getComputedStyle(selectedColor);
      pixel[indexPixel].style.backgroundColor = getStyle.getPropertyValue('background-color');
      } return;
    });
  }
}

paintPixel();

function resetColor() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function () {
    const pixel = document.getElementsByClassName('pixel');
    for (let indexPixel = 0; indexPixel < pixel.length; indexPixel += 1) {
      pixel[indexPixel].style.backgroundColor = 'white';
    }
  });
}

resetColor();

function boardSize() {
  const vqv = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  vqv.addEventListener('click', function () {
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      const tableP = document.getElementById('pixel-board');
      while (tableP.firstChild) {
        tableP.removeChild(tableP.lastChild);
      }
      if (input.value > 50) {
        input.value = 50;
      } else if (input.value < 5) {
        input.value = 5;
      }
      createTable(input.value);
      paintPixel();
    }
  });
}

boardSize();

function palletColors() {
  const colors = document.getElementsByClassName('color');
  for (let indexColor = 1; indexColor < colors.length; indexColor += 1) {
    colors[indexColor].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  }
}

palletColors();
