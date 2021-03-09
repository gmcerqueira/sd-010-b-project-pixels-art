let lado = 5;
let numeroPixels = lado * lado;

const pixelBoard = document.getElementById("pixel-board");

for (let index = 1; index <= lado; index++) {
    createLines("linha" + index);
}

for (let index = 1; index <= lado; index++) {
    let pai = "linha" + index;
    pai = document.getElementById(pai);
    for (let index = 1; index <= lado; index++) {
        createPixel(pai); 
    }
}




function createLines(id) {
    let line = document.createElement("div");
    line.className = "tr";
    line.id = id;
    pixelBoard.appendChild(line);
}

function createPixel(pai) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pai.appendChild(pixel);
}