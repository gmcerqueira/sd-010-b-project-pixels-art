//variaveis
let todosOs25Quadradinhos = document.getElementsByClassName('pixel');
const paletaDeCores = document.getElementById('color-palette');
const quadradoPreto = document.getElementsByClassName('color')[0];
const quadradoAzul = document.getElementsByClassName('color')[1];
const quadradoAmarelo = document.getElementsByClassName('color')[2];
const quadradoVerde = document.getElementsByClassName('color')[3];
let todasAsCores = document.querySelectorAll('.color');

//cores da paleta de cores
quadradoPreto.style.backgroundColor = 'black';
quadradoAzul.style.backgroundColor = 'blue';
quadradoAmarelo.style.backgroundColor = 'yellow';
quadradoVerde.style.backgroundColor = 'green';

//Função de criar o quadro com 25 quadradinhos
function adicionandoPixels() {
  const quadroPixels = document.getElementById('pixel-board');
  for (let j = 0; j < 5; j += 1) {
    const linhasQuadro = document.createElement('div');
    quadroPixels.appendChild(linhasQuadro);
    for (let i = 0; i < 5; i += 1) {
      const pixels = document.createElement('div');
      linhasQuadro.appendChild(pixels);
      pixels.className = 'pixel';
    }
  }
}
adicionandoPixels();
//Definindo variaveis as cores


function deixarQuadradoPreto() {
  quadradoPreto.classList.add('selected');
}
deixarQuadradoPreto();

//adicionando e removendo a classe selected
function removeEColocaClasseSelected() {
  let corComAClasseSelected = document.getElementsByClassName('selected')[0];
  corComAClasseSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let i = 0; i < todasAsCores.length; i += 1) {
  todasAsCores[i].addEventListener("click", removeEColocaClasseSelected);
}

//colorindo o quadradinhos branco
function pintandoOQuadradinho() {
  const selecionaCor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = selecionaCor;
}

function pintandoTabela() {
  for (let j = 0; j < todosOs25Quadradinhos.length; j += 1) {
    todosOs25Quadradinhos[j].addEventListener("click", pintandoOQuadradinho);
  }
}
pintandoTabela();

