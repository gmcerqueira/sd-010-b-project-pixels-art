function creatPixelBoard() {
  const pai = document.getElementById('pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    div.id = ('box' + (index + 1));
    pai.appendChild(div);
  }
}

function setColor(event) {
  let idBox = event.target.id;
  let idPaleta = document.querySelector('.selected');
  let colorPaleta = window.getComputedStyle(idPaleta, null).backgroundColor;
  // console.log('box a colorir ' + idBox);
  // console.log(typeof (idBox));
  // console.log('cor a colorir ' + colorPaleta);
  // console.log(typeof (colorPaleta));
  document.getElementById(idBox).style.backgroundColor = colorPaleta;
  //document.getElementById(idBox).cl
}

function changeSelected(event) {
  let identificador = event.target.id;
  document.getElementById('blackBox').classList.remove('selected');
  document.getElementById('blueBox').classList.remove('selected');
  document.getElementById('pinkBox').classList.remove('selected');
  document.getElementById('redBox').classList.remove('selected');
  document.getElementById(identificador).classList.add('selected');
  console.log(identificador);
}

function escutaClick() {
  // Escuta paleta de Cores
  document.getElementById('blackBox').addEventListener('click', changeSelected);
  document.getElementById('blueBox').addEventListener('click', changeSelected);
  document.getElementById('pinkBox').addEventListener('click', changeSelected);
  document.getElementById('redBox').addEventListener('click', changeSelected);

  // Escuta box de pixels
  document.getElementById('box1').addEventListener('click', setColor);
  document.getElementById('box2').addEventListener('click', setColor);
  document.getElementById('box3').addEventListener('click', setColor);
  document.getElementById('box4').addEventListener('click', setColor);
  document.getElementById('box5').addEventListener('click', setColor);
  document.getElementById('box6').addEventListener('click', setColor);
  document.getElementById('box7').addEventListener('click', setColor);
  document.getElementById('box8').addEventListener('click', setColor);
  document.getElementById('box9').addEventListener('click', setColor);
  document.getElementById('box10').addEventListener('click', setColor);
  document.getElementById('box11').addEventListener('click', setColor);
  document.getElementById('box12').addEventListener('click', setColor);
  document.getElementById('box13').addEventListener('click', setColor);
  document.getElementById('box14').addEventListener('click', setColor);
  document.getElementById('box15').addEventListener('click', setColor);
  document.getElementById('box16').addEventListener('click', setColor);
  document.getElementById('box17').addEventListener('click', setColor);
  document.getElementById('box18').addEventListener('click', setColor);
  document.getElementById('box19').addEventListener('click', setColor);
  document.getElementById('box20').addEventListener('click', setColor);
  document.getElementById('box21').addEventListener('click', setColor);
  document.getElementById('box22').addEventListener('click', setColor);
  document.getElementById('box23').addEventListener('click', setColor);
  document.getElementById('box24').addEventListener('click', setColor);
  document.getElementById('box25').addEventListener('click', setColor);

}

function inicializar() {
  creatPixelBoard();
  escutaClick();
}




function clearBoard(event) {
  let board = document.getElementsByClassName('pixel');
  console.log('LIMPAR BOARD');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}
window.onload = inicializar;
