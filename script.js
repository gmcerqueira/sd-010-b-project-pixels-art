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
// Pega a cor selecionada para preencher o pixel
function pegaCor() {
  let cor = document.getElementsByClassName('color');
}
// Inicia com a cor preta para preenchimento dos pixels
function corInicial() {
  let corPreta = document.querySelector('.c1');
  corPreta.className = corPreta.className + ' selected';
}



// Inicialização do site 
corInicial();
criaPixels();