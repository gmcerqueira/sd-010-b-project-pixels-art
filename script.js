const pallete = document.getElementById('color-palette');
const arrayPallete = [1, 2, 3, 4];

function viewPallete() {
  for (let index = 0; index < arrayPallete.length; index += 1) {
    const box = document.createElement('div');
    box.className = 'color';
    pallete.appendChild(box);
  }
  return pallete;
}
viewPallete();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';
