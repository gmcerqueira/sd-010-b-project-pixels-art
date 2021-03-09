// Adicionando cores a paleta
const colorPixels = document.querySelectorAll('.color');
const colors = ['black', 'red', 'blue', 'green'];

for (let i = 0; i < colorPixels.length; i += 1) {
  colorPixels[i].style.backgroundColor = colors[i];
}
