const body = document.body

const paletteBox = document.createElement('div')

paletteBox.className = 'color-palette'

body.appendChild(paletteBox)


/*Cria as cores dinâmicamente */
let colors = ['black']

for(let nColor = 1; nColor < 5; nColor++){
    let colorInt = Math.random()*16777215; 
    if (colorInt == 16777215) colorInt = colorInt - 1000;

    colorInt = Math.floor(colorInt)
    let colorHex = `#${Number(colorInt).toString(16)}`
    colors.push(colorHex);
}

console.log(colors)

for (let color = 0; color < 5; color ++) {
    let colorElement = document.createElement('div')
    colorElement.className = 'color'
    paletteBox.appendChild(colorElement)
}