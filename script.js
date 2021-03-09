
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
criaPixels();
function pegaCor() {
  let cor = document.getElementsByClassName('color');
}
function corInicial() {
  document.querySelector('.c1');
}
corInicial();