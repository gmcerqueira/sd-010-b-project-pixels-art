
let corSalva = 'black';
let aux;

let blackBox = document.getElementById('blackBox');
let blueBox = document.getElementById('blueBox');
let redBox = document.getElementById('redBox');
let greenBox = document.getElementById('greenBox'); 

blackBox.style.backgroundColor = 'black';
blueBox.style.backgroundColor = 'blue';
redBox.style.backgroundColor = 'red';
greenBox.style.backgroundColor = 'green';

function selectedBlackBox() {
  blackBox.className = 'color selected';
  blueBox.className = 'color';
  redBox.className = 'color';
  greenBox.className = 'color';
}

function selectedBlueBox() {
  blackBox.className = 'color';
  blueBox.className = 'color selected';
  redBox.className = 'color';
  greenBox.className = 'color';
}
function selectedRedBox() {
  blackBox.className = 'color';
  blueBox.className = 'color';
  redBox.className = 'color selected';
  greenBox.className = 'color';
}
function selectedGreenBox() {
  blackBox.className = 'color';
  blueBox.className = 'color';
  redBox.className = 'color';
  greenBox.className = 'color selected';
}


blackBox.addEventListener('click', selectedBlackBox);
blueBox.addEventListener('click', selectedBlueBox);
redBox.addEventListener('click', selectedRedBox);
greenBox.addEventListener('click', selectedGreenBox);



let cleanPixelButton = document.getElementById('clear-board');
let squarePixels = document.getElementsByClassName('pixel');

function cleanPixel() {
  for (let i = 0; i < 25; i += 1) {
    squarePixels[i].style.backgroundColor = 'white';
  }
}

cleanPixelButton.addEventListener('click', cleanPixel);

const corDivPixel = document.querySelector('#pixel-board');
const corPixel = document.querySelectorAll('.pixel');
function clickPixel(eventoDeOrigem) {
  aux = eventoDeOrigem.target;
  if (corPixel.className === 'color') {
    aux.style.backgroundColor = corSalva;
  } else {
    aux.style.backgroundColor = corSalva;
  }
}


corDivPixel.addEventListener('click', clickPixel);


function clickPalette(eventoDeOrigem) {
  aux = eventoDeOrigem.target;
  cor[0].className = 'color';
  cor[1].className = 'color';
  cor[2].className = 'color';
  cor[3].className = 'color';
  if (aux.className === 'color') {
    aux.className = 'color selected';
    corSalva = aux.style.backgroundColor;
  } else {
    aux.className = 'color';
  }
}
corDivBoard.addEventListener('click', clickPalette);

