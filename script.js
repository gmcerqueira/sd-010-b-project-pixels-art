let quadros = document.getElementById('pixel-board');
let n = 5;

for (let indexLinhas = 0; indexLinhas < n; indexLinhas += 1) {
  let linha = document.createElement('tr');
  for (let indexColunas = 0; indexColunas < n; indexColunas += 1) {
    let coluna = document.createElement('td');
    coluna.className = 'pixel';
    linha.appendChild(coluna);
    quadros.appendChild(linha);
  }
}

// document.getElementsByClassName('color')[0].className = 'color selected';

//requisito 7
let cor = document.getElementsByClassName('color');
let colorPalette = document.getElementById('color-palette');
function corTroca() {
  for (let corIndex = 0; corIndex < cor.length; corIndex += 1) {
    cor[corIndex].addEventListener('click', function () {
      colorPalette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    })
  }
}

corTroca();