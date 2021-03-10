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

let quadradoPreto = document.getElementsByTagName('color')[0];
quadradoPreto.className = 'color selected';
