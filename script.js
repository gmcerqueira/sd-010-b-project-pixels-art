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
    let colorPallete = document.querySelectorAll(".color");
    let arrColorPallete = ["black", "orange", "lightblue", "salmon"];
    for (let i in arrColorPallete){
    colorPallete[i].style.backgroundColor = arrColorPallete[i];
    }
    colorPallete[0].classList.add("selected");

    //Mesmo código de cima embora de forma estática
    // colorPallete[0].style.backgroundColor = "black";
    // colorPallete[1].style.backgroundColor = "orange";
    // colorPallete[2].style.backgroundColor = "lightblue";
    // colorPallete[3].style.backgroundColor = "salmon"; 
    // colorPallete[0].classList.add("selected"); 
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
            trTableBoard.appendChild(tdTableBoard);
            boardPixels.appendChild(trTableBoard);  
        }
    }
}

//Adicionando a classe selected na cor clicada e retirando das demais
 function removeAddClassSelected (){
    let colorClass = document.querySelectorAll(".color");
    for (let i = 0; i < colorClass.length; i += 1){
        colorClass[i].addEventListener("click",removeAddSelected);
     }
    function removeAddSelected(){
        for (let i = 0; i < colorClass.length; i += 1){
            colorClass[i].classList.remove("selected");
// Uso do parâmetro classList baseado no conteúdo no site https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList            
        }
        this.classList.add("selected");
// Uso do parâmetro this baseada no conteúdo do site https://desenvolvimentoparaweb.com/javascript/this-javascript-dominando/
    }
 }

 //Pintando o Pixel com a cor selecionada (class = selected)
 function colorPixelSelected () {
     let colorPixel = document.querySelectorAll(".pixel");
     for (let i = 0; i < colorPixel.length; i += 1){
         colorPixel[i].addEventListener("click",toPaintPixel )
     }
     function toPaintPixel (){
        let checkPixel = document.querySelectorAll("td");
            for (let i = 0; i < checkPixel.length; i += 1){
                if (checkPixel[i].className == "color selected"){
                    for (let k = 0; k < colorPixel.length; k += 1){
                    this.style.backgroundColor = checkPixel[i].style.backgroundColor;
                }
            }
        }
    }
 }



window.onload = function (){
    buildingBoard();
    buildingColorPalletes();
    removeAddClassSelected();
    colorPixelSelected()    
}
