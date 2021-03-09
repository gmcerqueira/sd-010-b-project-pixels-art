// criar div com classe color
function criarDiv() {
  const novaDiv = document.createElement('div');
  novaDiv.className = 'color';
  return novaDiv;
}

// definir as divs a paleta
function atribuirPaleta(divs) {
  const selecionarPaleta = document.querySelector('#color-palette');
  selecionarPaleta.appendChild(divs);
}

// definir numero de paletas de cores

for (let index = 0; index < 4; index += 1) {
  atribuirPaleta(criarDiv());
}

function adicionarBgcolor() {
  const getDiv = document.getElementsByClassName('color');
  for (let index = 0; index < getDiv.length; index += 1) {
    const randomizer = Math.round(Math.random() * 255);
    const randomizer2 = Math.round(Math.random() * 255);
    const randomizer3 = Math.round(Math.random() * 255);
    const randomRgb = `rgb(${randomizer}, ${randomizer2}, ${randomizer3})`;
    getDiv[index].style.backgroundColor = randomRgb;
    getDiv[index].id = randomRgb;
  }
  return getDiv;
}

window.onload = function () {
  adicionarBgcolor();
}