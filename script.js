// Inicia a página com a cor preta selecionada

window.onload = function(){
    document.getElementById('black').classList.add('selected')   
    }

//////////////////////////////////////////////////////////

// Quadrado de pixels 
let div = document.createElement('div')
document.body.appendChild(div)

let bigSquare = document.createElement('table')
div.appendChild(bigSquare) 
bigSquare.id = 'pixel-board'

for (let index = 0; index < 5; index += 1){
    let lineSquare = document.createElement('tr')
    bigSquare.appendChild(lineSquare)

    for (let index = 0; index < 5; index += 1){
        let element = document.createElement('td')
        lineSquare.appendChild(element)
        element.className = 'pixel'    
}
}

//////////////////////////////////////////////////////////

// Alterna a atribuição da classe 'selected' à outras cores

let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')

li.forEach(event => {
    event.addEventListener('click', function(){
       ul.querySelector('.selected').classList.remove('selected');
       
       event.classList.add('selected');
    });
});

//////////////////////////////////////////////////////////

// Inicia com a cor preta selecionada para pintar e possibilita escolher outras cores para pintar também

bigSquare.addEventListener('click', painting)

function painting(e) {
    let selectedColor = document.querySelector('.selected');
    let change = getComputedStyle(selectedColor);
    e.target.style.backgroundColor = change.backgroundColor;
  }

/////////////////////////////////////////////////////////

// Insere o botão 'Limpar' que apaga cores previamente preenchidas entre a paleta de cores e o quadrado de pixels

let clearButton = document.createElement('button')
div.insertBefore(clearButton, div.firstElementChild);
clearButton.id = 'clear-board'
clearButton.innerHTML = "Limpar"

let clearing = document.getElementById('clear-board')

clearing.addEventListener('click', clear)

function clear() {
    let clear = document.querySelectorAll('.pixel');
    clear.forEach((event) => { event.style.backgroundColor = 'white'})
  }