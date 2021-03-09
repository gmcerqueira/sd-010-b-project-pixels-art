window.onload = function () {
  let numberOfOption = 4;
  let numberOfItems = 25;
  let paletOfColors = null;
  let selectedColor = null;

  const elementHeader = document.createElement('header');
  document.body.appendChild(elementHeader);

  const elementTitulo = document.createElement('h1');
  elementTitulo.id = 'title';
  elementTitulo.innerText = 'Paleta de Cores';
  elementHeader.appendChild(elementTitulo);

  const elementos = document.createElement('section');
  document.body.appendChild(elementos);

  const elemento1 = document.createElement('section');
  elemento1.id = 'color-palette';
  elementos.appendChild(elemento1);
  paletOfColors = document.querySelector('#color-palette');

  const elemento2 = document.createElement('section');
  elemento2.id = 'pixel-board';
  elementos.appendChild(elemento2);

  for (let index = 0; index < numberOfOption; index++) {
    const colorOption = document.createElement('div');
    if (index === 0) {
      colorOption.className = 'color selected';
    } else {
      colorOption.className = 'color';
    }
    colorOption.id = 'cor_' + (index + 1);
    elemento1.appendChild(colorOption);
  }

  for (let index = 0; index < numberOfItems; index++) {
    const itemOption = document.createElement('div');
    itemOption.className = 'pixel';
    elemento2.appendChild(itemOption);
  }

  selectedColor = document.querySelectorAll('.color');

  function defaultClass() {
    selectedColor[0].className = 'color';
    selectedColor[1].className = 'color';
    selectedColor[2].className = 'color';
    selectedColor[3].className = 'color';
    return true;
  }

  paletOfColors.addEventListener('click', function (props) {
    if (defaultClass()) {
      if (props.target.className == 'color') {
        props.target.className = 'color selected';
      } else {
        console.log('selecionado');
        props.target.className = 'color';
      }
    }
  });
  console.log(selectedColor);
};
