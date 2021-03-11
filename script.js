/* Alguns colegas me ajudaram a construir meu raciocinio */
let colorDivPallette = document.querySelector('#color-palette');
let color = document.querySelectorAll('.color');
let colorInicial = 'black';
let letAuxiliar = 0;
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'tomato';
color[2].style.backgroundColor = 'teal';
color[3].style.backgroundColor = 'SpringGreen';
color[4].style.backgroundColor = 'Sienna';
// Function paleta de 4 cores
function palletteColor(event) {
  letAuxiliar = event.target;
  for(let index = 0; index <= color.length; index +=1 ){ 
  if(letAuxiliar.className === 'color'){
    letAuxiliar.className = 'color selected';
    colorInicial = letAuxiliar.style.backgroundColor;
  } else {
    letAuxiliar.className = 'color';
  }  
}
}
colorDivPallette.addEventListener('click', palletteColor)
// Function Paleta de 5 cores
let divPixel = document.querySelector('#pixel-board');
let corPixel = document.querySelectorAll('.pixel');
function clickPixel(event) {
  letAuxiliar = event.target;
  if(corPixel.getElementsByClassName === 'color') {
    letAuxiliar.style.backgroundColor = colorInicial;
  } else {
    letAuxiliar.style.backgroundColor = colorInicial
  }
}
divPixel.addEventListener('click', clickPixel)
// Function Botão que limpa a Paleta
let buttonLimpar = document.querySelector('#clear-board');
function button() {
  for(let index = 0; index < 25; index += 1) {
    corPixel[index].style.backgroundColor = 'rgb(265, 265, 265)';
  }
}
buttonLimpar.addEventListener('click', button);
