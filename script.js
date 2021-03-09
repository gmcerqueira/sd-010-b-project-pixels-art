let paletaDeCores = document.createElement("table");
paletaDeCores.id = "color-pallete"
document.body.appendChild(paletaDeCores);

for (i=0; i<4; i++) {
    let coresDaPaleta = document.createElement("td");
    coresDaPaleta.className = "color";
    paletaDeCores.appendChild(coresDaPaleta);
}

let coresDaPaleta = document.getElementsByClassName("color");
coresDaPaleta[0].style.backgroundColor = "black";
coresDaPaleta[1].style.backgroundColor = "purple";
coresDaPaleta[2].style.backgroundColor = "pink";
coresDaPaleta[3].style.backgroundColor = "magenta";

let quadroDePixels = document.createElement("table");
quadroDePixels.id = "pixel-board";
document.body.appendChild(quadroDePixels);

for (i=0; i<5; i++) {
    let tr = document.createElement("tr");
    quadroDePixels.appendChild(tr);
}

let linhasTabela = document.querySelectorAll("#pixel-board tr");
for (i=0; i<linhasTabela.length; i++) {
    for (j=0; j<linhasTabela.length; j++) {
        let cedulasTabela = document.createElement("td");
        cedulasTabela.className = "pixel"
        linhasTabela[i].appendChild(cedulasTabela);
    }
}