window.onload = function() {
    selectColor("paleta1");
    updateSelectedColor();
}

const pixelBoard = document.getElementById("pixel-board");
const paleta1 = document.getElementById("paleta1");
const paleta2 = document.getElementById("paleta2");
const paleta3 = document.getElementById("paleta3");
const paleta4 = document.getElementById("paleta4");
const selected = document.getElementsByClassName("selected");
const pixels = document.getElementsByClassName("pixel");

let lado = 5;
let numeroPixels = lado * lado;
let selectedColor = 0;

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

for (let index = 0; index < pixels.length; index++) {
    pixels[index].id = (index + 1);
}

pixelBoard.addEventListener("click", function(event) {
    pixel = event.target.id;
    changeColor(pixel - 1);
})

paleta1.addEventListener("click", function() {
    selectColor("paleta1");
    updateSelectedColor()
})

paleta2.addEventListener("click", function() {
    selectColor("paleta2");
    updateSelectedColor()
})

paleta3.addEventListener("click", function() {
    selectColor("paleta3");
    updateSelectedColor()
})

paleta4.addEventListener("click", function() {
    selectColor("paleta4");
    updateSelectedColor()
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

function updateSelectedColor() {
    selectedColor = window.getComputedStyle(selected[0]).getPropertyValue("background-color");
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

function changeColor(pixel) {
    pixels[pixel].style.backgroundColor = selectedColor;
}