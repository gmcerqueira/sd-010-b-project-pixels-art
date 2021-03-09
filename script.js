function criarDiv() {
  const novaDiv = document.createElement('div');
  novaDiv.className = 'color';
  return novaDiv;
}

function atribuirPaleta(divs) {
  const selecionarPaleta = document.querySelector('#color-palette');
  selecionarPaleta.appendChild(divs);
}

for (let index = 0; index < 4; index += 1) {
  atribuirPaleta(criarDiv());
}
