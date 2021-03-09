let selectedColor = 'black';

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
      let oldColor = document.getElementById(selectedColor);
      oldColor.classList.remove('selected');
      selectedColor = event.target.id;
      event.target.classList.add('selected');
  }
}, false);