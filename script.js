window.onload = function () {
// const title = document.querySelector('#title');
// const color = document.querySelector('.color');
// const pixel = document.querySelector('.pixel');
// D7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada
  function colorPalette() {
  const ul = document.querySelector('#color-palette');
  let cores = ['black'];
  for (let index = 0; index < 3; index += 1) {
    let cor = 'rgb(';
  for (let indexNum = 0; indexNum < 3; indexNum += 1) {
    let coresNum = Math.ceil(Math.random() * 260);
    cor += coresNum;
    if (indexNum < 2) {
      cor += ',';
    }
  }
    cor += ')';
    cores.push(cor);
  }
  for (let indexCor = 0; indexCor < cores.length; indexCor += 1) {
    let listaCor = document.createElement('li');
    listaCor.className = 'color';
    listaCor.style.backgroundColor = cores[indexCor];
    ul.appendChild(li); 
  }
}
colorPalette();

// D8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// const pixelBoard = document.querySelector('#pixel-board');

// D9 - botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// const clearBoard = document.querySelector('#clear-board');

// D10 - Quadro de pixels definido pela pessoa usuária.
}
