const table = document.getElementById('color-palette');
const pixel = document.getElementById('pixel-board');

function structureTable() {
  const line1 = document.createElement('div');
  line1.className = 'palette'
  table.appendChild(line1);
  for (let columns = 0; columns < 4; columns += 1) {
    const column = document.createElement('div');
    column.className = 'color';
    line1.appendChild(column);
  } 
} structureTable();
const column = document.querySelectorAll('.color');
function styleTable() {
  for (let index = 0; index < column.length; index += 1){
    column[0].style.backgroundColor = 'black';
    column[1].style.backgroundColor = 'green';
    column[2].style.backgroundColor = 'red';
    column[3].style.backgroundColor = 'blue';
  }
} styleTable();
function pixelStructure() {
  for (let lines = 0; lines < 5; lines += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixel.appendChild(pixelLine);  
    for (let columns = 0; columns < 5; columns += 1) {
      column1 = document.createElement('div');
      column1.className = 'pixel';
      pixelLine.appendChild(column1);
      column1.style.backgroundColor = "white";
    }
  }
} pixelStructure();
function blackSelect () {
  column[0].classList.add('selected');
} blackSelect();
document.addEventListener('click', function (event) {
  if(event.target.classList.contains('color') && !event.target.classList.contains(".selected")) {
    document.querySelectorAll(".selected")[0].className = "color";
    event.target.classList.add('selected');
  }
  if (event.target.classList.contains('pixel')){
  event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
  }
})
// function pintarPixel () {
//   table.addEventListener("click", (event) => {
//   const element = event;
//   });
// }