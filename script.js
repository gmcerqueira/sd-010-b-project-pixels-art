// criando a paleta

const paleta = document.querySelector('#color-palette');
for (let box = 0; box < 4; box += 1) {
  const cor = document.createElement('div');
  cor.className = 'color';
  paleta.appendChild(cor);
}
// Adicionando as cores
const cores = document.querySelectorAll('.color');

const corBlack = cores[0];
corBlack.className = 'color selected';
corBlack.style.backgroundColor = 'black';

const corRed = cores[1];
corRed.style.backgroundColor = 'red';

const corGreen = cores[2];
corGreen.style.backgroundColor = 'green';

const corBLue = cores[3];
corBLue.style.backgroundColor = 'blue';

// table Row - Criando as cinco linhas

const pixelBoard = document.querySelector('#pixel-board');
for (let line = 0; line < 5; line += 1) {
  const box = document.createElement('tr');
  box.className = 'pixel-table';
  pixelBoard.appendChild(box);
}
// celulas da tabela
const linhas = document.querySelectorAll('#pixel-board, tr'); // recupero todos os elem tr criados da id #pixel-board
for (let line = 1; line < linhas.length; line += 1) {
  for (let colum = 1; colum < linhas.length; colum += 1) {
    const box = document.createElement('td');
    box.className = 'pixel';
    linhas[colum].appendChild(box);
  }
}

// cor selecionada
sessionStorage.setItem('color', corBlack.style.backgroundColor);

function corSelecionada(index) {
  if (index === 0) {
    sessionStorage.setItem('color', corBlack.style.backgroundColor);
    corBlack.className = 'color selected';
    corRed.className = 'color';
    corBLue.className = 'color';
    corGreen.className = 'color';
  } else if (index === 1) {
    sessionStorage.setItem('color', corRed.style.backgroundColor);
    corBlack.className = 'color';
    corRed.className = 'color selected';
    corBLue.className = 'color';
    corGreen.className = 'color';
  } else if (index === 2) {
    sessionStorage.setItem('color', corBLue.style.backgroundColor);
    corBlack.className = 'color';
    corRed.className = 'color';
    corBLue.className = 'color selected';
    corGreen.className = 'color';
  } else if (index === 3) {
    sessionStorage.setItem('color', corGreen.style.backgroundColor);
    corBlack.className = 'color';
    corRed.className = 'color';
    corBLue.className = 'color ';
    corGreen.className = 'color selected';
  }
}

corBlack.addEventListener('click', function() { corSelecionada(0) });
corRed.addEventListener('click', function() { corSelecionada(1) });
corBLue.addEventListener('click', function() { corSelecionada(2) });
corGreen.addEventListener('click', function() { corSelecionada(3) });

// Adicionando cor ao quadrado selecionado

const pixelTable = document.querySelectorAll('.pixel'); // pego todos os elem da classe pixel

function pintaOPixel (i) {
  pixelTable[i].addEventListener('click', function() { // adiciono o evento de click a todos os elem do array
    pixelTable[i].style.backgroundColor = sessionStorage.color; // atribuo a cor salva no storage ao elemento que recebeu o click
  });
}

for (let i = 0; i < pixelTable.length; i += 1) { // percorro todos os elem da classe que fora atribuidos a essa variavel
  pintaOPixel(i); // e mando o indice para a função
}

// Botão Limpa a paleta
const body = document.querySelector('body')
const botaoClear = document.createElement('div')
botaoClear.id = 'clear-board'
botaoClear.innerHTML = 'clear'
body.appendChild(botaoClear)

