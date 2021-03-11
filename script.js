/* Alguns colegas me ajudaram a construir meu raciocinio */
let colorDivPallette = document.querySelector('#color-palette');
let color = document.querySelectorAll('.color');
let colorInicial = 'black';
let letAuxiliar = 0;
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'pink';
color[2].style.backgroundColor = 'teal';
color[3].style.backgroundColor = 'green';
color[4].style.backgroundColor = 'yellow';
// Function paleta de 4 cores
function palletteColor(event) {
  letAuxiliar = event.target;
  color.getElementsByClassName = 'color';
  if(letAuxiliar.className === 'color'){
    letAuxiliar.className = 'color selected';
    colorInicial = letAuxiliar.style.backgroundColor;
  }
}
colorDivPallette.addEventListener('click', palletteColor)
