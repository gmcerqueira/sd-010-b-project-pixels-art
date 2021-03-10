const cor = document.querySelectorAll('.color');
cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'purple';
cor[2].style.backgroundColor = 'orange';
cor[3].style.backgroundColor = 'green';

function createDivpixel(){
  let quant = 25
  let divContainer = document.querySelector('#pixel-board');

  for (let i = 0; i < quant; i += 1){
    let divs = document.createElement('div');
    divs.className = 'pixel'
    divContainer.appendChild(divs);

  }
}
createDivpixel()

function selectedPaletaCores(){
  let colorSelection = document.querySelector('#color-palette ');
  cor[0].style.backgroundColor = 'black';
  cor[1].style.backgroundColor = 'purple';
  cor[2].style.backgroundColor = 'orange';
  cor[3].style.backgroundColor = 'green';

  colorSelection.addEventListener('click', function(event){
  let collorSelected =document.querySelector('.selected');
    if(collorSelected){
      collorSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  })
}
selectedPaletaCores();







// function rgb(){
//   const r = Math.ceil(Math.random() * 255);
//   const g = Math.ceil(Math.random() * 255);
//   const b = Math.ceil(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`;
// }



