window.onload = function () {
  let cor = 0;
  const corRGB = document.querySelectorAll('.color');
  let RGB = '';
  const virgula = ', ';

  for (let j = 1; j < corRGB.length; j += 1) {
    for (let i = 0; i < 3; i += 1) {
      cor = Math.floor(Math.random() * 255);
      if (i === 2) {
        RGB += cor;
      } else {
        RGB += cor + virgula;
      }
    }
    corRGB[j].style.background = 'rgb(' + RGB + ')';
    corRGB[0].style.background = 'rgb(000, 000, 000)';
    RGB = '';
  }
};

function addQuadradoPixels() {
  const boxPixel = document.getElementById('pixel-board');
  const table = document.createElement('table');
  boxPixel.appendChild(table);
  const rowPixel = boxPixel.getElementsByTagName('table');
  for (let index = 0; index < 5; index += 1) {
    const tr = document.createElement('tr');
    rowPixel[0].appendChild(tr);
  }
  const columnPixel = boxPixel.getElementsByTagName('tr');
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      columnPixel[i].appendChild(td);
    }
  }
}
addQuadradoPixels();

function addClassSelected() {
  const paletaCores = document.getElementById('color-palette').getElementsByTagName('th');
  // Relembrando: Nesse trexo de codigo e iniciado um loop para encontrar o evento click, encontrado a add na tag clicada um class e removida da que ja tinha a class selected.
  for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].addEventListener('click', function (){
      if (paletaCores[i].className.indexOf('selected') < 0) {
        paletaCores[i].className += ' selected';
        for (let j = 0; j < paletaCores.length; j += 1) {
          if ((paletaCores[j].className.indexOf('selected') > 0) && (j !== i)) {
            paletaCores[j].className = 'color';
          }
        }
      } 
    })
  }
}
addClassSelected();

function colorPixels() {
  const quadradoPixels = document.getElementById('pixel-board').getElementsByTagName('td');
  const paletaCores = document.getElementById('color-palette').getElementsByTagName('th');
  for (let i = 0; i < quadradoPixels.length; i += 1) {
    quadradoPixels[i].addEventListener('click', function (){
      for (let j = 0; j < paletaCores.length; j += 1) {
        if (paletaCores[j].className.indexOf('selected') > 0) {
          quadradoPixels[i].style.background = paletaCores[j].style.background;
        }
      }
    })
  }
}
colorPixels();

function buttonClear() {
  const criarButton = document.body;
  console.log(criarButton);
}
buttonClear();
