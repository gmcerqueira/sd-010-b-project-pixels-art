let colorsList = [
  'rgb(0, 0, 0)',
  'rgb(214, 40, 40)',
  'rgb(247, 127, 0)',
  'rgb(0, 48, 73)'
];

function buttonColor() {
  let colorItems = document.getElementsByClassName('color');
  for (let i = 0; i < colorItems.length; i++) {
    colorItems[i].style.backgroundColor = colorsList[i];
  }
}

buttonColor();
