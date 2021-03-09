let selectedColor = 'black';
let oldColor;

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    oldColor = document.getElementById(selectedColor);
    oldColor.classList.remove('selected');
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  } else if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = selectedColor;
  }
});
