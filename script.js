


function creatPixelBoard() {
  const pai = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    for (let index = 0; index < 5; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pai.appendChild(div);
  }

}
}

window.onload = creatPixelBoard();