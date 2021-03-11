//criando a tabela com disponibilidade para alteração de tamanho
function tableMaker() {
  const tabela = document.querySelector("#pixel-board")//chamada tabela
  let tamanho = 5;
  let count = 0
  for (let index = 1; index <= tamanho; index += 1) {
    let linha = document.createElement('tr');
    for (let index2 = 1; index2 <= tamanho; index2 += 1) {
      let pixel = document.createElement('td');
      count += 1;
      pixel.className = 'pixel';
      
      linha.appendChild(pixel);
    }
    linha.className = 'line';
    tabela.appendChild(linha);
  }
}

tableMaker();
let listCollors = document.querySelectorAll('.color')
let black = document.querySelector('.color');
black.classList.add('selected')
let fullColors = document.getElementsByClassName('pixel')
let selectedColor = document.getElementsByClassName('selected')

function selection(){
  for(index=0; index < listCollors.length; index+=1){
    listCollors[index].addEventListener('click',changeClass)
  }
}
selection()
function changeClass(styleClass) {
}