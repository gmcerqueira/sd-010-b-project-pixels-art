function colorPixels() {

}
function criaPixels() {
  let secao = document.querySelector('#secao');
  let quadro =document.createElement('div');
  quadro.className = 'pixel-border' ;
  for (let j = 0; j < 5; j++) {
    let novaLinha = document.createElement('div');
    for (let i = 0; i < 5; i++) {
      let divNova = document.createElement("div");
      divNova.className = 'pixel';
      novaLinha.appendChild(divNova);
    }
    document.body.appendChild(novaLinha);
  }
  document.body.appendChild(quadro);
}
// function pegaCor() {
//   let cor = document.getElementsByClassName('color');  
//   var theCSSprop = document.getComputedStyle(item, null).getPropertyValue("background-color");
//   // document.getElementById("demo").innerHTML = theCSSprop;
//   localStorage.setItem('cor', theCSSprop);
// }
//   document.querySelectorAll('.color').forEach(item => {
//   item.addEventListener('click', pegaCor)// => {

//   });
// })