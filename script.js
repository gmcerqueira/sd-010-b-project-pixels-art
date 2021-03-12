let chamando = document.querySelectorAll('.color');
let pixelMuda = document.getElementsByClassName('pixel');
let btnLimpar = document.getElementById('clear-board');
let pixelBorder = document.getElementById('pixel-board');

let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);


// Cria os Pixels que vão ser coloridos 
function criaPixels() {
  let quadro = document.getElementById('pixel-board');
  for (let j = 0; j < 5; j++) {
    let novaLinha =document.createElement('div');    
    for (let i = 0; i < 5; i++) {
      let divNova = document.createElement('div');
      divNova.classList.add('pixel');
      novaLinha.appendChild(divNova);
    }
    quadro.appendChild(novaLinha);
  }
}
criaPixels();
// Inicia com a cor preta para preenchimento dos pixels
function corInicial() {
  let corPreta = document.querySelector('.c1');
  corPreta.classList.add('selected');
}
// Funcao para ouvir o chamado de pegar a cor
// adicionando funcao de click para pegar a cor
for (let i = 0; i < chamando.length; i++) {
  chamando[i].addEventListener('click', function(){
    let remove = document.getElementsByClassName('selected')[0];
    remove.classList.remove('selected');  
    event.target.classList.add('selected');
  });
}
corInicial();


// função para pintar os pixels 
for (let index = 0; index < pixelMuda.length; index++) {
  pixelMuda[index].addEventListener('click', function(){
    let corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixelMuda[index].style.backgroundColor = corNova;
  });
}

btnLimpar.addEventListener('click', function(){
  for (let i = 0; i < pixelMuda.length; i++) {
  pixelMuda[i].style.backgroundColor = 'white';
  }
});




document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${r},${g},${b})`;
document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${g},${r},${g})`;

