document.getElementById('title').innerText = 'Paleta de Cores';

const paletteDiv = document.getElementById('color-palette');
const colorsPalette = document.getElementsByClassName('color');
const colorsPaletteLenght = colorsPalette.length;
const boardOfPixels = document.getElementById('pixel-board');

createColorPaletteDisplay();
setColor(colorsPalette);
createBoardOfPixels();

function createColorPaletteDisplay() {
    for (let i = 0; i < 4; i++) {
        let cel = document.createElement('div');
        cel.className = 'color';
        paletteDiv.appendChild(cel);
    }
}

function createBoardOfPixels() {
    for (let i = 0; i < 5; i++) {
        let line = document.createElement('div');
        line.className = 'line';
        boardOfPixels.appendChild(line);
        for (let j = 0; j < 5; j++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}

//https:wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function randomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

function setColor(element) {
    element[0].style.backgroundColor = 'black';
    for (let i = 1; i < element.length; i++) {
        element[i].style.backgroundColor = randomColor();
    }
}



