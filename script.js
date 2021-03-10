let paleta = document.createElement("table");
paleta.id = "color-palette";
document.body.appendChild(paleta);

for(index = 0; index < 4; index += 1){
    let criaColuna = document.createElement("td");
    criaColuna.className = "color";
    paleta.appendChild(criaColuna);
}

// criaColuna.style.backgroundColor = "black";

colunaPaleta = document.getElementsByClassName("color");
colunaPaleta[0].style.backgroundColor = "black";
colunaPaleta[1].style.backgroundColor = "green";
colunaPaleta[2].style.backgroundColor = "blue";
colunaPaleta[3].style.backgroundColor = "yellow";

/////////////////////////////////////////////////////////////////////////////////////////

// colunaPaleta2 = document.getElementsByClassName("pixel");
// colunaPaleta2[0].style.backgroundColor = "white";
// colunaPaleta2[1].style.backgroundColor = "white";
// colunaPaleta2[2].style.backgroundColor = "white";
// colunaPaleta2[3].style.backgroundColor = "white";

let quadrado = document.createElement("table");
quadrado.id = "pixel-board";
document.body.appendChild(quadrado);

for(i = 0;i < 5;i += 1){
    let linhaTabela = document.createElement("tr");

for(j = 0;j < 5;j += 1){
    let criaColuna2 = document.createElement("td");
    criaColuna2.className = "pixel";
    linhaTabela.appendChild(criaColuna2);
    quadrado.appendChild(linhaTabela);
 }
}

