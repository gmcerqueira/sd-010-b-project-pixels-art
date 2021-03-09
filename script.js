// Adicionando as cores

let paleta = document.querySelector('#color-palette');
for (let box = 0; box < 4; box += 1){
    let cor = document.createElement('div')
    cor.className = 'color'
    paleta.appendChild(cor);
}

let cores = document.querySelectorAll('.color')

let corBlack = cores[0]
corBlack.style.backgroundColor = 'black';

let corRed = cores[1]
corRed.style.backgroundColor = 'red';

let corGreen = cores [2]
corGreen.style.backgroundColor = 'green';

let corBLue = cores[3]
corBLue.style.backgroundColor = 'blue';


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
