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

function btnConfig() {
  const btnclear = document.getElementById('clear-board');
  btnclear.addEventListener('click', claerPixels);
}

generatorPixels(5);
addEventColorSelected();
addEventColorInPixel();
btnConfig();
