window.onload = function () {

  function createPixel () {
    //seleciona a classe "corpo", 
    //x será um array pois pode haver mais de uma classe
    let pixelBoard = document.getElementById("pixel-board");
    let newPixel = document.createElement("div");

    newPixel.setAttribute('class', 'pixel color5');

    pixelBoard.appendChild(newPixel)
  }

  function addPixel () {
    for (let indice = 0; indice < 25; indice++) {
      createPixel();
    }
  }

  addPixel();

  function changeClass () {
    let palette = document.getElementsByClassName('color');
    
    if (palette[0].addEventListener('click', function () {
        console.log('1');
        changeColor(palette[0]);
      })
    ) {
      console.log('1 if');
    }

    if (palette[1].addEventListener('click', function () {
        console.log('2');
      })
    ) {
      console.log('2 if');
    }

    if (palette[2].addEventListener('click', function () {
        console.log('3');
      })
    ) {
      console.log('3 if');
    }

    if (palette[3].addEventListener('click', function () {
        console.log('4');
      })
    ) {
      console.log('4 if');
    }
  }

  function changeColor (palette) {
    let computedColor = window.getComputedStyle(palette).getPropertyValue("background-color")
    console.log(palette);
    console.log(computedColor);
  }

  changeClass();
}

