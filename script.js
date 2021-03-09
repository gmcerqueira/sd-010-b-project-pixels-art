function inicializeColor() {
  const colorsPalet = document.querySelectorAll(".color");
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

