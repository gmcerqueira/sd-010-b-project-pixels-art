window.onload = function () {
  let numberOfOption = 4;
  let numberOfItems = 25;
  let paletOfColors = null;
  let paletOfPixel = null;
  let selectedColor = null;
  let targetColor = null;
  let colorChanged = 'cor_1';
  let buttonLimpar = null;

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

  const elementoBotao = document.createElement('section');
  elementos.appendChild(elementoBotao);

  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  elementoBotao.appendChild(button);
  buttonLimpar = button;

  const elemento2 = document.createElement('section');
  elemento2.id = 'pixel-board';
  elementos.appendChild(elemento2);
  paletOfPixel = document.querySelector('#pixel-board');

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
  selectedColor = document.querySelectorAll('.color');

  for (let index = 0; index < numberOfItems; index++) {
    const itemOption = document.createElement('div');
    itemOption.className = 'pixel';
    elemento2.appendChild(itemOption);
  }
  targetColor = document.querySelectorAll('.pixel');

  function defaultClass() {
    for (let index = 0; index < selectedColor.length; index++) {
      selectedColor[index].className = 'color';
    }
    return true;
  }
  function defaultClassPixel() {
    for (let index = 0; index < paletOfPixel.length; index++) {
      paletOfPixel[index].style.backgroundColor = 'white';
    }
    return true;
  }

  paletOfColors.addEventListener('click', function (props) {
    if (defaultClass()) {
      props.target.className = 'color selected';
      colorChanged = props.target.id;
    }
  });

  paletOfPixel.addEventListener('click', function (props) {
    if (defaultClassPixel()) {
      props.target.id = colorChanged;
    }
  });

  button.addEventListener('click', function () {
    
  });
};
