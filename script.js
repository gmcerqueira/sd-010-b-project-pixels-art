const tabelaCores = document.querySelectorAll('.color');
const pixel = document.getElementsByClassName('pixel');

function clicaCor() {
  for (let index = 0; index < tabelaCores.length; index += 1) {
    tabelaCores[index].addEventListener('click', function (event) {
      for (let index = 0; index < tabelaCores.length; index += 1) {
        tabelaCores[index].classList.remove('selected');
        event.target.classList.add('selected');
        tabelaCores[index] = event.target;
      }
    });
  }
}

clicaCor();

function colorirPixel() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      let corSelecionada = window.getComputedStyle(
        document.querySelector('.selected')
      ).backgroundColor;
      event.target.style.backgroundColor = corSelecionada;
    });
  }
}

colorirPixel();
