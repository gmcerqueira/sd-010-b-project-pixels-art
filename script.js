//criando a paleta

let paleta = document.querySelector('#color-palette');
for (let box = 0; box < 4; box += 1){
    let cor = document.createElement('div')
    cor.className = 'color'
    paleta.appendChild(cor);
}
// Adicionando as cores
let cores = document.querySelectorAll('.color')

let corBlack = cores[0]
corBlack.className = 'color selected'
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
    box.className='pixel-table'
    pixelBoard.appendChild(box);
}
// celulas da tabela
let contador = 1;
let linhas = document.querySelectorAll('#pixel-board, tr'); // recupero todos os elem tr criados da id #pixel-board
for (let line = 1; line < linhas.length; line += 1) {
    for (let colum = 1; colum < linhas.length; colum +=1){
        let box = document.createElement('td')
        box.className = 'pixel';
        box.id = contador ++;
        linhas[colum].appendChild(box);
    }
}

// cor selecionada
sessionStorage.setItem('color', corBlack.style.backgroundColor);

function corSelecionada(index){
    if (index === 0){
        sessionStorage.setItem('color',corBlack.style.backgroundColor);
        corBlack.className = 'color selected';
        corRed.className = 'color';
        corBLue.className = 'color';
        corGreen.className = 'color';
    } else if(index === 1){
        sessionStorage.setItem('color',corRed.style.backgroundColor);
        corBlack.className = 'color';
        corRed.className = 'color selected';
        corBLue.className = 'color';
        corGreen.className = 'color';
    }else if(index === 2){
        sessionStorage.setItem('color',corBLue.style.backgroundColor);
        corBlack.className = 'color';
        corRed.className = 'color';
        corBLue.className = 'color selected';
        corGreen.className = 'color';
    }else if(index === 3){
        sessionStorage.setItem('color',corGreen.style.backgroundColor);
        corBlack.className = 'color';
        corRed.className = 'color';
        corBLue.className = 'color ';
        corGreen.className = 'color selected';
    }
}

corBlack.addEventListener('click',function() {corSelecionada(0)});
corRed.addEventListener('click', function() {corSelecionada(1)});
corBLue.addEventListener('click', function() {corSelecionada(2)});
corGreen.addEventListener('click', function() { corSelecionada(3)});

// Adicionando cor ao quadrado selecionado

let pixelTable = document.getElementsByClassName('pixel');
let selectedColor= document.getElementsByClassName(corSelecionada());
let corAPintar = selectedColor.style.backgroundColor;

//  pixelTable.addEventListener('click', function(evento){
//     let corDoEvento = evento.target
//  })
console.log(pixelTable);
console.log(selectedColor)
