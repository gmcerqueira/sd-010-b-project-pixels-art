function criaPaleta() {
  const paletaDeCores = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const criaCaixasPaleta = document.createElement('div');
    criaCaixasPaleta.className = 'color';
    paletaDeCores.appendChild(criaCaixasPaleta);
  }

  const caixasPaleta = document.querySelectorAll('.color');
  caixasPaleta[0].style.backgroundColor = 'black';
  caixasPaleta[1].style.backgroundColor = 'red';
  caixasPaleta[2].style.backgroundColor = 'green';
  caixasPaleta[3].style.backgroundColor = 'blue';
}
criaPaleta();

function criaQuadro() {
  for (let index = 0; index < 5; index += 1) {
    const quadro = document.querySelector('#pixel-board');
    const criaRow = document.createElement('div');
    criaRow.className = 'pixel-row';
    quadro.appendChild(criaRow);
  }
  const row = document.querySelectorAll('.pixel-row');
  for (let index = 0; index < 5; index += 1) {
    for (let indexDois = 0; indexDois < 5; indexDois += 1) {
      const criaPixel = document.createElement('div');
      criaPixel.className = 'pixel';
      row[indexDois].appendChild(criaPixel);
    }
  }
}

criaQuadro();
