const body = document.body

const paletteBox = document.createElement('div')

paletteBox.className = 'color-palette'

body.appendChild(paletteBox)


/*Cria as cores dinâmicamente */
let colors = []

for (let nColor = 0; nColor < 5; nColor++){
    let colorInt = Math.random()*4095;

    for (let n = 1; n < nColor; n++){
        if (colorInt == parseInt(colors[n])){
           while (colorInt == parseInt(colors[n])){
                colorInt = Math.random()*4095;
           }
        }
    }
    
    if (colorInt == 4095) colorInt = colorInt - 1;

    colorInt = Math.floor(colorInt)
    let colorHex = Number(colorInt).toString(16)
    if(colorHex.length < 3) colorHex += '0'
    colorHex = '#'+colorHex

    colors.push(colorHex)
}
console.log(colors)
/*--------------------------------------------------------- */


for (let color = 0; color < 5; color ++) {
    let colorElement = document.createElement('div')
    colorElement.className = 'color'
    colorElement.style.backgroundColor = colors[color];
    console.log(colors[color])
    paletteBox.appendChild(colorElement)
}