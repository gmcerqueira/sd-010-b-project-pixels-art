window.onload = function() {
    let pixelPalette = 4;
    // let pixelBoardLength = window.prompt("Enter the number of elements you want for the Pixel-board");
    let pixelBoardLength = 5;
    let pixelBoardBase = 5;    
    let paletteColor = document.querySelectorAll(".color")
    let firstPaletteColor = document.querySelector(".color");
        firstPaletteColor.style.backgroundColor = "black";

    randomColors();    
    function randomColors() {
        for (let index = 1; index < paletteColor.length; index += 1) {
            paletteColor[index].style.backgroundColor = getRandomColor()
        }
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
        // let secondPaletteColor = document.querySelectorAll(".color")[1];
        //     secondPaletteColor.style.backgroundColor = "red";
        // let thirdPaletteColor = document.querySelectorAll(".color")[2];
        //     thirdPaletteColor.style.backgroundColor = "green"; 
        // let fourthPaletteColor = document.querySelectorAll(".color")[3];
        //     fourthPaletteColor.style.backgroundColor = "yellow"; 

    let boarFathers = document.querySelector("#pixel-board")
    let lines = document.querySelectorAll(".lines");
    fillBoard(lines);    

    function fillBoard(lines)  {
        for (let i = 0; i < pixelBoardLength; i += 1) {
            createBoardLines(lines[i]);            
        }
    }

    function createBoardFathers(className){
        let lines = createElement("div");
        lines.className = className;
        return lines
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
   


