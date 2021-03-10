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

// A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

// - Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

// - Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

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

// 9
pixels = document.getElementsByClassName('pixel')
button = document.querySelector('#clear-board');
button.addEventListener('click',function() {

  for (let index = 0; index < 25; index += 1){
   pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';}
});
