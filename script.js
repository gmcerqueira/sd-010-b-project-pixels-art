const paletaDeCores = document.querySelector('#color-palette');
console.log(paletaDeCores);

for (let index = 0; index < 4; index += 1) {
  const criaCaixasPaleta = document.createElement('div');
  criaCaixasPaleta.className = 'color';
  paletaDeCores.appendChild(criaCaixasPaleta);
}

const caixasPaleta = document.querySelectorAll('.color');
caixasPaleta[0].style.backgroundColor = 'yellow';
caixasPaleta[1].style.backgroundColor = 'red';
caixasPaleta[2].style.backgroundColor = 'green';
caixasPaleta[3].style.backgroundColor = 'blue';
