function criaPixels () {
  let containerPix = document.querySelector('#pixel-board');
  
  for (let index = 0; index < 25; index += 1) {
    let divPixel = document.createElement('div')
    divPixel.className = 'pixel color4';
    containerPix.appendChild(divPixel);
  };
}
criaPixels();

function criaBotão (text) {
  let containerBotao = document.querySelector('#color-palette')
  let botao = document.createElement('button');
  let idBotao = 'clear-board';

  botao.innerHTML = text;
  botao.id = idBotao;
  containerBotao.appendChild(botao);
}
criaBotão ('Limpar');

let cor = 'white';
function pegaCor () {
  let pegaPixelsCores = document.querySelectorAll('.color')
  for (index = 0; index < pegaPixelsCores.length; index += 1){
    pegaPixelsCores[index].addEventListener('click', function(event){
      mudaClass();
      mudaSelected(event.target)
    });
  }
}
pegaCor();

function mudaSelected (elemento) {
  elemento.className += ' selected';
}

function mudaClass () {
  let pegaPixelsCores = document.querySelectorAll('.color')
  for (index = 0; index < pegaPixelsCores.length; index += 1){
    pegaPixelsCores[index].className = 'color';
  }
}

function coloriPaleta () {
  let pegaPixel = document.querySelectorAll('.pixel');

  for (i = 0; i < pegaPixel.length; i += 1){
    pegaPixel[i].addEventListener('click', function(evt){
      let pegaCorDiv = document.querySelector('.selected').id;
      evt.target.className = 'pixel ' + pegaCorDiv;
    });
  }
}
coloriPaleta();

function botaoLimpar () {
  let pegarBotao = document.querySelector('#clear-board');
  pegarBotao.addEventListener('click', limparPixel)
}
botaoLimpar();

function limparPixel () {
  let pegaPixel = document.querySelectorAll('.pixel');

  for (i = 0; i < pegaPixel.length; i += 1){
      pegaPixel[i].className = 'pixel color4';
  }
}