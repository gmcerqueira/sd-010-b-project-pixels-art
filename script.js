window.onload = function trocaCor() {
    
    preto.classList.add("selected")
  }

  let preto = document.getElementById("preto");
  

function remove(even){
  let selectebox = document.querySelector(".selected")
  selectebox.classList.remove("selected")
    even.target.classList.add("selected")

}
function add (){
  let elemento = document.querySelector(".color")
  for (let index = 0; index < elemento.length; index++) {
   elemento[index].addEventListener("click", remove(even))
  }
}



//chaaama
add ()