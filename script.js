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
    pintarOQuadro("black");
}
function pintarQuadrado(cor){
    let encontraSelected = document.getElementsByClassName("selected")[0];
    encontraSelected.classList.remove("selected");
    if(cor === "blue") {
        let encontraDiv2 = document.getElementsByClassName("div2")[0];
        encontraDiv2.classList.add("selected");
        pintarOQuadro(cor);
    }
    else if(cor === "black") {
        let encontraDiv1 = document.getElementsByClassName("div1")[0];
        encontraDiv1.classList.add("selected");
        pintarOQuadro(cor);
    }
    else if(cor === "brown") {
        let encontraDiv3 = document.getElementsByClassName("div3")[0];
        encontraDiv3.classList.add("selected");
        pintarOQuadro(cor);
    }
    else if(cor === "cadetblue") {
        let encontraDiv4 = document.getElementsByClassName("div4")[0];
        encontraDiv4.classList.add("selected");
        pintarOQuadro(cor);
    }
}
function pintarOQuadro(cor){
    let encontraPixel = document.querySelectorAll('.pixel');
    encontraPixel.forEach((element) => {
        element.addEventListener('click', (event) => {
        event.target.style.backgroundColor = cor
    })
    })
    
}