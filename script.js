let quadroPixels = document.getElementById('pixel-board');
let pixels = document.createElement('div');

for (let i = 0; i < 25; i += 1){
  quadroPixels.appendChild(pixels);
  pixels.className = 'pixel';
}