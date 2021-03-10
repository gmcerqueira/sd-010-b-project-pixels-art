const corPaleta = document.querySelectorAll('.color');
function pintaPaleta() {
  for (let index = 0; index < corPaleta.length; index += 1) {
    if (index === 0) {
      corPaleta[index].style.backgroundColor = 'black';
      corPaleta[index].className = 'color selected';
    } else if (index === 1) {
      corPaleta[index].style.backgroundColor = randomizaPaleta();
    } else if (index === 2) {
      corPaleta[index].style.backgroundColor = randomizaPaleta();
    } else if (index === 3) {
      corPaleta[index].style.backgroundColor = randomizaPaleta();
    }
  }
}
pintaPaleta();

function randomizaPaleta() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function selecionaCor() {
  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].addEventListener('click', function() {
      const lastColor = document.querySelector('.selected');
      lastColor.className = lastColor.className.replace('color selected', 'color');
      corPaleta[index].className = 'color selected';
    });
  }
}
selecionaCor();

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function(event) {
  const corSelecionada = document.querySelector('.selected');
  event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
})

const buttonClean = document.getElementById('clear-board');
buttonClean.addEventListener('click', function() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});
