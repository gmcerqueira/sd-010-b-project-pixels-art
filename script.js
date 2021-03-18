document.getElementsByClassName('color')[0].className = 'color selected';

const color = document.getElementsByClassName('color');
const palette = document.getElementById('color-palette');
function colorPicker() {
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function () {
      palette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

colorPicker();
