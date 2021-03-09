let paletaDeCores = document.getElementById("color-palette")
for (let i= 0; i < 4; i++) {
let criaPaleta = document.createElement("div");
criaPaleta.className= "color";
paletaDeCores.appendChild(criaPaleta);
}

let cores = document.getElementsByClassName("color");
let black = cores[0];
let red = cores[1];
let green = cores[2];
let yellow = cores [3];

black.style.background = 'black';
red.style.background = 'red';
green.style.background = 'green';
yellow.style.background = 'yellow';