//variaveis
let todosOs25Quadradinhos = document.getElementsByClassName('pixel');
const paletaDeCores = document.getElementById('color-palette');
const quadradoPreto = document.getElementsByClassName('color')[0];
const quadradoAzul = document.getElementsByClassName('color')[1];
const quadradoAmarelo = document.getElementsByClassName('color')[2];
const quadradoVerde = document.getElementsByClassName('color')[3];
let todasAsCores = document.querySelectorAll('.color');
let number = 5;

//cores da paleta de cores
quadradoPreto.style.backgroundColor = 'black';
quadradoAzul.style.backgroundColor = 'blue';
quadradoAmarelo.style.backgroundColor = 'yellow';
quadradoVerde.style.backgroundColor = 'green';

//Função de criar o quadro com 25 quadradinhos
function adicionandoPixels() {
  const quadroPixels = document.getElementById('pixel-board');
  for (let j = 0; j < number; j += 1) {
    const linhasQuadro = document.createElement('div');
    quadroPixels.appendChild(linhasQuadro);
    for (let i = 0; i < number; i += 1) {
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

//criando o botão de limpar o quadro
let buttonClean = document.getElementsByTagName('button')[0];
buttonClean.id = 'clear-board';
buttonClean.innerText = 'Limpar';
paletaDeCores.appendChild(buttonClean);

buttonClean.addEventListener('click', function() {
  for (let j = 0; j < todosOs25Quadradinhos.length; j += 1) {
    todosOs25Quadradinhos[j].style.backgroundColor = 'white';
  }
});

//Quadro de pixel definido pela pessoa usuária
let inputNumeroPixels = document.getElementsByTagName('input')[0];
inputNumeroPixels.id = 'board-size';
let buttonGenerateBoard = document.getElementsByTagName('button')[1];
buttonGenerateBoard.id = 'generate-board';
buttonGenerateBoard.innerText = 'VQV';

buttonGenerateBoard.addEventListener('click', function() {
  if (inputNumeroPixels.value.length === 0) {
    alert('Board inválido!');
  }
});

buttonGenerateBoard.addEventListener('click', function() {
  while(document.querySelector('.pixel')) {
    document.querySelector('.pixel').remove();
  }
});

buttonGenerateBoard.addEventListener('click', function() {
  number = inputNumeroPixels.value;
});

buttonGenerateBoard.addEventListener('click', adicionandoPixels);
