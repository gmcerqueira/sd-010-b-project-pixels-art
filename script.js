const box = document.getElementsByClassName('color');

box[0].style.backgroundColor = 'black';
box[1].style.backgroundColor = 'blue';
box[2].style.backgroundColor = 'red';
box[3].style.backgroundColor = 'green';

const div = document.querySelector('#pixel-board');
for (let index = 0; index < 25; index += 1) {
  const newdiv = document.createElement('div');
  newdiv.className = 'pixel';

 div.appendChild(newdiv);
}
document.getElementsByClassName('color')[0].className += ' selected';

box[0].addEventListener('click', () => {

  box[0].className = 'color selected';
  box[1].className = 'color';
  box[2].className = 'color';
  box[3].className = 'color';
});

box[1].addEventListener('click', () => {
  box[1].className = 'color selected';
  box[0].className = 'color';
  box[2].className = 'color';
  box[3].className = 'color';
});

box[2].addEventListener('click', () => {
  box[2].className = 'color selected';
  box[1].className = 'color';
  box[0].className = 'color';
  box[3].className = 'color';
});

box[3].addEventListener('click', () => {
  box[3].className = 'color selected';
  box[1].className = 'color';
  box[2].className = 'color';
  box[0].className = 'color';
});

// ### 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// **O que será verificado:**

// - Verifica se ao carregar a página deve ser possível pintar os pixels de preto

// - Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

// - Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

let boxPixel = document.getElementsByClassName('pixel');

for(let index = 0; index < boxPixel.length ; index ++){

  boxPixel[index].addEventListener('click',function(event){
    let currentColor = document.getElementsByClassName('color selected')[0].style.backgroundColor;
     event.target.style.backgroundColor = currentColor;
  })
}






// 9
const pixels = document.getElementsByClassName('pixel');
const button = document.querySelector('#clear-board');
button.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});

