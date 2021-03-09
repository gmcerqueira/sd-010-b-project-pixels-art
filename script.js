function addElemento () {
  // cria um novo elemento div
  // e dá à ele conteúdo
  let newTable = document.createElement('table');
  newTable.id = 'pixel-board';
  document.body.appendChild(newTable);

  for (let index = 0; index < 5; index += 1) {
    let newTr = document.createElement('tr');
    for (let index2 = 0; index2 < 5; index2 += 1) {
      let newTd = document.createElement('td');
      newTd.className = 'pixel';
      newTd.style.backgroundColor = 'white';
      newTr.appendChild(newTd);
    }
    newTable.appendChild(newTr);
  }
  let sectionAtual = document.querySelector('script');
  document.body.insertBefore(newTable, sectionAtual);
}

addElemento();
