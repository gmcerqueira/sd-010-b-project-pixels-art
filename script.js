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




// function adicionaPaletaCores (){
//     let paletaPai = document.getElementById("color-palette");

//     let paletaFilho = document.createElement("div");
//     paletaFilho.className = "color";
//     paletaFilho.style.backgroundColor = "black"
        

//     paletaPai.appendChild(paletaFilho);
    
//     let paletaFilho2 = document.createElement("div");
//     paletaFilho2.className = "color";
//     paletaFilho2.style.backgroundColor = "red"

//     paletaPai.appendChild(paletaFilho2);


//     let paletaFilho3 = document.createElement("div");
//     paletaFilho3.className = "color";
//     paletaFilho3.style.backgroundColor = "blue"

//     paletaPai.appendChild(paletaFilho3);


//     let paletaFilho4 = document.createElement("div");
//     paletaFilho4.className = "color";
//     paletaFilho4.style.backgroundColor = "green"

//     paletaPai.appendChild(paletaFilho4);
// }
// adicionaPaletaCores();