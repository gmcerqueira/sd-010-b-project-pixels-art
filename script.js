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
        changeColor(palette[0]);

        //addClassName
        palette[0].className = "color color1 selected";
        //resetClassName
        palette[1].className = "color color2";
        palette[2].className = "color color3";
        palette[3].className = "color color4";
      })
    ) {
      console.log('1 if');
    }

    if (palette[1].addEventListener('click', function () {
      changeColor(palette[1]);

      //addClassName
      palette[1].className = "color color2 selected";
      //resetClassName
      palette[0].className = "color color1";
      palette[2].className = "color color3";
      palette[3].className = "color color4";
      })
    ) {
      console.log('2 if');
    }

    if (palette[2].addEventListener('click', function () {
      changeColor(palette[2]);

      //addClassName
      palette[2].className = "color color3 selected";
      //resetClassName
      palette[0].className = "color color1";
      palette[1].className = "color color2";
      palette[3].className = "color color4";
      })
    ) {
      console.log('3 if');
    }

    if (palette[3].addEventListener('click', function () {
      changeColor(palette[3]);
      
      //addClassName
      palette[3].className = "color color4 selected";
      //resetClassName
      palette[0].className = "color color1";
      palette[2].className = "color color3";
      palette[1].className = "color color2";
      })
    ) {
      console.log('4 if');
    }
  }

  function changeColor (palette) {
    window.getComputedStyle(palette).getPropertyValue("background-color");
  }

  changeClass();
}

