let corDivBoard = document.querySelector('#color-palette');
let cor = document.querySelectorAll('.color');
function clickSelected(eventoDeOrigem) {
  let aux = eventoDeOrigem.target;
  cor[0].className = 'color';
  cor[1].className = 'color';
  cor[2].className = 'color';
  cor[3].className = 'color';
  if(aux.className == 'color') {
    aux.className = 'color selected';
  }else {
    console.log('selecionado');
    aux.className = 'color';
  }
}
corDivBoard.addEventListener('click', clickSelected);