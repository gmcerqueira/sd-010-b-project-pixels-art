//Construindo Paleta de Cores
function buildingColorPalletes (){
    //Cria tabela
    let localPallete = document.querySelector ("#color-palette");
    let palleteColors = document.createElement("table");
    localPallete.appendChild(palleteColors);

    //Cria as Td's da tabela ** Como é somente uma linha não cria-se Tr's
    let numberOfPalletesColors = 4;
    for (let i = 0; i < numberOfPalletesColors; i += 1){
        let tdTablePallete = document.createElement("td");
        tdTablePallete.className = "color";
        palleteColors.appendChild(tdTablePallete);
    }

    //Insere as cores
    let arrColorPallete = ["black", "orange", "lightblue", "salmon"];
    colorPallete = document.querySelectorAll(".color");
    for (let i in colorPallete){
        colorPallete[i].style.backgroundColor = arrColorPallete[i];
    }
    
}

//Construindo Quadro de Cores a Pintar
function buildingBoard (){
    //Cria a tabela 
    let localBoard = document.querySelector("#pixel-board");
    let boardPixels = document.createElement("table"); 
    localBoard.appendChild(boardPixels);

    //Cria as Tr's da tabela
    let numberLinesAndColumns = 5;
    for (let i = 0; i < numberLinesAndColumns;  i += 1){
        let trTableBoard = document.createElement("tr");
          
        //Cria as Td's da tabela
        for (let k = 0; k < numberLinesAndColumns; k += 1){
            let tdTableBoard = document.createElement("td");
            tdTableBoard.className = "pixel";
            tdTableBoard.style.backgroundColor = "white";
            tdTableBoard.style.width = "40px";
            tdTableBoard.style.height = "40px";
            tdTableBoard.style.border = "1px solid black"
            trTableBoard.appendChild(tdTableBoard);
            boardPixels.appendChild(trTableBoard);  
        }
    }
}
window.onload = function (){
    buildingBoard();
    buildingColorPalletes();
}
