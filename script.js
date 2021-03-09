let selected = document.querySelectorAll(".color");

for (let index = 0; index < selected.length; index+=1) {
  selected[index].addEventListener("click", changeSelected)
} 

function changeSelected(event) {
  let selectElement = document.querySelector(".selected")
  selectElement.classList.remove("selected")
  event.target.classList.add("selected")
}
