let cores = document.createElement('table')
cores.id = 'color-palette'
document.body.appendChild(cores)
console.log(cores)

for (i = 0; i < 4; i += 1){
let paletas = document.createElement('tr')
    paletas.className = 'color'
    cores.appendChild(paletas);
}

let paleta = document.getElementsByClassName('color')
let black = paleta[0];
let green = paleta[1];
let red = paleta[2];
let blue = paleta[3];


black.style.backgroundColor = 'black'
green.style.backgroundColor = 'green'
red.style.backgroundColor = 'red'
blue.style.backgroundColor = 'blue'

let pixelBoard = document.createElement('table')
pixelBoard.id = 'pixel-board'
document.body.appendChild(pixelBoard)


for (let i = 0; i < 5; i += 1){
    let primeiraLinha = document.createElement('tr')
    pixelBoard.appendChild(primeiraLinha)
}

let linhas = document.querySelectorAll('#pixel-board tr')

for (let i = 0; i < linhas.length; i += 1){
    for (let index = 0; index < linhas.length; index += 1){
     let celulaColuna = document.createElement('td')
     celulaColuna.className = 'pixel'
     linhas[i].style.backgroundColor = 'white';
     linhas[i].appendChild(celulaColuna)
    }
}



