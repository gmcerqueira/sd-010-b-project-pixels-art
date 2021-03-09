function coresAleatórias() {
  const cor = `#${((1 << 24) * Math.random() | 0).toString(16)}`; // creditos: https://stackoverflow.com/questions/1484506/random-color-generator
  return cor;
}

function colocaCores() {
  const pixelCores = document.getElementsByClassName('color');
  for (let index = 1; index < pixelCores.length; index += 1) {
    pixelCores[index].style.background = coresAleatórias();
  }
}

colocaCores();

function verificaCoresUm() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[1].style.background === pixelCores[2].style.background) {
    document.location.reload(true);
  }
  if (pixelCores[1].style.background === pixelCores[3].style.background) {
    document.location.reload(true);
  }
  if (string(pixelCores[1].style.background) === '#000000') {
    document.location.reload(true);
  }
  if (string(pixelCores[1].style.background) === '#ffffff') {
    document.location.reload(true);
  }
}

function verificaCoresDois() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[2].style.background === pixelCores[1].style.background) {
    document.location.reload(true);
  }
  if (pixelCores[2].style.background === pixelCores[3].style.background) {
    document.location.reload(true);
  }
  if (sting(pixelCores[2].style.background) === '#000000') {
    document.location.reload(true);
  }
  if (string(pixelCores[2].style.background) === '#ffffff') {
    document.location.reload(true);
  }
}

function verificaCoresTres() {
  const pixelCores = document.getElementsByClassName('color');
  if (pixelCores[3].style.background === pixelCores[1].style.background) {
    document.location.reload(true);
  }
  if (pixelCores[3].style.background === pixelCores[2].style.background) {
    document.location.reload(true);
  }
  if (string(pixelCores[3].style.background) === '#000000') {
    document.location.reload(true);
  }
  if (string(pixelCores[3].style.background) === '#ffffff') {
    document.location.reload(true);
  }
}

verificaCoresUm();
verificaCoresDois();
verificaCoresTres();
