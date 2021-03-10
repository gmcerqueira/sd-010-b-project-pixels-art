// **************Escolhe a cor****************
let black = document.querySelector('#black');
let blue = document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
let red = document.querySelector('#red');
function escolheACor () {
  let escolhida = document.querySelector('.selected'); 
  escolhida.classList.remove('selected');
  this.classList.add('selected');
};
black.addEventListener('click',escolheACor);
blue.addEventListener('click',escolheACor);
yellow.addEventListener('click',escolheACor);
red.addEventListener('click',escolheACor);