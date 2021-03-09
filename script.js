let paletaDeCores = document.createElement("table");
paletaDeCores.id = "color-pallete"
document.body.appendChild(paletaDeCores);

for (i=0; i<4; i++) {
    let coresDaPaleta = document.createElement("td");
    coresDaPaleta.className = "color";
    paletaDeCores.appendChild(coresDaPaleta);
}

let coresDaPaleta = document.getElementsByClassName("color");
coresDaPaleta[0].style.backgroundColor = "brown";
coresDaPaleta[1].style.backgroundColor = "purple";
coresDaPaleta[2].style.backgroundColor = "pink";
coresDaPaleta[3].style.backgroundColor = "magenta"
