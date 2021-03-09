let paletaRed = window.document.getElementsByClassName('color')[0];
paletaRed.style.background = 'black';
let paletaBlue = window.document.getElementsByClassName('color')[1];
paletaBlue.style.background = 'red';
let paletaGreen = window.document.getElementsByClassName('color')[2];
paletaGreen.style.background = 'blue';
let paletaPurple = window.document.getElementsByClassName('color')[3];
paletaPurple.style.background = 'green';

let pixelBoard = window.document.getElementById('pixel-board');
for (lines = 0; lines < 5; lines += 1) {
    let tableRow = window.document.createElement('tr');
    pixelBoard.appendChild(tableRow)
    for (columns = 0; columns < 5; columns += 1) {
        let tableCell = window.document.createElement('th')
        tableCell.style.background = "white";
        tableCell.className = "pixel"
        tableCell.style.border = "solid black 1px"
        tableRow.appendChild(tableCell)
    }
}