//criando a tabela com disponibilidade para alteração de tamanho
function tableMaker() {
  const tabela = document.querySelector("#pixel-board")//chamada tabela
  let tamanho = 5;
  for (let index = 1; index <= tamanho; index += 1) {
    let linha = document.createElement('tr');
    for (let index2 = 1; index2 <= tamanho; index2 += 1) {
      let pixel = document.createElement('td');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
    linha.className = 'line';
    tabela.appendChild(linha);
  }
}
tableMaker();


let backButton = document.getElementById('clear-board');
backButton.addEventListener('click', resetButton);

function resetButton() {
  const clear = document.querySelectorAll('.pixel');
  for (let index = 0; index < clear.length; index += 1) {
    clear[index].style.backgroundColor = 'white';
  }
}

let listCollors = document.querySelectorAll('.color');
let black = document.querySelector('.color');
black.classList.add('selected');
let fullColors = document.getElementsByClassName('pixel');
let selectedColor = document.getElementsByClassName('selected');

//para a função de pegar cor e repassar para o pixel contei com a aula/ajuda de Luiz Paulo 'LP' T10B para entender sobre addEventlistener e seu acompanhamento para a elaboração das funções
function selection() {
  for (let index = 0; index < listCollors.length; index += 1) {
    listCollors[index].addEventListener('click', changeClass);
  }
}
selection();

function changeClass(styleClass) {
  for (let index = 0; index < listCollors.length; index += 1) {
    if (listCollors[index].classList.contains('selected')) {
      listCollors[index].classList.remove('selected');
    }
  }
  styleClass.target.classList.add('selected');
}

function colorAcquire() {

  for (let index = 0; index < fullColors.length; index += 1) {
    fullColors[index].addEventListener('click', colorSelector);
  }
}
colorAcquire();

function colorSelector(clickar) {

  clickar.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}