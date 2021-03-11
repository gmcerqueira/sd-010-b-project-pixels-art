  let input = 5;

  let paletteColor = document.querySelectorAll(".color")
  let firstPaletteColor = document.querySelector(".color");
      firstPaletteColor.style.backgroundColor = "black";
      firstPaletteColor.classList.add('selected');    

  let selectedColor = document.getElementsByClassName("color selected");
  let colors = document.querySelectorAll(".color");
  let pixels = document.querySelectorAll('.pixel');

  function colorSelection(){
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].addEventListener('click', seletionChange)
    }
  }
  colorSelection()

  function seletionChange(picked) {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index].classList.contains('selected')) {
        colors[index].classList.remove('selected');
      }
    }
    picked.target.classList.add('selected');
  };
  
  function colorPainting() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', colorChange);
    }
  };
  colorPainting()

  function colorChange(painting) {
    painting.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  }


  

  // let clearButton = document.getElementById("clear-board").addEventListener("click", clearBoard)
  // function clearBoard(clearing) {
  //     let clear = document.querySelectorAll(".pixel");
  //     for (let i = 0; i < clear.length; i += 1){
  //         clearing.clear[i].style.backgroundColor = "white";
  //     }
  // }

  function randomColors() {
    for (let index = 1; index < paletteColor.length; index += 1) {
        paletteColor[index].style.backgroundColor = getRandomColor()
    }
}
randomColors();
// Esse código de gerar cores aleatórias retirei do stackoverflow: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}