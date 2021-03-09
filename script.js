// cria a tabela 5x5 dinamicamente
window.onload = function() {
  let n = 5;
  function createGrid(size) {
    let board = document.getElementById('pixel-board');
    for (let index = 0; index < n; index += 1) {
      let row = document.createElement('TR');
      row.id = `row${index}`;
      board.appendChild(row);
      for (let index2 = 0; index2 < n; index2 += 1) {
        let cell = document.createElement('TD');
        cell.className = "pixel";
        cell.style.backgroundColor = 'white';
        row.appendChild(cell);
      }
    }
  }
  createGrid(5);
};