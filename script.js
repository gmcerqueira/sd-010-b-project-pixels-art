const palleteBox = document.getElementById('color-palette');
let square = [1, 2, 3, 4];

function createDivs() {
  for (let index = 0; index < square.length; index += 1 ) {
    let squareBox = document.createElement('div');
    squareBox.className = 'color';
    palleteBox.appendChild(squareBox)
  }
  return palleteBox;
}
createDivs();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'yellow';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';

