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
//Deixando o quadrado preto quando carregar a página
function deixarQuadradoPreto() {
  const quadradoPreto = document.getElementsByClassName('color')[0];
  quadradoPreto.className = 'color selected';
}
window.onload = deixarQuadradoPreto;

//let selecionar = document.querySelectorAll('color');

//function selecionarCor() {}


