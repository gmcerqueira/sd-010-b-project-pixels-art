window.onload 




















let paleta = document.createElement('table')
document.body.appendChild(paleta) 
paleta.id = 'pixel-board'

for (let index = 0; index < 5; index += 1){
    let linhaPaleta = document.createElement('tr')
    paleta.appendChild(linhaPaleta)

    for (let index = 0; index < 5; index += 1){
        let elementoPixel = document.createElement('td')
        linhaPaleta.appendChild(elementoPixel)
        elementoPixel.className = 'pixel'    
}
}


        
