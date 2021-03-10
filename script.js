let cor = document.querySelectorAll('.color');
cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'purple';
cor[2].style.backgroundColor = 'orange';
cor[3].style.backgroundColor = 'green';
//gera paleta de cores
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


