// Comentários inseridos para minha própria orientação e possíveis alterações futuras

function createElement(tagName) {
  // CreateElement function: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  const element = document.createElement(tagName); // função generalista para criação de elementos
  return element;
}

function setPaletteColor() {
  const colorPalette = '#color-palette';
  for (let index = 0; index < 4; index += 1) {
    const elem = createElement('span'); // cria uma span, no caso, 4
    elem.classList.add('color'); // adiciona elementos pela id no css, fonte: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    document.querySelector(colorPalette).appendChild(elem); // cria parentesco com colorPallete (que está recebendo a classe collor-pallete)
  }
  const cores = ['black', 'red', 'green', 'blue']; // define as cores manualmente. *Nota*: Mais tarde posso inserir Math.random para deixar aleatório, mas ainda não sei como aplicá-la
  const array = document.getElementById('color-palette').childNodes; // recebe os filhos de color-palette
  array.forEach((element, index) => { // for loop para definir as cores usando "arrow function"
    const elem = element; elem.style.backgroundColor = cores[index];
  });
  const colors = document.getElementsByClassName('color'); // pega as cores pela classe
  colors[0].classList.add('selected'); // define a cor selecionada ao clique
}

function setPixelBoard() { // função para o preenchimento dos pixels
  for (let index = 0; index < 5; index += 1) {
    for (let i = 0; i < 5; i += 1) {
      const elem = createElement('span'); // cria um span
      elem.classList.add('pixel'); // adiciona o pixel
      document.getElementById('pixel-board').appendChild(elem); // adiciona cor
    }
  }
}

function getSelected(event) { // função para trocar a cor selecionada
  const elem = event.target; // fonte: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
  if (!elem.id) { // if abreviado para especificar algo "se for diferente", '!' significa 'não'
    const colors = document.querySelectorAll('.color');
    colors.forEach((element) => element.classList.remove('selected')); // para remover a cor anteriormente selecionada, caso contrário há conflito de cores
    elem.classList.add('selected'); // para adicionar nova cor
  }
  sessionStorage.color = elem.style.backgroundColor; // define a nova cor
}

function paintPixel(event) { // função para alterar a cor de fundo dos pixels
  const elem = event.target;
  if (!elem.id) {
    const colorToPaint = sessionStorage.color;
    elem.style.backgroundColor = colorToPaint; // troca a cor em elem para colorToPaint, que seria a nova cor
  }
}

function clearBoard() { // função para limpar a board dos pixels
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => { e.style.backgroundColor = ''; }); // troca o que tiver no pixel por ''
}
window.onload = function init() { // fonte: https://www.w3schools.com/jsref/event_onload.asp
  sessionStorage.setItem('color', 'black'); // para definir a cor padrão
  setPaletteColor(); // para chamar a função das paletas de cores
  setPixelBoard(); //  para chamar a função da board dos pixels
  document.getElementById('color-palette').addEventListener('click', getSelected); // adiciona o evento "clique do mouse" à paleta de cores
  document.getElementById('pixel-board').addEventListener('click', paintPixel); // adiciona o evento "clique do mouse" à board de pixels
  document.getElementById('clear-board').addEventListener('click', clearBoard); // adiciona o evento "clique do mouse" ao botão Limpar
};
