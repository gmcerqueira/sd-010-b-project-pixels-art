// let color = ["black", "red", "blue", "green"];
// let colorPalette = document.querySelector("#color-palette");
// for (let index = 0; index < cores.length; index += 1) {
//   let colorGround = color[index];
//   let paletteItem = document.createElement('div');
//   paletteItem.className = 'color';
//   paletteItem.style.backgroundColor = colorGround;
//   paletteItem.appendChild(paletteItem);
// }
let color = ['black', 'red', 'blue', 'green'];
let colorPalette = document.querySelector('#color-palette');
for(let i=0; i<cores.length; i++){
  let cor = cores[i];
  let criarCor = document.createElement("div");
  criarCor.className = "color";
  criarCor.style.backgroundColor = cor;
  colorPalette.appendChild(criarCor);
}