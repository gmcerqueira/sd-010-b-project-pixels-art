const tabelaCores = document.querySelectorAll('.color');


  function clicaCor() {
    for (const cor of tabelaCores) {
      cor.addEventListener('click', function (event) {
        for (let index = 0; index < tabelaCores.length; index += 1) {
          tabelaCores[index].classList.remove('selected');
          event.target.classList.add('selected');
          tabelaCores[index] = event.target;
        }
      });
    }
  }

  clicaCor();