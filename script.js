window.onload = creatPixelBoard();


function creatPixelBoard() {
  let pai = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {

    for (let index = 0; index < 5; index += 1) {
    let div = document.createElement('div');
    div.className = 'pixel';
    pai.appendChild(div);
  }

}
}
