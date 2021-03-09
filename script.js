function generatorPixels(qttPixel) { 
  let pixelBoard = document.getElementById("pixel-board");
  for(let i = 1; i <= qttPixel; i += 1) {
    let divTr = document.createElement("div");
    divTr.className = "tr";
    creatDivTd(divTr, qttPixel);
    pixelBoard.appendChild(divTr);
  }
}

function creatDivTd(divTr, qttPixel) {
  for(let i = 1; i <= qttPixel; i += 1) {
    let divTd = document.createElement("div");
    divTd.className = "pixel";
    divTr.appendChild(divTd);
  }

  
}

generatorPixels(5);