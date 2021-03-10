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

//Requisito 6
window.onload = function (){
    let colorBlack = document.getElementById("color-palette").firstElementChild.className = "color selected";
    let colors = document.querySelectorAll(".pixel");

    function adicionaBotaoBlack (){
        for (let i = 0; i <colors.length; i += 1){
            colors[i].addEventListener("click", function(){
                if (colors[i].style.backgroundColor != "black"){
                    colors[i].style.backgroundColor = "black";
                }
            })
        }
    }
    adicionaBotaoBlack();
}


// window.onload = function (){
//     let colorBlack = document.getElementById("color-palette").firstElementChild.className = "color selected";
    
    
// }