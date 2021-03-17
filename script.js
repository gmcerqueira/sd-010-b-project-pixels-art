function botaoCores () {
let escolhaCores = document.getElementsByClassName('color');
let cores = ['black', 'red', 'blue', 'green'];

  for (i = 0; i < escolhaCores.length; i++) {
  escolhaCores[i].style.backgroundColor = cores[i];
  }
}
botaoCores();

function quadroColorir () {
let quadro = document.querySelector('#pixel-board');

  for (i = 0; i < 5; i++) {
  let quadroLinha = document.createElement('tr');
  quadro.appendChild(quadroLinha);
  
    for (ii = 0; ii < 5; ii++) {
    let quadroColuna = document.createElement('td');
    quadroColuna.className = 'pixel';
    quadroLinha.appendChild(quadroColuna);
    }
  }
  console.log(quadro);
}
quadroColorir();
