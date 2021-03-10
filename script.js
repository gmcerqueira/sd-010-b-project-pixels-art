let quadros = document.getElementById('pixel-board');
let n = 5;

for(let indexLinhas = 0; indexLinhas < n; indexLinhas += 1) {
    let linha = document.createElement('tr');
    for (let indexColunas = 0; indexColunas < n;indexColunas += 1) {
        let coluna = document.createElement('td')
        coluna.className = 'pixel';
        linha.appendChild(coluna);
        quadros.appendChild(linha);
    }
}