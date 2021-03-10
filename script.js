let columns = document.getElementById('pixel-board');

let tableLines = function(){
	for (let index = 0; index < 5; index +=1) {
		line = document.createElement ('div')
		line.className = 'pixel';
		columns.appendChild(line);
		for (let index = 0; index < 5; index +=1 ){
			container = document.createElement('div')
			container.classList.add ('pixel');
			line.appendChild(container);
		}
	}
}

tableLines();