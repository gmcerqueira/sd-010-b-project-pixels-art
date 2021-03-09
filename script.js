let table = document.getElementById("color-palette");
let pixel = document.getElementById("pixel-board");

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
let line = document.getElementsByTagName("div");
let column = document.querySelectorAll(".color");

// function randomColor () {
//   let numbers = "0123456789ABCDEF";
//   let color = "#";
//   for ( let i = 0; i < 6; i += 1) {
//     color += numbers[Math.floor(Math.random() * 16)];
//   } 
//   return color
// } // https://stackoverflow.com/questions/1484506/random-color-generator

// function styleTable () {
//   let random = $(".color").css("background-color", getRandomColor());
//   for (let index = 0; index < column.length; index += 1) {
//     column[index] = random;
//   }
// } styleTable()
function styleTable () {
  for (let index = 0; index < column.length; column += 1){
    column[0].style.backgroundColor = "black";
    column[1].style.backgroundColor = "green";
    column[2].style.backgroundColor = "red";
    column[3].style.backgroundColor = "blue";
  }
} styleTable();
// function selectColor () {
//   for (let index = 0; index < column.length; column += 1){
//     column.className = "select-color";
//   }
// }

function pixelStructure () {
  for (let lines = 0; lines < 5; lines += 1) {  
    let pixelLine = document.createElement("div");
    pixel.appendChild(pixelLine);
    
    for (let columns = 0; columns < 5; columns += 1) {
      let column1 = document.createElement("div");
      column1.className = "pixel";
      pixelLine.appendChild(column1);
    }
  }
} pixelStructure();
