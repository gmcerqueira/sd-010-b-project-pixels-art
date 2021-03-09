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

  const rowPixel = document.getElementById('pixel-board').getElementsByTagName('table');
 
  for (let index = 0; index < 5; index += 1) {
    const tr = document.createElement('tr');
    rowPixel[0].appendChild(tr);
  }

  const columnPixel = document.getElementById('pixel-board').getElementsByTagName('tr');
  for (let i = 0; i < 5; i += 1) {    
    for (let j = 0; j < 5; j += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      columnPixel[i].appendChild(td);
    }
  }
}
addQuadradoPixels();