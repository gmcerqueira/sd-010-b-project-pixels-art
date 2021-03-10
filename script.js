// Captura de elementos HTML
let colorPalete = document.querySelector('#color-palette');
let tablePixels = document.querySelector('#pixel-board');

// --------------------------------------------------------------------------------------

// Criação de elementos DIV, class=color, filhos do elemento Section, ID=ColorPalete.
for (let index = 0; index < 4; index += 1) {
  let newDiv = document.createElement('div');
  colorPalete.appendChild(newDiv).className = "color";
  colorPalete.style.margin = '10px';

  // Regra que garante o backgroundColor da primeira DIV=black, e demais DIVs geradas aleatoriamente via funcão.
  if (index == 0) {
      newDiv.style.background = 'black';
  } else {
      newDiv.style.background = generateRandomColor();
  }

  // Estilização das DIVs colorPalete.
  newDiv.style.borderColor = 'black';
  newDiv.style.borderStyle = 'solid';
  newDiv.style.borderWidth = '1px';
  newDiv.style.margin = '5px';
  newDiv.style.display = 'inline-block';
  newDiv.style.width = '50px';
  newDiv.style.height = '50px';
}

// --------------------------------------------------------------------------------------

// Função: Gera cores aleatórias.
function generateRandomColor () {
  // Esta função foi adaptada da seguinte fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20hexadecimais%20com%20Javascript&text=Multiplicamos%20Math.,o%20valor%20n%C3%BAmerico%20para%20hexadecimal.
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

// --------------------------------------------------------------------------------------

// Criação de elementos DIV, id=line[index1], Height=40px.
for (let index1 = 0; index1 < 5; index1 += 1) {
  let newLine = document.createElement('div');
  tablePixels.appendChild(newLine).id = 'line' + [index1];
  newLine.style.height = '40px';

  // Captura do elemento DIV, id=line[index1] (DIV/Linha atual da iteração)
  let linhaAtual = document.querySelector('#line'+ [index1]);
  
  // Criação de elementos DIV, class=pixel, filhos do elemento DIV, ID=linhaAtual.
  for (let index2 = 0; index2 < 5; index2 += 1) {
    let newColum = document.createElement('div');
    linhaAtual.appendChild(newColum).className = 'pixel';

    // Estilização das DIVs pixels.
    newColum.style.display = 'inline';
    newColum.style.width = '40px';
    newColum.style.height = '40px';
    newColum.style.backgroundColor = 'white';
    newColum.style.borderColor = 'black';
    newColum.style.display = 'inline-block';
    newColum.style.borderStyle = 'solid';
    newColum.style.borderWidth = '1px';
  }
}

function clearPixels() {

}
