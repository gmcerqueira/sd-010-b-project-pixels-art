function recuperaN() {
	const n = Number(sessionStorage.getItem('n'));
	if (n < 5) {
		sessionStorage.setItem('n', '5');
	}
	if (n > 50) {
		sessionStorage.setItem('n', '50');
	}
	return Number(sessionStorage.getItem('n'));
}

function coresAleatórias() {
  const cor = `#${((1 << 24) * Math.random() | 0).toString(16)}`; // creditos: https://stackoverflow.com/questions/1484506/random-color-generator
  return cor;
}

function criaPixels() {
	const n = recuperaN();
	const tabela = document.getElementById('pixel-board');
	for (let linha = 0; linha < n; linha += 1) {
		const criaLinha = document.createElement('tr');
		tabela.appendChild(criaLinha);
		for (let celula = 0; celula < n; celula += 1) {
			const criaCelula = document.createElement('td');
			const linhaApoio = document.getElementsByTagName('tr');
			linhaApoio[linhaApoio.length - 1].appendChild(criaCelula).className = 'pixel';
			document.getElementsByClassName('pixel');
			const apoio = document.getElementsByClassName('pixel');
			apoio[apoio.length - 1].id = `cell-${linha + 1}-${celula + 1}`;
			apoio[apoio.length - 1].style.background = '#ffffff';
		}
	}
}

criaPixels();

function esvaziaTabela() {
	const tabela = document.getElementById('pixel-board');
  while (tabela.firstChild) { // esvazia o board para criar novo, tirado do link https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  	tabela.removeChild(tabela.lastChild);
  }
}
