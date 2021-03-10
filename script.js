// Cria divs color
const paletaDeCores = document.getElementById('color-palette');
for (let i = 0; i < 4; i += 1) {
  const criaPaleta = document.createElement('div');
  criaPaleta.className = 'color';
  paletaDeCores.appendChild(criaPaleta);
}

// adicionar cor as divs color
const cores = document.getElementsByClassName('color');
// pesquisa realizada no site https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList sobre o classList
cores[0].classList.add('selected');
cores[0].style.background = 'black';
cores[1].style.background = 'red';
cores[2].style.background = 'green';
cores[3].style.background = 'yellow';

// cria tabela dos pixels a serem coloridos
const tableCreate = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  const cells = document.createElement('tr');
  tableCreate.appendChild(cells);
}
const tableCreateCells = document.querySelectorAll('pixel-board, tr');
for (let i = 0; i < tableCreateCells.length; i += 1) {
  for (let n = 0; n < tableCreateCells.length; n += 1) {
    const lines = document.createElement('td');
    lines.className = 'pixel';
    tableCreateCells[i].appendChild(lines);
  }

function changeColorClass () {
const change = document.querySelector('selected');
    change.classList.remove('selected');
    this.classList.add('selected');
  }

  const clean = document.getElementById('clear-board');
  clean.addEventListener('click', clear);
  function clear() {
    const pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.background = 'white';
  }
  }
}
  
//const changeColorClass = document.querySelector('color-palette');
//changeColorClass.addEventListener('click', (change) => {
//        onload.querySelector('selected').classList.remove('selected');
//        change.target.classList.add('selected')
        
 //   })
