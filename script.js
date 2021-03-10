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
