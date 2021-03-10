let palleteColors = document.querySelectorAll('.color');

for (let index = 0; index < palleteColors.length; index += 1) {
  palleteColors[index].addEventListener('click', function () {
    let selectedClass = document.getElementsByClassName('selected')[0];
    selectedClass.classList.remove('selected');
    event.target.classList.add('selected');
  });
}