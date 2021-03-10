let paletaCores = document.getElementById("color-palette")
let pixel = document.getElementById("pixel-board");
let quadrado = document.getElementById("pixel")
function tabela(){
for (index = 0; index <5; index +=1){
    let quadrado = document.createElement("div");
    pixel.appendChild(quadrado);

    for(index2 = 0; index2 < 5;index2 +=1){
        let tabel = document.createElement("div");
        quadrado.appendChild(tabel);
        tabel.className = " pixel";
    }
};
};
tabela()

