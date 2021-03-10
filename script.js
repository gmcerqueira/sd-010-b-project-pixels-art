function criaPixels () {
  let containerPix = document.querySelector('#pixel-board');
  
  let contador = 1;
  for (let index = 0; index < 25; index += 1) {
    let divPixel = document.createElement('div')
    let pulalinha =  document.createElement('br');
    divPixel.className = 'pixel';
    containerPix.appendChild(divPixel);
    contador += 1;
    if (contador === 6) {
      containerPix.appendChild(pulalinha);
      contador = 1;
    };
  };
}
criaPixels();

let cor = 'white';
function pegaCor () {
  let pegaPixelsCores = document.querySelectorAll('.color')
  console.log(pegaPixelsCores)
  for (index = 0; index < pegaPixelsCores.length; index += 1){
    console.log(pegaPixelsCores[index])
    pegaPixelsCores[index].addEventListener('click', function(event){
      console.log('oii')
      mudaClass();
      mudaSelected(event.target)
    });
  }
}
pegaCor();

function mudaSelected (elemento) {
  elemento.className += ' selected';
}

function mudaClass () {
  let pegaPixelsCores = document.querySelectorAll('.color')
  console.log(pegaPixelsCores)
  for (index = 0; index < pegaPixelsCores.length; index += 1){
    console.log('mudaclass')
    pegaPixelsCores[index].className = 'color';
  }
}

