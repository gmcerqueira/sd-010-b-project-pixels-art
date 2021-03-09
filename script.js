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