function creatPixelBoard() {
  const pai = document.getElementById('pixel-board');
  const tamanho = document.getElementById('board-size').value;
  let tamanhoTotal = tamanho * tamanho;
 // console.log(tamanhoTotal);
  let tamanhoPixelBoard = pai.style.width = ((43 * tamanho) + 'px');
 // console.log(tamanhoPixelBoard);

  //console.log(tamanhoTotal);

  for (let index = 0; index < tamanhoTotal; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    div.id = ('box' + (index + 1));
    pai.appendChild(div);
  }
  escutaClick();
}

function setColor(event) {
  const idBox = event.target.id;
  const idPaleta = document.querySelector('.selected');
  const colorPaleta = window.getComputedStyle(idPaleta, null).backgroundColor;
  // console.log('box a colorir ' + idBox);
  // console.log(typeof (idBox));
  // console.log('cor a colorir ' + colorPaleta);
  // console.log(typeof (colorPaleta));
  document.getElementById(idBox).style.backgroundColor = colorPaleta;
 }

function changeSelected(event) {
  const identificador = event.target.id;
  document.getElementById('blackBox').classList.remove('selected');
  document.getElementById('blueBox').classList.remove('selected');
  document.getElementById('pinkBox').classList.remove('selected');
  document.getElementById('redBox').classList.remove('selected');
  document.getElementById(identificador).classList.add('selected');
}

function escutaClick() {
  // Escuta paleta de Cores
  document.getElementById('blackBox').addEventListener('click', changeSelected);
  document.getElementById('blueBox').addEventListener('click', changeSelected);
  document.getElementById('pinkBox').addEventListener('click', changeSelected);
  document.getElementById('redBox').addEventListener('click', changeSelected);
  // Escuta box de pixels

  const boxes = document.getElementsByClassName('pixel');
  for (let index = 0;index < boxes.length; index += 1 ){
    boxes[index].addEventListener('click', setColor);
  }
}



function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}

// function inicializar() {
//   creatPixelBoard();
//   escutaClick();
  
// }

// window.onload = inicializar;
