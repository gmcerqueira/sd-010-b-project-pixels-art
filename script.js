//exercicio 4
    let encotraQuadro = document.getElementById("pixel-board");
    for(let colona = 0;colona < 5;colona++){
   for(let linha = 0;linha < 5;linha++){
    let criarDiv = document.createElement('div');
        criarDiv.classList.add("pixel");
        criarDiv.style.backgroundColor = "white"
        encotraQuadro.appendChild(criarDiv);
    }
    let criaBr = document.createElement("br");
    encotraQuadro.appendChild(criaBr);
}
window.onload = selecionaPreto;

function selecionaPreto(){
    let encontraPreto = document.getElementsByClassName("color")[0];
    encontraPreto.classList.add("selected");
}
function pintarQuadrado(){
    console.log("teste");
}
