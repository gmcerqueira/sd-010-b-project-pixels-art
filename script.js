// Adicionando as cores

let paleta = document.querySelector('#color-palette');
let corBlack = document.createElement('div');
corBlack.className = 'color'
corBlack.style.backgroundColor = 'black';
paleta.appendChild(corBlack);

let corRed = document.createElement('div');
corRed.className = 'color'
corRed.style.backgroundColor = 'red';
paleta.appendChild(corRed);

let corGreen = document.createElement('div');
corGreen.className = 'color'
corGreen.style.backgroundColor = 'green';
paleta.appendChild(corGreen);

let corBLue = document.createElement('div');
corBLue.className = 'color'
corBLue.style.backgroundColor = 'blue';
paleta.appendChild(corBLue);

// table Row - Criando as cinco linhas

let pixelBoard = document.querySelector('#pixel-board')
for(let line = 0; line < 5; line += 1){
    let box = document.createElement('tr');
    pixelBoard.appendChild(box);
}
// celulas da tabela

let linhas = document.querySelectorAll('#pixel-board, tr'); // recupero todos os elem tr criados da id #pixel-board
for (let line = 1; line < linhas.length; line += 1) {
    for (let colum = 1; colum < linhas.length; colum +=1){
        let box = document.createElement('td')
        box.className = 'pixel';
        linhas[colum].appendChild(box);
    }
}
