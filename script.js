let corSalva = 'black';
let aux;
const corDivBoard = document.querySelector('#color-palette');
const cor = document.querySelectorAll('.color');
/* cores nas paletas */

cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'red';
cor[2].style.backgroundColor = 'orange';
cor[3].style.backgroundColor = 'green';
/* Paleta */
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
/* Tabela */
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
/* Criando button */
const buttonBoard = document.querySelector('#clear-board');
function limparBoard() {
  for (let i = 0; i < 25; i += 1) {
    corPixel[i].style.backgroundColor = 'white';
  }
}
buttonBoard.addEventListener('click', limparBoard);
