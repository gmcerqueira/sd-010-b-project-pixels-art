let cores = ['black', 'red', 'blue', 'green'];
let colorPalette = document.querySelector('#color-palette');

for(let i=0; i<cores.length; i++){
  let cor = cores[i];
  let criarCor = document.createElement("div");
  criarCor.className = "color";
  criarCor.style.backgroundColor = cor;
  colorPalette.appendChild(criarCor);
}

