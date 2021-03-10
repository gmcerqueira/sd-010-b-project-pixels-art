const containerPalette = document.querySelector('#color-palette');
const containerQuadro = document.querySelector('#pixel-board');
//criando div para plateas de cores
function createPalette() {
  for (let index = 0; index < 4; index += 1) {
    const selectors = document.createElement('div');
    selectors.className = 'color';
    containerPalette.appendChild(selectors);
    if (index === 0) {
      selectors.className += ' selected';
    }
  }
  return containerPalette;
}

createPalette();
//gerando div para ser linhas para o quadrado
function createPixels() {
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    containerQuadro.appendChild(line);
//gerando div para ser colunas para o quadrado
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
  return containerQuadro;
}

createPixels();
//função para gerar cores aleatorias
function corAleatoria() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  //setando o primeiro quadrado com a cor black
  document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
  //gerando cores aleatorias para os outros quadrados
  document.getElementsByClassName('color')[1].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'rgb(' + g + ',' + r + ',' + b + ')';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'rgb(' + b + ',' + g + ',' + r + ')';

}
corAleatoria();