
// Paleta de cores

const pallet = document.querySelector('#color-palette');

for (let i = 0; i < 4; i +=1 ){
  const box = document.createElement('div');
  box.className  = 'color';
  pallet.appendChild(box);
}

// Cores da paleta
const cores = document.querySelectorAll('.color')

const corPadrao = cores[0];
corPadrao.style.backgroundColor = 'black';
corPadrao.className = 'color selected';
sessionStorage.setItem('color', corPadrao.style.backgroundColor);

const cor1 = cores[1];
cor1.style.backgroundColor = 'red';
const cor2 = cores[2];
cor2.style.backgroundColor = 'blue';
const cor3 = cores[3];
cor3.style.backgroundColor = 'green';

// Selecionando a cor da paleta
for (let cor = 0; cor < cores.length; cor += 1){
cores[cor].addEventListener('click', function(evento){
  const colorSet = document.getElementsByClassName('selected'); // recupero o elem da classe selected
  colorSet[0].classList.remove('selected'); // removo a classe selected do elem recuperado 
  evento.target.classList.add('selected'); // e adiciono a classe ao elem que recebeu o evento
  sessionStorage.setItem('color', evento.target.style.backgroundColor); // adiciono a cor atual ao session storage
})
}

// Quadro de pixels (linhas)
const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 5; i +=1 ) {
  const box = document.createElement('tr');
  pixelBoard.appendChild(box);
    
}
// Quadro de pixels (celulas)
const pixelTable = document.querySelectorAll('#pixel-board, tr'); // recupero as tr que criei 
for (let l = 1; l < pixelTable.length; l +=1 ) { // para cada linha 
  for (let c = 1; c < pixelTable.length; c += 1) { // para cada coluna 
    const box = document.createElement('td'); // crio uma celula
    box.className  = 'pixel'; // nomeio a classe
    pixelTable[c].appendChild(box); // e adiciono a mesma na posição referente a coluna da linha
  }
}
// pintando o quadro de pixels
const pixels = document.querySelectorAll('.pixel') // recupero todos elem classe pixel
for (let p = 0; p < pixels.length; p += 1){ //itero sobre todos eles
  pixels[p].addEventListener('click', function(evento){ //pego o pixel na posiçao p e adiciono o evento de click
  evento.target.style.backgroundColor = sessionStorage.color; // passo a cor do session storage para o pixel
   })
}

//botao limpar
const botaoClear = document.getElementById('clear-board')
botaoClear.innerHTML = 'Limpar'

//adicionando o evento de limpar ao botão
botaoClear.addEventListener('click',function(){
  for (let p = 0; p < pixels.length; p += 1){  // itero sobre cada pixel da minha lista
    pixels[p].style.backgroundColor = 'white';  // e pra cada pixel atribuo a cor branca
  }
})


