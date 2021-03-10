let paletteContainer = document.getElementById('color-palette');
let pixelBoardContainer = document.getElementById('pixel-board');

function criaDiv() {
    let paleta = [1,2,3,4];
    for (i = 0; i < paleta.length; i += 1) {
        let criaPaleta = document.createElement('div');
        criaPaleta.className = 'color';
        paletteContainer.appendChild(criaPaleta);
    }
    return paletteContainer;
}
criaDiv();

function criaTela() {;
    for (j = 0; j < 25; j += 1) {
        let criaPixel = document.createElement('div');
        criaPixel.className = 'pixel';
        pixelBoardContainer.appendChild(criaPixel);
    }
    return pixelBoardContainer;
}
criaTela();

document.getElementsByClassName('color')[0].className += ' selected';
document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'yellow';
