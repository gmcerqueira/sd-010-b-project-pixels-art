window.onload = function clicaCor () {
  let button = document.getElementById('black');

  button.addEventListener('click', function () {
    if (document.getElementsByClassName('pixel')[0].classList.contains('cor')) {
      document.getElementsByClassName('cor')[0].classList.add('preto');
      document.getElementsByClassName('preto')[0].classList.remove('cor');
    } else {
        document.getElementsByClassName('preto')[0].classList.add('cor');
        document.getElementsByClassName('cor')[0].classList.remove('preto');
    }
  })
}