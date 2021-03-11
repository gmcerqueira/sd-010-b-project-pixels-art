console.log('l');

function createPixelBoard() {
  const numbersRows = 5;
  for (let indexL = 0; indexL < numbersRows; indexL += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    document.getElementById('pixel-board').appendChild(newRow);
    for (let indexR = 0; indexR < numbersRows; indexR += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      document.getElementsByClassName('row')[indexL].appendChild(newDiv);
    }
  }
} createPixelBoard();

const pixel = document.querySelectorAll('.pixel');
for (let indexA = 0; indexA < document.querySelectorAll('.color').length; indexA += 1) {
  const color = ['black', 'purple', 'green', 'blue'];
  document.querySelectorAll('.color')[indexA].style.backgroundColor = color[indexA];
}

document.querySelectorAll('.color')[0].classList.add('selected');
sessionStorage.setItem('color', document.querySelectorAll('.color')[0].style.backgroundColor);

for (let indexR = 0; indexR < document.querySelectorAll('.color').length; indexR += 1) {
  document.querySelectorAll('.color')[indexR].addEventListener('click', () => {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelectorAll('.color')[indexR].classList.add('selected');
    sessionStorage.setItem('color', document.querySelectorAll('.color')[indexR].style.backgroundColor);
  });
}

for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
  pixel[index].addEventListener('click', () => {
    pixel[index].style.backgroundColor = sessionStorage.color;
  });
}
