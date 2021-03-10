//Requisito 2 e 3
function adicionaPaletaCores (){
    let paletaPai = document.getElementById("color-palette");
    
    for (let i = 0; i < 4; i += 1){
        let paletaFilho = document.createElement("div");
        paletaFilho.className = "color";
        paletaPai.appendChild(paletaFilho);
    }
}
adicionaPaletaCores();

function adicionaCores (arrayCores){
let divs = document.querySelectorAll(".color")
    for (let i = 0; i < divs.length; i += 1){
        divs[i].style.backgroundColor = arrayCores[i];
    }
}

adicionaCores(["black", "red", "blue", "green"]);

// Requisito 4
// function adicionaQuadroPixels (div){
//     let quadroPai = document.getElementById(div)
    
//     for (let i = 0; i < 5; i += 1){
//         let quadroFilho = document.createElement("div");
//         quadroFilho.className = "pixel divs-class";
        

//         quadroPai.appendChild(quadroFilho);
//     }
// }
// adicionaQuadroPixels("div-1");
// adicionaQuadroPixels("div-2");
// adicionaQuadroPixels("div-3");
// adicionaQuadroPixels("div-4");
// adicionaQuadroPixels("div-5");

function adicionaQuadroPixels (tr){
    let trPai = document.getElementById(tr)

    for (let i = 0; i < 5; i += 1){
        let tdFilho = document.createElement("td");
        tdFilho.className = "pixel";

        trPai.appendChild(tdFilho);
    }
}
adicionaQuadroPixels("linha-1")
adicionaQuadroPixels("linha-2")
adicionaQuadroPixels("linha-3")
adicionaQuadroPixels("linha-4")
adicionaQuadroPixels("linha-5")