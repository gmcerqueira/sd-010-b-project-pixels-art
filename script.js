let header = document.createElement('header')
document.body.appendChild(header)

let h1 = document.createElement('h1')
h1.innerHTML = 'Paleta de Cores'
h1.className = 'title'
header.appendChild(h1)

let main = document.createElement('main')
main.id = 'corpo'
document.body.appendChild(main)

let section = document.createElement('secton')
section.id = 'color-palette'
document.body.appendChild(section)


let quantidadeDeCores = 4;
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
span.innerHTML = 'cor'
span.style.color = cores[numeros[index]]
span.className = 'color'
span.id = cores[numeros[index]]
span.style.backgroundColor = cores[numeros[index]]
span.style.border = '1px solid black';
main.appendChild(span)
}
for (let index = 0; index < 5 ; index++) {
  let span = document.createElement('span')
  
  span.style.border = '1px solid black';
  main.appendChild(span)
  }




