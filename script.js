//Cria a tabela de paleta de cores
let paletaDeCores = document.createElement("table");
paletaDeCores.id = "color-pallete"
document.body.appendChild(paletaDeCores);

//Cria a célula para cada uma das cores selecionaveis
for (i=0; i<4; i++) {
    let coresDaPaleta = document.createElement("td");
    coresDaPaleta.className = "color";
    paletaDeCores.appendChild(coresDaPaleta);
}

//Determina as cores que fazem parte da paleta
let coresDaPaleta = document.getElementsByClassName("color");
let black = coresDaPaleta[0];
let purple = coresDaPaleta[1];
let pink = coresDaPaleta[2];
let magenta = coresDaPaleta[3];

black.classList.add("selected");

black.style.backgroundColor = "black";
purple.style.backgroundColor = "purple";
pink.style.backgroundColor = "pink";
magenta.style.backgroundColor = "magenta";

//Cria o quadro onde iremos pintar
let quadroDePixels = document.createElement("table");
quadroDePixels.id = "pixel-board";
document.body.appendChild(quadroDePixels);

//Cria cada uma das células a serem pintadas
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

//Adiciona a classe "selected" para a cor clicada e retira das demais
for (i=0; i<coresDaPaleta.length; i++) {
    coresDaPaleta[i].addEventListener("click", selecionaCor)
}

function selecionaCor(){
    black.classList.remove("selected");
    purple.classList.remove("selected");
    pink.classList.remove("selected");
    magenta.classList.remove("selected");
    this.classList.add("selected");
}

