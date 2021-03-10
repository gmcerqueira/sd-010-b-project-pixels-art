window.onload = function () {
  let palette = document.getElementsByClassName('color');
  let selectedColor = 1;

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

  function changeClass () {
    if (palette[0].addEventListener('click', function () {
        changeColor(palette[0]);

        //addClassName
        palette[0].className = "color color1 selected";
        selectedColor = 1;
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
      selectedColor = 2;
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
      selectedColor = 3;
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
      selectedColor = 4;
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

  function paintPixel () {
    let pixel = document.getElementsByClassName('pixel');

    for (let index = 0; index < 25; index ++) {
      if (pixel[index].addEventListener('click', function () {
        switch (selectedColor) {
          case 1:
            pixel[index].className = "pixel color1"
            break;
          
          case 2:
            pixel[index].className = "pixel color2"
            break;
        
          case 3:
            pixel[index].className = "pixel color3"
            break;

          case 4:
            pixel[index].className = "pixel color4"
            break;
        
          default:
            pixel[index].className = "pixel color5"
            break;
        }
      })
      ) {
        console.log('Não foi possível identificar o pixel selecionado!');
      }
    }
  }

  addPixel();

  changeClass();

  paintPixel();
}

