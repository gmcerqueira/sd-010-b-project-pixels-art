
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
	
	let pixels = document.getElementById("pixel-board");

	for (let cont = 0; cont < 5; cont += 1) {
		let itemPixel = document.createElement('div');
		pixels.appendChild(itemPixel);

		for (let cont2 = 0; cont2 < 5; cont2 += 1){
			let itemPixel2 = document.createElement('div');
			itemPixel.appendChild(itemPixel2);
			itemPixel2.className = 'pixel';

		}

	}
}

geraPixel();

function selecionaCor() {
	const color = document.querySelector('#color-palette');
	color.addEventListener('click', (event) => {
	  const element = event;
	  document.querySelector('.selected').className = 'color';
	  element.target.className = 'color selected';
	});
  }
  selecionaCor();


  function pintar() {
	const quadrados = document.querySelector('#pixel-board');
	quadrados.addEventListener('click', (event) => {
	  const abacaxi = event;
	  const colorSelected = document.querySelector('.selected').style.backgroundColor;
	  abacaxi.target.style.backgroundColor = colorSelected;
	});
  }
  pintar();


//let botaoLimpar = document.getElementById("clear-board").addEventListener("click", clear)


