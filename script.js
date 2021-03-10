const pixel = document.getElementById('pixel-board');

function matrix() {
  for (let index = 0; index < 5; index += 1) {
    const square = document.createElement('div');
    pixel.appendChild(square);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const variable = document.createElement('div');
      square.appendChild(variable);
      variable.className = 'pixel';
    }
  }
}
matrix();
// questão resolvida com a ajuda do colega durante grupo de estudos;

function SelectColor() {
  const firstColorSelected = document.querySelector('.selected');

  const Colors = document.querySelectorAll('.color');

  for (let index = 0; index < Colors.length; index += 1) {
    Colors[index].addEventListener('click', function () {
      Colors[index].classList.add = 'color selected';
      firstColorSelected.className = 'color';
    });
  }
  const SelectedColor = document.querySelector('.selected');
  return SelectedColor;
}
SelectColor();
// Esta questão foi resolvida após ver a postagem de uma colega no Slack da Turma 10/Tribo A.
