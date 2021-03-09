let corSalva = 'black';

let corDivBoard = document.querySelector('#color-palette');
let cor = document.querySelectorAll('.color');
//cores nas paletas
cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'red';
cor[2].style.backgroundColor = 'orange';
cor[3].style.backgroundColor = 'green';
//
function clickPalette(eventoDeOrigem) {
  
  let aux = eventoDeOrigem.target;
  cor[0].className = 'color';
  cor[1].className = 'color';
  cor[2].className = 'color';
  cor[3].className = 'color';
  
  if(aux.className == 'color') {
    aux.className = 'color selected';
    corSalva = aux.style.backgroundColor;
    console.log(corSalva);
  }else {
    aux.className = 'color';
  }
}
corDivBoard.addEventListener('click', clickPalette);

let corDivPixel = document.querySelector('#pixel-board');
let corPixel = document.querySelectorAll('.pixel');
function clickPixel(eventoDeOrigem) {
  let aux = eventoDeOrigem.target;
  console.log(aux);
  if (corPixel.className == 'color') {
    aux.style.backgroundColor = corSalva;
  } else {
    aux.style.backgroundColor = corSalva;
  }
}
corDivPixel.addEventListener('click', clickPixel);