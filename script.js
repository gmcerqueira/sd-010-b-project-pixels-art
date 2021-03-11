

const pixelBoard = document.getElementById("pixel-board");
const paleta1 = document.getElementById("paleta1");
const paleta2 = document.getElementById("paleta2");
const paleta3 = document.getElementById("paleta3");
const paleta4 = document.getElementById("paleta4");
const selected = document.getElementsByClassName("selected");
const pixels = document.getElementsByClassName("pixel");
const botaoLimpa = document.getElementById("clear-board");
const botaoCriar = document.getElementById("generate-board");
const userValue = document.getElementById("board-size");


//let lado;
//let numeroPixels = lado * lado;
let selectedColor = 0;

criarQuadro(5);
paleta1.classList.add("selected");
//selectColor("paleta1");
updateSelectedColor();



botaoCriar.addEventListener("click", function() {
    criarQuadro(userValue.value);
});

botaoLimpa.addEventListener("click", clear);

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

function criarQuadro(lado) {
    pixelBoard.innerHTML = "";
    
    if (lado == "") {
         alert("Board inválido!")
    } else if (lado < 5) {
        lado = 5;
    } else if (lado > 50) {
        lado = 50;
    }
    
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
}

function selectColor(corPaleta) {
    if (corPaleta == "paleta1") {
        paleta1.classList.add("selected");
        paleta2.classList.remove("selected");
        paleta3.classList.remove("selected");
        paleta4.classList.remove("selected");
    } else if (corPaleta == "paleta2") {
        paleta1.classList.remove("selected");
        paleta2.classList.add("selected");
        paleta3.classList.remove("selected");
        paleta4.classList.remove("selected");
    } else if (corPaleta == "paleta3") {
        paleta1.classList.remove("selected");
        paleta2.classList.remove("selected");
        paleta3.classList.add("selected");
        paleta4.classList.remove("selected");
    } else if (corPaleta == "paleta4") {
        paleta1.classList.remove("selected");
        paleta2.classList.remove("selected");
        paleta3.classList.remove("selected");
        paleta4.classList.add("selected");
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

function clear() {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = "white";
    }
}