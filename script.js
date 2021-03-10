window.onload = function() {
    let pixelPalette = 4;
    // let pixelBoardLength = window.prompt("Enter the number of elements you want for the Pixel-board");
    let pixelBoardLength = 5;
    let pixelBoardBase = 5;
    let colorPalette = document.querySelector("#color-palette");

    let firstPaletteColor = document.querySelector(".color");
        firstPaletteColor.style.backgroundColor = "black";
    let secondPaletteColor = document.querySelectorAll(".color")[1];
        secondPaletteColor.style.backgroundColor = "red";
    let thirdPaletteColor = document.querySelectorAll(".color")[2];
        thirdPaletteColor.style.backgroundColor = "green"; 
    let fourthPaletteColor = document.querySelectorAll(".color")[3];
        fourthPaletteColor.style.backgroundColor = "yellow"; 


    let lines = document.querySelectorAll(".lines");
    fillBoard(lines);

    // repeatLines(lines);

    // function createPalette(pixelPalette) {        
    //     let pixelColorPalette = document.createElement("div");
    //     for (let index = 0; index < pixelPalette; index += 1) {
    //         colorPalette.appendChild(pixelColorPalette)[index];
    //         colorPalette[index].className = "color";
    //     }
    // } 

    function fillBoard(lines)  {
        for (let i = 0; i < pixelBoardLength; i += 1) {
            createBoardLines(lines[i]);            
        }
    }

    function createBoardPixel(className) {
        let pixel = document.createElement("div");
        pixel.className = className;
        return pixel;
        }   

    function createBoardLines(divLine) {
        for (let n = 0; n < pixelBoardLength; n += 1) {
            if (pixelBoardLength >= 0 && pixelBoardLength <= 50) {
                let pixel = createBoardPixel("pixel");
                divLine.appendChild(pixel);
            } else {
                alert ("Board inválido");
                break;
            }
        }
    }   
}
   


