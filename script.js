window.onload = function clicaCor() {
  let button = document.getElementById('black');
  let button2 = document.getElementById('red');
  let button3 = document.getElementById('blue');
  let button4 = document.getElementById('green');

  button.addEventListener('click', function () {
    if (document.getElementsByClassName('pixel')[0].classList.contains('cor')) {
      document.getElementsByClassName('cor')[0].classList.add('preto');
      document.getElementsByClassName('preto')[0].classList.remove('cor');
    } else if (document.getElementsByClassName('pixel')[0].classList.contains('red')) {
      document.getElementsByClassName('red')[0].classList.add('preto');
      document.getElementsByClassName('preto')[0].classList.remove('red');
    } else if (document.getElementsByClassName('pixel')[0].classList.contains('azul')) {
      document.getElementsByClassName('azul')[0].classList.add('preto');
      document.getElementsByClassName('preto')[0].classList.remove('azul');
    } else if (document.getElementsByClassName('pixel')[0].classList.contains('green')) {
      document.getElementsByClassName('green')[0].classList.add('preto');
      document.getElementsByClassName('preto')[0].classList.remove('green');
    } else {
      document.getElementsByClassName('preto')[0].classList.add('cor');
      document.getElementsByClassName('cor')[0].classList.remove('preto');
    }
    
  })
}
