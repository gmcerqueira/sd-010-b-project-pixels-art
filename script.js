//Starting

window.onload = whitePixels()
window.onload = blackColorSelected()

document.querySelectorAll(".color")[0].style.backgroundColor = "black"
document.querySelectorAll(".color")[1].style.backgroundColor = "red"
document.querySelectorAll(".color")[2].style.backgroundColor = "lightgreen"
document.querySelectorAll(".color")[3].style.backgroundColor = "blue"

function whitePixels () {
  let pixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = "white"
  }
}

function blackColorSelected () {
  let element = document.querySelectorAll(".color")[0];
  element.classList.add("selected");
  // Para essa função pesquisei no seguinte artigo da W3Schools: https://www.w3schools.com/howto/howto_js_add_class.asp
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("color") && !event.target.classList.contains("selected") ) {
    document.querySelectorAll(".selected")[0].className = "color";
    event.target.className = "color selected";
  }
  //Recebi um grande auxílio do Thiago Marchini nessa questão, ele realmente me ajudou a compreender esse código.
})