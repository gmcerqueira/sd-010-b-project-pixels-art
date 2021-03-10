window.onload = function(){
let palette = document.getElementById('color-palette');

let columns = document.getElementById('pixel-board');

let tableLines = function(){
	for (let index = 0; index < 5; index +=1) {
		line = document.createElement ('div')
		line.className = 'pixel';
		line.style.backgroundColor = 'white';
		columns.appendChild(line);
		for (let index = 0; index < 5; index +=1 ){
			container = document.createElement('div')
			container.className = 'pixel';
			container.style.backgroundColor = 'white';
			line.appendChild(container);
		}
	}
}

tableLines();

palette.firstElementChild.classList.add ('selected');

}