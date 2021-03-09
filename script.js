
function criaPixels() {
  let secao = document.querySelector('#secao');
  let novaLinha = document.createElement('div');
  for (let j = 0; j < 5; j++) {
    let quadro =document.createElement('div');
    quadro.className = 'pixel-border' ;
    for (let i = 0; i < 5; i++) {
      let divNova = document.createElement("div");
      divNova.className = 'pixel';
      quadro.appendChild(divNova);
    }
    document.body.appendChild(quadro);
  }
  document.body.appendChild(quadro);
}
criaPixels();