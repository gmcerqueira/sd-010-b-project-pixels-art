function createTable () {
  let table = document.getElementById('pixel-board');
  for (let indexLine = 0; indexLine < number; indexLine += 1) {
    let tableLine = document.createElement('tr');
    table.appendChild(tableLine);
        for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
            let tableColumns = document.createElement('td');
            tableColumns.className = 'pixel';
            tableColumns.style.backgroundColor = 'white';
            tableLine.appendChild(tableColumns);
        }
    }
}
let number = 5;
createTable(number);

function selectColor () {
  let pallet = document.getElementsByClassName('color');
  for (let indexPallet = 0; indexPallet < pallet.length; indexPallet += 1) {
    pallet[indexPallet].addEventListener('click',function() {
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
    })     
  }
}

selectColor();

function paintPixel () {
  let pixel = document.getElementsByClassName('pixel');
  for (let indexPixel = 0; indexPixel < pixel.length; indexPixel += 1) {
      pixel[indexPixel].addEventListener('click',function() {
        let selectedColor = document.querySelector('.selected');
        pixel[indexPixel].style.backgroundColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
    })
  }
}

paintPixel ();

function resetColor () {
  let button = document.getElementById('clear-board');
  button.addEventListener('click',function() {
    let pixel = document.getElementsByClassName('pixel');
    for (let indexPixel = 0; indexPixel < pixel.length; indexPixel += 1) {
      pixel[indexPixel].style.backgroundColor = 'white';
    }

  })
}

resetColor();

function boardSize () {
  let vqv = document.getElementById('generate-board');
  let input = document.getElementById('board-size');
  vqv.addEventListener('click',function() {
    if (input.value === '') {
      alert ("Board inválido!");
    } else {
      let tableP = document.getElementById('pixel-board');
      while (tableP.firstChild) {
        tableP.removeChild(tableP.lastChild);
      }
      createTable(number = input.value);
      paintPixel();
    }
  })
}

boardSize();