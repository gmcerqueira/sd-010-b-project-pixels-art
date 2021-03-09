window.onload = function () {

  function createPixel () {
    //seleciona a classe "corpo", 
    //x será um array pois pode haver mais de uma classe
    let pixelBoard = document.getElementById("pixel-board");
    let newPixel = document.createElement("div");

    newPixel.setAttribute('class', 'pixel color5')

    pixelBoard.appendChild(newPixel)
  }

  function addPixel () {
    for (let indice = 0; indice < 25; indice++) {
      createPixel();
    }
  }

  addPixel();
}

