window.onload = function() {
    let pixelPalette = 4;
    let pixelBoardLength = window.prompt("Enter the number of elements you want for the Pixel-board");
    let pixelBoardBase = 5;
    let colorPalette = document.querySelector("#color-palette");
    let firstPaletteColor = document.querySelector(".color");
        firstPaletteColor.style.backgroundColor = "black";
    let lines = document.querySelector("#pixel-board");
    let secondPaletteColor = document.querySelectorAll(".color")[1];
        secondPaletteColor.style.backgroundColor = "red";
    let thirdPaletteColor = document.querySelectorAll(".color")[2];
        thirdPaletteColor.style.backgroundColor = "green"; 
    let fourthPaletteColor = document.querySelectorAll(".color")[3];
        fourthPaletteColor.style.backgroundColor = "yellow"; 

    createBoardLines(pixelBoardLength);
    // repeatLines(pixelBoardLength);

    // function createPalette(pixelPalette) {        
    //     let pixelColorPalette = document.createElement("div");
    //     for (let index = 0; index < pixelPalette; index += 1) {
    //         colorPalette.appendChild(pixelColorPalette)[index];
    //         colorPalette[index].className = "color";
    //     }
    // }  

    function createBoardPixel(className) {
        let pixel = document.createElement("div");
        pixel.className = className;
        return pixel;
        }

    function createBoardLines(pixelBoardLength) {
        for (let n = 0; n < pixelBoardLength; n += 1) {
            if (pixelBoardLength >= 0 && pixelBoardLength <= 50) {
                let pixel = createBoardPixel("pixel");
                lines.appendChild(pixel);
            } else {
                alert ("Board inválido");
                break;
            }
        }
    }

    // function repeatLines(pixelBoardLength)  {
    //     for (let i = 0; i < pixelBoardLength; i += 1) {
    //         createBoardLines([i]);
    //     }
    // }
}
   


