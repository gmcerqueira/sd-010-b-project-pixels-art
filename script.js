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

let pixelboard = document.createElement('table')
pixelboard.id = 'pixel-board'
document.body.appendChild(pixelboard)


for (let i = 0; i < 5; i += 1){
    let celula = document.createElement('tr')
    celula.className = 'pixel'
    pixelboard.appendChild(celula)
}

