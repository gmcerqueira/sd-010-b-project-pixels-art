window.onload = function () {
  criarQuadro();
};

const { body } = document;

const paletteBox = document.createElement('div');

paletteBox.id = 'color-palette';
paletteBox.style.marginTop = '50px';

body.appendChild(paletteBox);

let N = 5;

// Cria as cores dinâmicamente */
let colors = ['black'];

for (let nColor = 1; nColor < 4; nColor += 1) {
  let colorInt = Math.random() * 4095;

  for (let n = 0; n < nColor; n += 1) {
    if (colorInt == parseInt(colors[n])) {
      while (colorInt === parseInt(colors[n])) {
        colorInt = Math.random() * 4095;
      }
    }
  }

  if (colorInt == 4095) colorInt -= 1;

  colorInt = Math.floor(colorInt);
  let colorHex = Number(colorInt).toString(16);
  if (colorHex.length < 3) colorHex += '0';
  colorHex = `#${colorHex}`;

  colors.push(colorHex);
}
console.log(colors);
/* ----------------------Paleta de Cores---------------------------------- */


// Criando o Quadro de Pixels
function criarQuadro() {
  body.appendChild(pixelBoard);
  for (let linhas = 0; linhas < N; linhas += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let colunas = 0; colunas < N; colunas += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';

      pixel.style.width = '40px';
      pixel.style.height = '40px';

      line.appendChild(pixel);
    }
  }

}

// Preenchimento dos pixels

function fillColor(event) {
  // Procurar o Selecionado
  const color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = color;
}

pixelBoard.addEventListener('click', fillColor, false);
