function criarPaleta() {
  let cores = ['black', 'red', 'blue', 'green'];
  let colorPalette = document.querySelector('#color-palette');

  for(let i = 0; i<cores.length; i += 1) {
    let cor = cores[i];
    let criarCor = document.createElement("div");
    criarCor.className = "color";
    criarCor.style.backgroundColor = cor;
    colorPalette.appendChild(criarCor);
  }
}
criarPaleta();

function pixelizar() {
  let pixelize = document.querySelector('#pixel-board');
  for(let j = 0; j < 25; j += 1) {
    let criaPixel = document.createElement("div");
    criaPixel.className = "pixel";
    pixelize.appendChild(criaPixel);
  }
}
pixelizar();

function criaPadrao() {
  let corPadrao = document.querySelectorAll('.color')[0];
  let criaPadrao = corPadrao.classList;
  criaPadrao.add('selected');
}
criaPadrao();

// document.querySelectorAll('.color')[0].classList.length
function removePadrao() {
  let remover = document.querySelectorAll('.color')[0];
  for(let index = 0; index < remover.classList.length; index ++) {
    console.log(remover.classList[index]);
    remover.classList.remove('selected');
  }

  remover = document.querySelectorAll('.color')[1];
  for(let index = 0; index < remover.classList.length; index ++) {
    console.log(remover.classList[index]);
    remover.classList.remove('selected');
  }

  remover = document.querySelectorAll('.color')[2];
  for(let index = 0; index < remover.classList.length; index ++) {
    remover.classList.remove('selected');
  }

  remover = document.querySelectorAll('.color')[3];
  for(let index = 0; index < remover.classList.length; index ++) {
    remover.classList.remove('selected');
  }
}


function trocar () {
  let cor = document.querySelectorAll('.color');
    cor[0].addEventListener('click', function() {
      removePadrao();
      cor[0].classList.add('selected');
    });
    cor[1].addEventListener('click', function() {
      removePadrao();
      cor[1].classList.add('selected');
    });
    cor[2].addEventListener('click', function() {
      removePadrao();
      cor[2].classList.add('selected');
      
    });
    cor[3].addEventListener('click', function() {
      removePadrao();
      cor[3].classList.add('selected');
    });
}
trocar();