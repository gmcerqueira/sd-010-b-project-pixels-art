let selected = document.querySelectorAll(".color");

for (let index = 0; index < selected.length; index+=1) {
  selected[index].addEventListener("click", changeSelected)
} 

let pixelSelected = document.querySelectorAll(".pixel");
for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener("click", changeColor);
}

function changeSelected(event) {
  let selectElement = document.querySelector(".selected")
  selectElement.classList.remove("selected")
  event.target.classList.add("selected")
}

function changeColor(event) {
  let selectElement = document.querySelector(".selected")
  let color = window.getComputedStyle(selectElement).backgroundColor
  event.target.style.backgroundColor = color    
}
