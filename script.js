const cor = document.querySelectorAll('.color');
cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'purple';
cor[2].style.backgroundColor = 'orange';
cor[3].style.backgroundColor = 'green';

let quant = 25
function createDivpixel(){
  let divContainer = document.querySelector('#pixel-board');

  for (let i = 0; i < quant; i += 1){
    let divs = document.createElement('div');
    divs.className = 'pixel'
    divContainer.appendChild(divs);

  }
}
createDivpixel()

let corInicial = "black"
let selecao;
function corSelected(corSelected){
  selecao = addEventListener.target
  cor[0].style.backgroundColor = 'black';
  cor[1].style.backgroundColor = rgb();
  cor[2].style.backgroundColor = rgb();
  cor[3].style.backgroundColor = rgb();
  if(selecao.style.backgroundColor === 'color'){
    corInicial.style.background = 'color selected'
  }else {
    corInicial.style.background = 'color'
  }



}
corSelected('click')


function rgb(){
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}



