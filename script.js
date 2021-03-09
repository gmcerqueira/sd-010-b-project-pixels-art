let paletteContainer = document.getElementById('color-palette');

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


document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'white';