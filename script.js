const paleta = document.getElementsByClassName('color');

paleta[0].style.backgroundColor = 'black';
paleta[1].style.backgroundColor = 'blue';
paleta[2].style.backgroundColor = 'red';
paleta[3].style.backgroundColor = 'green';

const ul = document.querySelector('#pixel-board');
for (let index = 0; index < 25; index += 1) {
  const li = document.createElement('li');
  li.className = 'pixel';
  ul.appendChild(li);
}
document.getElementsByClassName('color')[0].className += ' selected';

// A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

// - Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

// - Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

