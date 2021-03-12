// Inicia com a cor preta selecionada

window.onload = function(){
    document.getElementById('black').classList.add('selected')   
    }
///////////////////////////////////////////////////////////

// Quadrado de pixels 

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

//////////////////////////////////////////////////////////

// Atribui a classe 'selected' a outras cores

let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')

li.forEach(el => {
    el.addEventListener('click', function(){
       ul.querySelector('.selected').classList.remove('selected');
       
       el.classList.add('selected');
    });
});



//////////////////////////////////////////////////////////
//Selecionando a cor

// let cor = document.querySelectorAll('.color')

// function select(){
//     for (let index = 0; index < cor.length; index += 1){
//        cor[index].addEventListener('click', function(){
//            localStorage.setItem('colorSelected', JSON.stringify(cor[index]))
//        }) 
//     }
// }

///////////////////////////////////////////////////////////


// Aplicando as cores

// let pintarPixel = document.getElementById('pixel-board')

// pintarPixel.addEventListener('click', pintar)

// function pintar(evento){
//     let cor = JSON.parse(localStorage.getItem('cores'))
//     if (cor === blackColor){
//         evento.target = blackColor
//     }
// }

//////////////////////////////////////////////////////////

// Botão 'Limpar'

// let botaoLimpar = document.createElement('button')
// document.body.appendChild(botaoLimpar)
// botaoLimpar.innerHTML = "Limpar"
