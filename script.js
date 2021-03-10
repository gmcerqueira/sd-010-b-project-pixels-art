let palet = document.getElementsByClassName('color');
for (let index = 0; index < palet.length; index +=1) {
  palet[index].addEventListener('click', function(event) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    event.target.classList.add('selected');
  })
}
let quadro = document.getElementsByClassName('pixel');
for (let quadroIndex = 0; quadroIndex < quadro.length; quadroIndex += 1){
  quadro[quadroIndex].addEventListener('click', function(event){
    if (document.getElementsByClassName('color')[0].classList.contains('selected')) {
      event.target.style.background = 'black';
    } if (document.getElementsByClassName('color')[1].classList.contains('selected')) {
      event.target.style.background = 'red';
    } if (document.getElementsByClassName('color')[2].classList.contains('selected')) {
      event.target.style.background = 'blue';
    } if (document.getElementsByClassName('color')[3].classList.contains('selected')) {
      event.target.style.background = 'green';
    }
  })
}

document.getElementById('clear-board').addEventListener('click', limpar);
function limpar () {
let branco = document.getElementsByClassName('pixel');
for (let brancoIndex = 0; brancoIndex < branco.length; brancoIndex += 1){
  branco[brancoIndex].style.background = 'white';
}
}

//Agradeço aos plantões, Raphael Gumieri e Pedro Henrique.