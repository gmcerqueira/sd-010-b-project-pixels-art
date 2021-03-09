document.getElementById('title').innerText = 'Paleta de Cores';
let paletteDiv = document.getElementById('color-palette');

createColorPaletteDisplay();

let colorsPalette = document.getElementsByClassName('color');
let colorsPaletteLenght = colorsPalette.length;

setColor(colorsPalette);


function createColorPaletteDisplay() {
    for (let i = 0; i < 4; i += 1) {
        let cel = document.createElement('div');
        cel.className = 'color';
        paletteDiv.appendChild(cel);
    }
}

https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function randomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

function setColor(element) {
    element[0].style.backgroundColor = 'black';
    for (let i = 1; i < element.length; i += 1) {
        element[i].style.backgroundColor = randomColor();
    }
}



