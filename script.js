window.onload = document.getElementById("paleta1").className = "color selected";

const pixelBoard = document.getElementById("pixel-board");
const paleta1 = document.getElementById("paleta1");
const paleta2 = document.getElementById("paleta2");
const paleta3 = document.getElementById("paleta3");
const paleta4 = document.getElementById("paleta4");
const selected = document.getElementsByClassName("selected");

let lado = 5;
let numeroPixels = lado * lado;
let selectedColor = window.getComputedStyle(selected[0]).getPropertyValue("background-color");
console.log(selectedColor);

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

paleta1.addEventListener("click", function() {
    selectColor("paleta1");
})

paleta2.addEventListener("click", function() {
    selectColor("paleta2");
})

paleta3.addEventListener("click", function() {
    selectColor("paleta3");
})

paleta4.addEventListener("click", function() {
    selectColor("paleta4");
})

function selectColor(corPaleta) {
    if (corPaleta == "paleta1") {
        paleta1.className = "color selected";
        paleta2.className = "color";
        paleta3.className = "color";
        paleta4.className = "color";
    } else if (corPaleta == "paleta2") {
        paleta1.className = "color";
        paleta2.className = "color selected";
        paleta3.className = "color";
        paleta4.className = "color";
    } else if (corPaleta == "paleta3") {
        paleta1.className = "color";
        paleta2.className = "color";
        paleta3.className = "color selected";
        paleta4.className = "color";
    } else if (corPaleta == "paleta4") {
        paleta1.className = "color";
        paleta2.className = "color";
        paleta3.className = "color";
        paleta4.className = "color selected";
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