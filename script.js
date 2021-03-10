const table = document.getElementById("color-palette");
const pixel = document.getElementById("pixel-board");

function structureTable () {
  let line1 = document.createElement("div");
    line1.className = "palette"
    table.appendChild(line1);
  
  for (let columns = 0; columns < 4; columns += 1) {
    let column = document.createElement("div");
    column.className = "color";
    line1.appendChild(column);
  } 
} structureTable();

function styleTable () {
  let column = document.querySelectorAll(".color");
  for (let index = 0; index < column.length; index += 1){
    column[0].style.backgroundColor = "black";
    column[1].style.backgroundColor = "green";
    column[2].style.backgroundColor = "red";
    column[3].style.backgroundColor = "blue";
  } 
} 
styleTable();

function pixelStructure () {
  for (let lines = 0; lines < 5; lines += 1) {  
    let pixelLine = document.createElement("div");
    pixelLine.className = "pixelLine"
    pixel.appendChild(pixelLine);
    
    for (let columns = 0; columns < 5; columns += 1) {
      let column1 = document.createElement("div");
      column1.className = "pixel";
      pixelLine.appendChild(column1);
    }
  }
} pixelStructure();
