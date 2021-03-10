// 1-  recuperar o id da classe color que tenha a classe selected e armazenar numa variavel;
//https://developer.mozilla.org/pt-BR/docs/Web/API/element/getAttribute

let selectedColor = document.querySelector('.selected').getAttribute('id');

// 2-mapear o click/ identificar a classe onde houve o clikc / inserir a classe selected na div 
const colorPick = document.querySelectorAll('.color');

//envia pro setColor o id do elemento clicado
for (let i = 0; i < colorPick.length; i += 1) {
  colorPick[i].addEventListener('click', function () {
    setColor(colorPick[i].getAttribute('id'));
  })
}

// 3- remover o selected da classe anterior;

// 4- atualizar a cor selecionada (variável)

function setColor(id) {
  document.getElementById(selectedColor).classList.remove('selected');
  //atualizar a classe
  selectedColor = id
  document.getElementById(id).classList.add('selected');
  console.log(selectedColor);
}
