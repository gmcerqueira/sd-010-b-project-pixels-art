const body = document.body;

const paletteBox = document.createElement('div');

paletteBox.id = 'color-palette';

body.appendChild(paletteBox);

/*Cria as cores dinâmicamente */
let colors = ['black'];

for (let nColor = 1; nColor < 4; nColor += 1){
    let colorInt = Math.random()*4095;

    for (let n = 0; n < nColor; n += 1){
        if (colorInt == parseInt(colors[n])){
           while (colorInt === parseInt(colors[n])){
                colorInt = Math.random()*4095;
           }
        }
    }
    
    if (colorInt == 4095) colorInt = colorInt - 1;

    colorInt = Math.floor(colorInt)
    let colorHex = Number(colorInt).toString(16)
    if (colorHex.length < 3) colorHex += '0';
    colorHex = '#'+colorHex;

    colors.push(colorHex);
}
console.log(colors);
/*----------------------Paleta de Cores---------------------------------- */

for (let color = 0; color < 4; color += 1) {
    let colorElement = document.createElement('div');
    
    colorElement.className = color == 0 ? 'color selected': 'color';
    
    colorElement.style.backgroundColor = colors[color];
    console.log(colors[color]);
    paletteBox.appendChild(colorElement);
}

function selected(event){
    //limpar os selecionados
    let elements = document.querySelectorAll('.color')
    for(let index = 0; index < elements.length; index += 1){
        elements[index].className = 'color';
    }
    event.target.className = 'color selected'
}

paletteBox.addEventListener('click',selected,false)



//Criando o Quadro de Pixels

let pixelBoard = document.createElement('div');
pixelBoard.id = "pixel-board";

body.appendChild(pixelBoard);

for (let linhas = 0; linhas < 5; linhas += 1){
    const line = document.createElement('div');
    pixelBoard.appendChild(line);
    for (let colunas = 0; colunas < 5; colunas += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';

        pixel.style.width = '40px';
        pixel.style.height = '40px';

        line.appendChild(pixel);
    }
}

//Lógica para Preenchimento dos pixels


function fillColor(event){
    //Procurar o Selecionado
    const color = document.querySelector('.selected').style.backgroundColor
    event.target.style.backgroundColor = color
}

pixelBoard.addEventListener('click',fillColor,false)