// Cria os Pixels que vão ser coloridos 
function criaPixels() {
  let quadro = document.getElementById('pixel-board');
  for (let j = 0; j < 5; j++) {
    let novaLinha =document.createElement('div');    
    for (let i = 0; i < 5; i++) {
      let divNova = document.createElement("div");
      divNova.className = 'pixel';
      novaLinha.appendChild(divNova);
    }
    quadro.appendChild(novaLinha);
  }
}

// Evento para ouvir o chamado de pegar a cor
function chamado() {
  let remove = document.getElementsByClassName('selected')[0];
  remove.classList.remove('selected');  
  event.target.classList.add('selected');
}
// adicionando funcao de click
let chamando = document.querySelectorAll('.color');
for (let i = 0; i < chamando.length; i++) {
chamando[i].addEventListener("click", chamado);
}
// Pega a cor selecionada para preencher o pixel
function pegaCor() {
  
}
// Inicia com a cor preta para preenchimento dos pixels
function corInicial() {
  let corPreta = document.querySelector('.c4');
  corPreta.className = corPreta.className + ' selected';
}
function pintarPixel() {
  let pintar = document.getElementsByClassName('pixel');
  for(let i = 0; i < pintar.length; i++) {
    pintar[i].addEventListener("click", function() {
      // this.style.backgroundcolor = '';
    });
  }
}


// Inicialização do site 
corInicial();
criaPixels();