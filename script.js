
function gerar_cor() {
	let preencherCor = document.querySelectorAll(".color");

	for (let cont = 1; cont < preencherCor.length; cont += 1) {

		let r = Math.random() * 255;
		let g = Math.random() * 255;
		let b = Math.random() * 255;
		let randomColor = `rgb(${r}, ${g} , ${b})`;

		if (r === 255 && g === 255 && b === 255) {
			r = Math.random() * 255;
			g = Math.random() * 255;
			b = Math.random() * 255;
			randomColor = `rgb(${r}, ${g} , ${b})`;
		}

		preencherCor[cont].style.backgroundColor = randomColor;
		preencherCor[0].style.backgroundColor = "rgba(0,0,0)";
		preencherCor[0].className = "color selected";

	}
}
gerar_cor();

function geraPixel() {
	let numeroPixels = 25;
	let pixels = document.getElementById("pixel-board");

	for (let cont = 0; cont < numeroPixels; cont += 1) {
		let itemPixel = document.createElement('div');
		itemPixel.id = 'teste';
		itemPixel.className = 'pixel';
		pixels.appendChild(itemPixel);

	}
}

geraPixel();

function escolheCor() {
	let corDaVez = document.querySelector("#color-palette");
	color.addEventListener("click", (event) =>{
		let element = event;
		document.querySelector(".selected").className = "color";
		element.target.className = "color selected";
	})
}

escolheCor();

function clear(){
	let limpaPixel = document.querySelectorAll(".color");
	for (let cont = 0; cont < limpaPixel.length; cont += 1){
		limpaPixel[cont] = limpaPixel[cont].style.backgroundColor = "rgb(255 , 255 , 255)";
	}
	
}
let botaoLimpar = document.getElementById("clear-board").addEventListener("click", clear)


