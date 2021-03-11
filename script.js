window.onload = function trocaCor() {
    
    box1.classList.add("selected")
  }

let box1 = document.querySelector("preto");


window.onload = function(){
  // Botões da paleta
  let buttonBlack = document.querySelector('#preto');
  let buttonRed = document.querySelector('#vermelho');
  let buttonBlue = document.querySelector('#azul');
  let buttonGreen = document.querySelector('#verde');
  //1. Aguardar o click na paleta com o preto selecionado
  buttonBlack.addEventListener('click',blackPaint());
  buttonBlack.addEventListener('click',blackPaint);
  buttonRed.addEventListener('click',redPaint);
  buttonBlue.addEventListener('click',bluePaint);
  buttonGreen.addEventListener('click',greenPaint);
}
function blackPaint(){
  console.log('black');
  let buttonBlack =document.querySelector('#preto');
  let buttonRed =document.querySelector('#vermelho');
  let buttonBlue =document.querySelector('#azul');
  let buttonGreen =document.querySelector('#verde');
  buttonBlack.classList.add('selected');
  buttonBlue.classList.remove('selected');
  buttonGreen.classList.remove('selected');
  buttonRed.classList.remove('selected');
  document.querySelector('.selected').style.backgroundColor = 'black';
  }
function redPaint(){
  //estou escutando
  console.log('red');
  let buttonBlack =document.querySelector('#preto');
  let buttonRed =document.querySelector('#vermelho');
  let buttonBlue =document.querySelector('#azul');
  let buttonGreen =document.querySelector('#verde');
  buttonBlack.classList.remove('selected');
  buttonBlue.classList.remove('selected');
  buttonGreen.classList.remove('selected');
  buttonRed.classList.add('selected');
  document.querySelector('.selected').style.backgroundColor = 'red';
}
function bluePaint(){
  //estou escutando
  console.log('blue');
  let buttonBlack =document.querySelector('#preto');
  let buttonRed =document.querySelector('#vermelho');
  let buttonBlue =document.querySelector('#azul');
  let buttonGreen =document.querySelector('#verde');
  buttonBlack.classList.remove('selected');
  buttonBlue.classList.add('selected');
  buttonGreen.classList.remove('selected');
  buttonRed.classList.remove('selected');
  document.querySelector('.selected').style.backgroundColor = 'blue';
}
function greenPaint(){
  //estou escutando
  console.log('green');
  let buttonBlack =document.querySelector('#preto');
  let buttonRed =document.querySelector('#vermelho');
  let buttonBlue =document.querySelector('#azul');
  let buttonGreen =document.querySelector('#verde');
  buttonBlack.classList.remove('selected');
  buttonBlue.classList.remove('selected');
  buttonGreen.classList.add('selected');
  buttonRed.classList.remove('selected');
  document.querySelector('.selected').style.backgroundColor = 'green';
}

//chaaama

