// Colocando as cores na paleta de cores

firstBoxColor = document.querySelector('.color');

firstBoxColor.style.backgroundColor = 'green'
firstBoxColor.nextElementSibling.style.backgroundColor = 'pink'
firstBoxColor.nextElementSibling.nextElementSibling.style.backgroundColor = 'black'
firstBoxColor.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red'


console.log(firstBoxColor.nextElementSibling);