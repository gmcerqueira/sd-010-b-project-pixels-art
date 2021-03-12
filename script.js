window.onload = function () {

  function colorPalette() {
  const ul = document.querySelector('#color-palette');
  let cores = ['black'];
  for (let index = 0; index < 3; index += 1) {
    let cor = 'rgb(';
  for (let indexNum = 0; indexNum < 3; indexNum += 1) {
    let coresNum = Math.ceil(Math.random() * 260);
    cor += coresNum;
    if (indexNum < 2) {
      cor += ',';
    }
  }
    cor += ')';
    cores.push(cor);
  }
  for (let indexCor = 0; indexCor < cores.length; indexCor += 1) {
    let li = document.createElement('li');
    li.className = 'color';
    li.style.backgroundColor = cores[indexCor];
    ul.appendChild(li); 
  }
}
colorPalette();

// D8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function pixelBoard(side) {
let table = document.querySelector('#pixel-board');
let colum = side;
console.log(colum);
for (let indexColum = 0; indexColum < colum; indexColum += 1) {
  let tr = document.createElement('div');
  tr.className = 'table-row';
  table.appendChild(tr);
  for (let indexRow = 0; indexRow < colum; indexRow += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    tr.appendChild(pixel);
  }
}
addEventListener();
}
let side = 5;
pixelBoard(side);

// D9 - botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function clearBoard() { 
let table = document.querySelector('#pixel-board');
let n = document.querySelectorAll('.table-row').length;
while (table.firstChild) {
  table.removeChild(table.lastChild);
}
}
// add o select
let selectedClass = document.querySelector('.color');
selectedClass.classList.add('selected');
// add cor em todos os itens
let select = document.getElementsByClassName('color');
for (let index = 0; index < select.length; index += 1) {
  select[index].addEventListener('click', colorSelect, selectedClass);
}

function removeClass(selectedClass) {
  selectedClass.classList.remove('selected')
}

function colorSelect(elementEvent, Class) {
  removeClass(selectedClass);
  selectedClass = elementEvent.target;
  selectedClass.classList.add('selected');
}

function addEventListener () {
  let selectPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < selectPixels.length; index += 1) {
    selectPixels[index].addEventListener('click', paint);
  }
  function paint(pixels) {
    let cores = document.querySelector('.selected').style.backgroundColor;
    pixels.srcElement.style.backgroundColor = cores;
    console.log(cores);
  }
}
// limpar quadros pintados
let clear = document.querySelector('#clear-board');
clear.addEventListener('click', clearFunction);
function clearFunction() {
  let pixelsAll = document.querySelectorAll('.pixel');
  colorPixel = 'white';
  for (let index = 0; index < pixelsAll.length; index += 1) {
    pixelsAll[index].style.backgroundColor = 'white';
  }
}
// D10 - Quadro de pixels definido pela pessoa usuária.
let btnVqv = document.querySelector('#generate-board');
btnVqv.addEventListener('click', btnUser);

function btnUser() {
  let valor = document.querySelector('input').value;
  if (valor === '') {
    alert('Board inválido!');
  } else {
    if (valor < 5) {
      valor = 5;
    }
    if (valor > 50) {
      valor = 50;
    }
    clearBoard();
    pixelBoard(valor);
  }
}
}
