let table = document.querySelector("#color-palette");

function structureTable () {
  let line1 = document.createElement("tr");
    line1.id = "color-palette";
    table.appendChild(line1);
  
  for (let columns = 0; columns < 3; columns += 1) {
    let column = document.createElement("td");
    column.className = "color";
    line1.appendChild(column);
  } 
} structureTable();
let line = document.getElementsByTagName("tr");
let column = document.getElementsByTagName("td");

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
  }
} styleTable();