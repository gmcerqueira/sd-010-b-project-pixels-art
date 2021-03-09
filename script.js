function colourSetUp(colorArray) {
  const colors = colorArray;
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'blue';
  colors[3].style.backgroundColor = 'green';
}

window.onload = function () {
  function paletteColour(number) {
    const divFather = document.createElement('div');
    divFather.setAttribute('id', 'color-palette');
    document.body.appendChild(divFather);
    for (let i = 0; i < number; i += 1) {
      const colorPallete = document.createElement('div');
      colorPallete.setAttribute('class', 'color');
      divFather.appendChild(colorPallete);
    }
    const colorsDiv = document.querySelectorAll('.color');
    colourSetUp(colorsDiv);
  }

  paletteColour(4);
};
