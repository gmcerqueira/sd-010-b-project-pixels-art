const coresPaleta = document.querySelectorAll('.color');
const preto = coresPaleta[0];
const vermelho = coresPaleta[1];
const verde = coresPaleta[2];
const azul = coresPaleta[3];

preto.style.backgroundColor = 'black';
vermelho.style.backgroundColor = 'red';
verde.style.backgroundColor = 'green';
azul.style.backgroundColor = 'blue';

preto.classList.add('selected');

function seleçãoDeCor() {
  for (let index = 0; index < coresPaleta.length; index += 1) {
    coresPaleta[index].classList.remove('selected');
  }
  this.classList.add('selected');
}
/*  Entendendo a função do this,site de referencia: https://serfrontend.com/blog/
diferenca-entre-this-target-e-currenttarget/index.html */
for (let index = 0; index < coresPaleta.length; index += 1) {
  coresPaleta[index].addEventListener('click', seleçãoDeCor);
}

const cor = document.querySelectorAll('.pixel');
for (let index = 0; index < cor.length; index += 1) {
  cor[index].addEventListener('click', corPixel);
}

function corPixel() {
  if (preto.className === 'color selected') {
    this.style.backgroundColor = 'black';
  } else if (vermelho.className === 'color selected') {
    this.style.backgroundColor = 'red';
  } else if (verde.className === 'color selected') {
    this.style.backgroundColor = 'green';
  } else if (azul.className === 'color selected') {
    this.style.backgroundColor = 'blue';
  }
}
