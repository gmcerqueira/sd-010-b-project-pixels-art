function addElemento () {
  // cria um novo elemento div
  // e dá à ele conteúdo
  let newSection = document.createElement('section');
  newSection.id = 'pixel-board';
  document.body.appendChild(newSection);

  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      let newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      newDiv.style.backgroundColor = 'white';
      newSection.appendChild(newDiv);
    }
  }
  let sectionAtual = document.querySelector('script');
  document.body.insertBefore(newSection, sectionAtual);
}
addElemento();
