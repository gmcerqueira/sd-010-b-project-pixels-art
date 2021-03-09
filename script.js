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
  let colorDiv = document.querySelectorAll('.color');
  colorDiv.forEach((e) => {
    if(e.className === 'color selected') e.className = "color";
  })
}

function addEventColorSelected() {
  let colorDivEvent = document.querySelectorAll('.color');
  colorDivEvent.forEach((element) => {
    element.addEventListener('click', (event) =>{
      clearSelected()
      event.target.className += " selected";
      console.log(event.target.className);
    })
  })
}

addEventColorSelected();
generatorPixels(5);
