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
} 