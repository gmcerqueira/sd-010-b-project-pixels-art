// **************Escolhe a cor****************
let black = document.querySelector('#black');
let blue = document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
let red = document.querySelector('#red');
function escolheACor () {
  let escolhida = document.querySelector('.selected');
  escolhida.classList.remove('selected');
  this.classList.add('selected');
}
black.addEventListener('click', escolheACor);
blue.addEventListener('click', escolheACor);
yellow.addEventListener('click', escolheACor);
red.addEventListener('click', escolheACor);
// **************Pinta****************
let pixel = document.querySelectorAll('.pixel');
function pinta () {
  let cor = document.querySelector('.selected').id;//nao era para ser cm o id rs
 this.style.backgroundColor = cor;
 } 
for (let cont = 0; cont < pixel.length; cont += 1) {
  pixel[cont].addEventListener('click', pinta);
}
// **************Limpa****************
let button = document.querySelector('#clear-board');
button.addEventListener('click', function(){
  for (let cont = 0; cont < pixel.length; cont += 1) {
    pixel[cont].style.backgroundColor= 'white'
  }
})
