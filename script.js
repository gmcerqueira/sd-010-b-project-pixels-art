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

window.addEventListener("load", selectSelected)

function selectSelected(){
    celulaPaleta[0].classList.add("selected")
}

for(i=0;i<celulaPaleta.length;i++){
    celulaPaleta[i].addEventListener("click", reatribuiClassSelected)
}

function reatribuiClassSelected(){
    celulaPaleta[0].classList.remove("selected")
    celulaPaleta[1].classList.remove("selected")
    celulaPaleta[2].classList.remove("selected")
    celulaPaleta[3].classList.remove("selected")
    this.classList.add("selected")
}

let quadro = document.createElement("table");
quadro.id = "pixel-board";
document.body.appendChild(quadro);

for(j=0;j<5;j++){
    let linhaTabela = document.createElement("tr");
for(k=0;k<5;k++){
    let criaCelulaQuadro = document.createElement("td");
    criaCelulaQuadro.className = "pixel";
    linhaTabela.appendChild(criaCelulaQuadro);
    quadro.appendChild(linhaTabela);
}
}

