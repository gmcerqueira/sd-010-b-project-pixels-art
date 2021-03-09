const colorsPalet = document.querySelectorAll(".color");
function inicializeColor() {
  for (let color = 0; color < colorsPalet.length; color++) {
    if(color == 0){
      colorsPalet[color].style.backgroundColor = "black";
      colorsPalet[color].className+= " selected"
    }else if (color == 1) {
      colorsPalet[color].style.backgroundColor = "red";
    }else if(color == 2){
      colorsPalet[color].style.backgroundColor = "green";
    }else if(color == 3){
      colorsPalet[color].style.backgroundColor = "blue";
    }
  }
}

inicializeColor();

function createBorad(height, width) {
  const theBorad = document.querySelector("#pixel-board");

  for (let boardHeight = 0; boardHeight < height; boardHeight++) {
    let lineBoard = document.createElement("tr");
    theBorad.appendChild(lineBoard);
    for (let boardWidth = 0; boardWidth < width; boardWidth++) {
      let lineToAdd = theBorad.lastElementChild;
      let mkPixel = document.createElement("td");
      mkPixel.className = "pixel";
      mkPixel.style.background = "white"
      lineToAdd.appendChild(mkPixel);
    }
  }
}

createBorad(5,5);

function selectColor() {
  for (let color = 0; color < colorsPalet.length; color++) {
    colorsPalet[color].addEventListener("click", function(){
      let lastSelected = document.querySelector(".selected");
      lastSelected.className = lastSelected.className.replace(" selected", "");
      colorsPalet[color].className += " selected";
    });    
  }
}

selectColor();

const allPixels = document.querySelectorAll(".pixel");
function pixelAlive() {
  for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].addEventListener("click", function() {
      let colorSelected = document.querySelector(".selected");
      allPixels[i].style.backgroundColor = colorSelected.style.backgroundColor;
    });    
  }
}

pixelAlive();

const buttoncleaner = document.querySelector("#clear-board");
function clearBoard() {
  buttoncleaner.addEventListener("click", function() {
    for (let pixel = 0; pixel < allPixels.length; pixel++) {
      allPixels[pixel].style.backgroundColor = "white";      
    }
  });
}
clearBoard();
