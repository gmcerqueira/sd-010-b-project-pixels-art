let spanSecond = null;
spanSecond = document.getElementById('second-color');

let spanThird = null;
spanThird = document.getElementById('third-color');

let spanFouth = null;
spanFouth = document.getElementById('fourth-color');

function changeSecondColor(element) {
  spanSecond.style.backgroundColor = element.target.value;
}

function changeThirdColor(element) {
  spanThird.style.backgroundColor = element.target.value;
}

function changeFourthColor(element) {
  spanFouth.style.backgroundColor = element.target.value;
}


let inpSecond = null;
inpSecond = document.getElementById('input-second');

let inpThird = null;
inpThird = document.getElementById('input-third');

let inpFourth = null;
inpFourth = document.getElementById('input-fourth');

inpSecond.addEventListener('change', changeSecondColor);
inpThird.addEventListener('change', changeThirdColor);
inpFourth.addEventListener('change', changeFourthColor);


/* Pegado as cores dos inputs: */
let inpSecondColor = null;
inpSecondColor = document.getElementById('input-second').value;

let inpThirdColor = null;
inpThirdColor = document.getElementById('input-third').value;

let inpFourthColor = null;
inpFourthColor = document.getElementById('input-fourth').value;

let spanSecondColor = null;
spanSecondColor = document.getElementById('second-color').style.backgroundColor;
spanSecondColor = '#ed4e23';

let spanThirdColor = null;
spanThirdColor = document.getElementById('third-color').style.backgroundColor;
spanThirdColor = '#3970fe';

let spanFouthColor = document.getElementById('fourth-color').style.backgroundColor;
spanFouthColor = '#438104';

/* Pegando as tags SPANS */
/* Pegando as SPANS COLORS: */


/* Criando quadro de pixels dinamicamente: */
let pixelBoard = null;
pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 25; index += 1) {
  if (index % 5 === 0) {
    let breakRow = null;
    breakRow = document.createElement('br');
    pixelBoard.appendChild(breakRow);
  }
  let pixel = null;
  pixel = document.createElement('span');
  pixel.setAttribute('id', index + 1);
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

/* Fazendo com que um elemento da palheta de cores marque selected caso um deles for clicado */

function getPaletteItems() {
  return document.getElementsByClassName('color');
}
let paletterItems = [];
paletterItems = getPaletteItems();

function markAllWithNotSelected() {
  for (let index = 0; index < paletterItems.length; index += 1) {
    paletterItems[index].className = 'color';
  }
}

function markSelected(element) {
  markAllWithNotSelected();
  element.target.setAttribute('class', 'color selected');
}

for (let index = 0; index < paletterItems.length; index += 1) {
  paletterItems[index].addEventListener('click', markSelected);
}
console.log(getPaletteItems());
