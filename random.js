let header = document.createElement('header')
document.body.appendChild(header)

let h1 = document.createElement('h1')
h1.innerHTML = 'Paleta de Cores'
h1.className = 'title'
h1.style.margin = '20px'
header.appendChild(h1)

let main = document.createElement('main')
main.id = 'corpo'
document.body.appendChild(main)

let section = document.createElement('section')
section.id = 'color-palette'


main.appendChild(section)

let section2 = document.createElement('section')
section2.id = 'pixel-board'
section2.className = 'pixel'

main.appendChild(section2)


let quantidadeDeCores = 4;
let tamanho = 5
let cores = ['brown', 'blue', 'red', 'pink', 'green', 'purple', 'orange', 'yellow', 'grey', 'aqua']
let numeros = []
function numero_aleatorio() { 
  while (numeros.length < quantidadeDeCores) {
    let aleatorio = Math.floor(Math.random() * 10);

    if (numeros.indexOf(aleatorio) == -1)
      numeros.push(aleatorio);
  }
//https://pt.stackoverflow.com/questions/214412/sortear-n%C3%BAmeros-sem-repetir-no-javascript#:~:text=time('Sorteando')%3B%20%2F%2F,%2F%2F%20Ordena%20randomicamente%20%7D)%3B%20console.
}
numero_aleatorio()
for (let index = 0; index < quantidadeDeCores ; index++) {
let span = document.createElement('span')
span.innerHTML = '---'
span.style.color = cores[numeros[index]]
span.className = 'color'
span.id = cores[numeros[index]]
span.style.backgroundColor = cores[numeros[index]]
span.style.border = '1px solid black';
section.appendChild(span)
}
for (let index = 0; index < tamanho; index++) {
  let div = document.createElement('div')
  div.style.margin = '41px'
  for (let cont = 0; cont < tamanho; cont++) {
    let span = document.createElement('span')
    let id = (index)+'-'+(cont)
    span.id = id
    span.innerHTML = id
    span.style.border = '1px solid black';
    span.style.backgroundColor = 'White'
    span.style.padding = '20px'
    
    div.appendChild(span)
  }
  section2.appendChild(div)
}




