function creatDivTd(divTr, qttPixel) {
  for (let i = 1; i <= qttPixel; i += 1) {
    const divTd = document.createElement('div');
    divTd.className = 'pixel';
    divTr.appendChild(divTd);
  }
}

function generatorPixels(qttPixel) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 1; i <= qttPixel; i += 1) {
    const divTr = document.createElement('div');
    divTr.className = 'tr';
    creatDivTd(divTr, qttPixel);
    pixelBoard.appendChild(divTr);
  }
}

function clearSelected() {
  const colorDiv = document.querySelectorAll('.color');
  colorDiv.forEach((e) => {
    if (e.className === 'color selected') e.className = 'color';
  });
}

function addEventColorSelected() {
  const colorDivEvent = document.querySelectorAll('.color');
  colorDivEvent.forEach((element) => {
    element.addEventListener('click', (event) => {
      clearSelected();
      event.target.classList.add('selected');
    });
  });
}

function addEventColorInPixel() {
  const divPixel = document.querySelectorAll('.pixel');
  divPixel.forEach((element) => {
    element.addEventListener('click', (event) => {
      const divColor = document.querySelector('.selected');
      const color = getComputedStyle(divColor).backgroundColor;
      event.target.style.backgroundColor = color;
    });
  });
}

function claerPixels() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => {
    e.style.backgroundColor = 'white';
  });
}

function clearChildsPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const qtt = pixelBoard.childNodes.length;
  for (let i = qtt; i > 0; i -= 1) {
    pixelBoard.lastElementChild.remove();
  }
}

function generatePixels() {
  const qttBorderSize = document.querySelector('#board-size').value;
  if (qttBorderSize === '') {
    alert('Board inválido!');
  } else if(qttBorderSize <= 5) {
    claerPixels();
    clearChildsPixelBoard();
    generatorPixels(5);
    addEventColorInPixel();
  } else if(qttBorderSize >= 50) {
    claerPixels();
    clearChildsPixelBoard();
    generatorPixels(50);
    addEventColorInPixel();
  } else {
    claerPixels();
    clearChildsPixelBoard();
    generatorPixels(qttBorderSize);
    addEventColorInPixel();
  }
}

function btnConfig() {
  const btnclear = document.getElementById('clear-board');
  const btngGnerateboard = document.getElementById('generate-board');
  btnclear.addEventListener('click', claerPixels);
  btngGnerateboard.addEventListener('click', generatePixels);
}

generatorPixels(5);
addEventColorSelected();
addEventColorInPixel();
btnConfig();
