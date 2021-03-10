// Cria os Pixels que vão ser coloridos 
function criaPixels() {
    let quadro = document.getElementById('pixel-board');
  for (let j = 0; j < 5; j++) {
    let novaLinha =document.createElement('div');    
    for (let i = 0; i < 5; i++) {
      let divNova = document.createElement("div");
      divNova.className = 'pixel';
      novaLinha.appendChild(divNova);
    }
    quadro.appendChild(novaLinha);
  }
}
// Pega a cor selecionada para preencher o pixel
function pegaCor() {
  let cores = document.querySelector('.selected');
  cores.classList.remove('selected');
  var divs = document.getElementsByClassName('color');	
	for(var i=0; i<divs.length; i++) {
		divs[i].addEventListener("click", function() {
			this.classList.add("selected");
    });
	}
}
// Inicia com a cor preta para preenchimento dos pixels
function corInicial() {
  let corPreta = document.querySelector('.c1');
  corPreta.className = corPreta.className + ' selected';
}
function pintarPixel() {
  let pintar = document.getElementsByClassName('pixel');
  for(var i=0; i<pintar.length; i++) {
		pintar[i].addEventListener("click", function() {
			// this.style.backgroundcolor = '';
  });
}
}

// Inicialização do site 
corInicial();
criaPixels();