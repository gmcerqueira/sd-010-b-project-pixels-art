window.onload = function () {
  let numberOfOption = 4;
  let numberOfItems = 25;

  const elementHeader = document.createElement('header');
  document.body.appendChild(elementHeader);

  const elementTitulo = document.createElement('h1');
  elementTitulo.id = 'title';
  elementTitulo.innerText = 'Paleta de Cores';
  elementHeader.appendChild(elementTitulo);

  const elementos = document.createElement('section');
  document.body.appendChild(elementos);

  const elemento1 = document.createElement('section');
  elementos.appendChild(elemento1);

  const elemento2 = document.createElement('section');
  elementos.appendChild(elemento2);



  const sectionSelectColors = document.createElement('section');
  sectionSelectColors.id = 'color-palette';
  elemento1.appendChild(sectionSelectColors);

  for (let index = 0; index < numberOfOption; index++) {
    const colorOption = document.createElement('div');
    colorOption.className = 'color';
    colorOption.id = 'cor_' + (index + 1);
    sectionSelectColors.appendChild(colorOption);
  }


    const pixelBoard = document.createElement('section');
  pixelBoard.id = 'pixel-board';
  elemento2.appendChild(pixelBoard);

  for (let index = 0; index < numberOfItems; index++) {
    const itemOption = document.createElement('div');
    itemOption.className = 'pixel';
    pixelBoard.appendChild(itemOption);
  }

};
