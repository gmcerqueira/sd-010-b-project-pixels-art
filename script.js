function createColorPalette() {
  const pallet = document.createElement('ul');
  pallet.id = 'color-palette';
  document.body.appendChild(pallet);
  const colors = ['black', 'blue', 'red', 'green'];
  for (let i = 0; i < colors.length; i += 1) {
    const newColor = document.createElement('li');
    newColor.className = 'color';
    newColor.style.backgroundColor = colors[i];
    pallet.appendChild(newColor);
  }
}

createColorPalette();
