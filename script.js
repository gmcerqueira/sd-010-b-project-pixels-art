let paleta = document.createElement("table");
paleta.id = "color-palette";
document.body.appendChild(paleta);

for(index = 0; index < 4; index += 1){
    let criaColuna = document.createElement("td");
    criaColuna.className = "color";
    paleta.appendChild(criaColuna);
}

colunaPaleta = document.getElementsByClassName("color");
colunaPaleta[0].style.backgroundColor = "black";
colunaPaleta[1].style.backgroundColor = "green";
colunaPaleta[2].style.backgroundColor = "blue";
colunaPaleta[3].style.backgroundColor = "yellow";

/////////////////////////////////////////////////////////////////////////////////////////

let quadrado = document.createElement("table");
quadrado.id = "pixel-board";
document.body.appendChild(quadrado);

for(i = 0;i < 5;i += 1){
    let linhaTabela = document.createElement("tr");

for(j = 0;j < 5; j += 1){
    let criaColuna = document.createElement("td");
    criaColuna.className = "pixel";
    linhaTabela.appendChild(criaColuna);
    quadrado.appendChild(linhaTabela);
 }
}

