let cores = ['black', 'red', 'blue', 'green'];
let colorPalette = document.querySelector('#color-palette');

for(let i=0; i<cores.length; i++){
  let cor = cores[i];
  let criarCor = document.createElement("div");
  criarCor.className = "color";
  criarCor.style.backgroundColor = cor;
  colorPalette.appendChild(criarCor);
}

let pixelize = document.querySelectorAll('.line');
for(let j = 0; j < 5; j += 1) {
  pixelize[j];
    for(let k = 0; k < 5; k += 1) {
      let criaPixel = document.createElement("div");
      criaPixel.className = "pixel";
      criaPixel.backgroundColor = "rgb(255, 255, 255)";
      pixelize[j].appendChild(criaPixel);
    }
}

let corPadrao = document.querySelectorAll('.color')[0];
let criaPadrao = corPadrao.classList;
criaPadrao.add('selected');