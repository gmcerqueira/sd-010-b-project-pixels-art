function createPixels() {
    let board = document.querySelector(".board");
    let size = document.getElementById("board-size");
    if(size.value < 5) {
        size.value = 5;
    }else if(size.value > 50) {
        size.value = 50;
    }else if(size.value === "") {
        alert("Board inválido!");
    }
    createBoard(size.value);
}

function createBoard(number) {
    let board = document.getElementById("pixel-board");
    for(let index = 0; index < number; index += 1) {
        for(let index2 = 0; index2 < number; index2 += 1) {
            let pixels = document.createElement("div");
            pixels.className = "pixel";
            board.appendChild(pixels);
        }
    }
}

// Para realizar essas duas primeiras funções, dei uma conferida no pull request do Lucas Henrique da Silva Brito, da turma 9. Valeu, Lucas!

function randomColor() {
    let color = document.querySelectorAll(".color");
    for(let index = 0; index < color.length; index += 1) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let generatedColor = `rgb(${r}, ${g}, ${b})`;
        color[index].style.backgroundColor = generatedColor;
    }
    color[0].style.backgroundColor = "rgba(0, 0, 0, 1)";
}

// Dei uma olhada nesse site para as cores aleatórias! src: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function selectColor(selected) {
    let oldColor = document.querySelector(".selected");
    oldColor.classList.remove("selected");
    let newColor = selected.target
    newColor.classList.add("selected");
}

function clear() {
    let pixels = document.querySelectorAll(".pixel");
    if(pixels.classList.contains("painted")) {
        pixels.style.backgroundColor = "rgb(255, 255, 255)";
    }
}

function paintColors(notPainted) {
    if(notPainted.target.classList.contains("pixel")) {
        let paint = document.querySelector(".selected").style.backgroundColor;
        notPainted.target.style.backgroundColor = paint;
        notPainted.classList.add("painted");
    }
}

window.onload = randomColor;
createBoard(5);
document.getElementById("color-palette").addEventListener("click", selectColor);
document.getElementById("clear-board").addEventListener("click", clear);
document.getElementById("generate-board").addEventListener("click", createPixels);
document.querySelectorAll(".pixel").addEventListener("click", paintColors);
document.querySelector("#clear-board").addEventListener("click", clear);