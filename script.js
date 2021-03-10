function criarPaleta() {
  let cores = ['black', 'red', 'blue', 'green'];
  let colorPalette = document.querySelector('#color-palette');

  for(let i = 0; i<cores.length; i += 1) {
    let cor = cores[i];
    let criarCor = document.createElement("div");
    criarCor.className = "color";
    criarCor.style.backgroundColor = cor;
    colorPalette.appendChild(criarCor);
  }
}
criarPaleta();

function pixelizar() {
  let pixelize = document.querySelector('#pixel-board');
  for(let j = 0; j < 25; j += 1) {
    let criaPixel = document.createElement("div");
    criaPixel.className = "pixel";
    pixelize.appendChild(criaPixel);
  }
}
pixelizar();

function criaPadrao() {
  let corPadrao = document.querySelectorAll('.color')[0];
  let criaPadrao = corPadrao.classList;
  criaPadrao.add('selected');
}
criaPadrao();