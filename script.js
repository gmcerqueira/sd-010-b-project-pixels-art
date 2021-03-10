let pixel 
// **************Escolhe a cor****************
let black = document.querySelector('#black');
let blue = document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
let red = document.querySelector('#red');
function escolheACor () {
  let escolhida = document.querySelector('.selected');
  escolhida.classList.remove('selected');
  this.classList.add('selected');
}
black.addEventListener('click', escolheACor);
blue.addEventListener('click', escolheACor);
yellow.addEventListener('click', escolheACor);
red.addEventListener('click', escolheACor);
// **************Limpa****************
let button = document.querySelector('#clear-board');
button.addEventListener('click', function () {
  for (let cont = 0; cont < pixel.length; cont += 1) {
    pixel[cont].style.backgroundColor = 'white';
  }
});
// **************Tamanho da Pixel Art****************
let tamanho = 5;

let indicaTamanho = document.querySelector('#valor-atual');
indicaTamanho.innerHTML = 'Tamanho atual = ' + tamanho + ' blocos.';

let tamanhoCoordenadas = document.querySelector('#board-size');
tamanhoCoordenadas.addEventListener('keyup', guardaTamanho);

function guardaTamanho () {
  tamanho = tamanhoCoordenadas.value;
  indicaTamanho.innerHTML = 'Tamanho atual = ' + tamanho + ' blocos.';
// criaQuadro ()
}

let buttonTamanho = document.querySelector('#generate-board');
buttonTamanho.addEventListener('click', apaga);

function apaga () {
  let quadro = document.querySelector('#pixel-board');
  let apagaDiv = document.querySelector('#pixel-board').childNodes;
  for (let i = 0; i !== apagaDiv.length; i){
    quadro.lastChild.remove();
  }

  criaQuadro();
}

criaQuadro ();
function criaQuadro () {
let quadro = document.querySelector('#pixel-board');
for (let index = 0; index < tamanho; index++) {
  let div = document.createElement('div');
  div.className = 'linha';
  for (let cont = 0; cont < tamanho; cont++) {
      let span = document.createElement('span');
      let id = (index) + '-' + (cont);
      span.id = id;
      span.className = 'pixel';
      div.appendChild(span);
    }
  quadro.appendChild(div);
  }
  pixel = document.querySelectorAll('.pixel');
  for (let cont = 0; cont < pixel.length; cont += 1) {
    pixel[cont].addEventListener('click', pinta);
  }
}

// **************Pinta****************
function pinta () {
  let cor = document.querySelector('.selected').id;// nao era para ser com o id rs
  this.style.backgroundColor = cor;
}
for (let cont = 0; cont < pixel.length; cont += 1) {
  pixel[cont].addEventListener('click', pinta);
}

