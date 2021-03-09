// Colocando as cores na paleta de cores --> Amazon App

firstBoxColor = document.querySelector('.color');

firstBoxColor.style.backgroundColor = 'black';
firstBoxColor.nextElementSibling.style.backgroundColor = '#CEA968';
firstBoxColor.nextElementSibling.nextElementSibling.style.backgroundColor = '#E4C083';
firstBoxColor.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = '#08AAE3';
// Pegando os elementos de depois

//Criando um quadro de pixels dinamicamente

divTable = document.createElement('div');
divTable.id = 'pixel-board';
lines = 5;
columns = 5;

document.body.appendChild(divTable);

for(let index = 0; index < lines; index +=1){
    divTr = document.createElement('div');
    divTr.className = 'tr';
    divTable.appendChild(divTr);
    for(let index = 0; index < columns; index +=1){
        divBox = document.createElement('div');
        divBox.className = 'pixel';
        divTr.appendChild(divBox);
    }
}