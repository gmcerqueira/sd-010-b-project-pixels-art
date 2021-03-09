function colorPixels() {

}
function criaPixels() {
  let divNova = document.createElement("div")//.id = 'divn';
  document.body.appendChild(divNova);
  divNova.className = 'divn';
}
function pegaCor() {
  // let cor = document.getElementsByClassName();
  var elem = document.getElementById("test");
  var theCSSprop = window.getComputedStyle(item, null).getPropertyValue("background-color");
  // document.getElementById("demo").innerHTML = theCSSprop;
  localStorage.setItem('cor', theCSSprop);
}
  document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', pegaCor)// => {
   
  });
// })