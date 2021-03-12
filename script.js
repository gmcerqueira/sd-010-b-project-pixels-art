// Função feita baseada no código do colega Trybe Renan Braga e 
// orientações para correção pela colega Trybe Duda Wiltiner
window.onload = function() {
  pixelBoardContainer = document.getElementById('pixel-board');
  function criaTela() {
    let lines = columns = 5;
    for (let i = 0; i < lines; i += 1) {
      criaLinha = document.createElement('div');
      criaLinha.className = 'line';
      pixelBoardContainer.appendChild(criaLinha);
      for(let j = 0; j < columns; j +=1){
        criaPixel = document.createElement('div');
        criaPixel.className = 'pixel';
        criaLinha.appendChild(criaPixel);
      }
    }
  }
criaTela();
}
