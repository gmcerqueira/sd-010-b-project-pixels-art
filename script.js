let paleta = document.createElement("table");
paleta.id = "color-palette";
document.body.appendChild(paleta);

for(i=0; i<4; i++){
    let criaCelula = document.createElement("td");
    criaCelula.className = "color";
    paleta.appendChild(criaCelula);
}

celulaPaleta = document.getElementsByClassName("color");
celulaPaleta[0].style.backgroundColor = "black";
celulaPaleta[1].style.backgroundColor = "saddlebrown";
celulaPaleta[2].style.backgroundColor = "papayawhip";
celulaPaleta[3].style.backgroundColor = "lightblue";

let quadro = document.createElement("table");
quadro.id = "pixel-board";
document.body.appendChild(quadro);

for(j=0;j<5;j++){
    let linhaTabela = document.createElement("tr");
for(k=0;k<5;k++){
    let criaCelular = document.createElement("td");
    criaCelular.className = "pixel";
    linhaTabela.appendChild(criaCelular);
    quadro.appendChild(linhaTabela);
}
}
