function criaPixels () {
  let containerPix = document.querySelector('#container-pixels');
  
  let contador = 1;
  for (let index = 0; index < 25; index += 1) {
    let divPixel = document.createElement('div')
    let pulalinha =  document.createElement('br');
    divPixel.className = 'pixel';
    console.log('heloooo')
    containerPix.appendChild(divPixel);
    contador += 1;
    if (contador === 6) {
      containerPix.appendChild(pulalinha);
      contador = 1;
    };
  };
}
criaPixels();