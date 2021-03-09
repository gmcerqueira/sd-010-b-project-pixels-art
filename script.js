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

// ### 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

// - O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

// - Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

document.getElementsByClassName('color')[0].className += ' selected';
