let colorsList = [
  'rgb(0, 0, 0)',
  'rgb(214, 40, 40)',
  'rgb(247, 127, 0)',
  'rgb(0, 48, 73)'
];

let colorItems = document.querySelectorAll('.color');

function buttonColor() {
  for (let i = 0; i < colorItems.length; i++) {
    colorItems[i].style.backgroundColor = colorsList[i];
  }
}

buttonColor();

let pixelBoard = document.querySelector('#pixel-board'); // All board
console.log(pixelBoard);

let j = 1
function createPixel(rowNumber) {
	let pixel = document.createElement('td');
	let row = document.querySelectorAll(`#pixel-board>tr`);
	console.log(row);
	pixel.className = 'pixel';
	row[rowNumber].appendChild(pixel);
}

let i = 1;
function createRow(rowNumber) {
	let row = document.createElement('tr');
	console.log(i);
	pixelBoard.appendChild(row);
	for (let i = 0; i < 5; i++) {
		createPixel(rowNumber);
	}
}

for (let i = 0; i < 5; i++) {
	createRow(i);
}
