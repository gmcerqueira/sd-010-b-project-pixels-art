const pixelBoard = document.querySelector("#pixel-board");

function criacaoPixels() {
  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('div');
    pixelBoard.appendChild(linha);

    for (let x = 0; x < 5; x += 1) {
      const coluna = document.createElement('div');
      coluna.className = 'pixel';
      linha.appendChild(coluna);
    }
  }
};
criacaoPixels();