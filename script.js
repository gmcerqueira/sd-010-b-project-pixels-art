const paleta = document.getElementsByClassName('color');

paleta[0].style.backgroundColor = 'black';
paleta[1].style.backgroundColor = 'blue';
paleta[2].style.backgroundColor = 'red';
paleta[3].style.backgroundColor = 'green';

let ul = document.querySelector('#pixel-board');
for (let index = 0; index < 25; index += 1) {
  let li = document.createElement('li');
  li.className = 'pixel';
  ul.appendChild(li);
}
