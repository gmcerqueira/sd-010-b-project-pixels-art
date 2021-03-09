const box = document.getElementsByClassName('color');

box[0].style.backgroundColor = 'black';
box[1].style.backgroundColor = 'blue';
box[2].style.backgroundColor = 'red';
box[3].style.backgroundColor = 'green';

const ul = document.querySelector('#pixel-board');
for (let index = 0; index < 25; index += 1) {
  const li = document.createElement('div');
  li.className = 'pixel';
  ul.appendChild(li);
}
document.getElementsByClassName('color')[0].className += ' selected';

// A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

// - Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

// - Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

function changeClass() {
  let box = document.getElementsByClassName('color')
  for (let index = 0; index < box.length; index += 1) {
    box[index].addEventListener('click', (event) => {
      if (box[index].className == "color selected") {
        event.target.changeName = "color";

      } else {
        event.target.className += ' selected';

  }}
      )
  }
}

changeClass();
paleta[1].addEventListener('click')