window.onload = function trocaCor() {
    
    box1.classList.add("selected")
  }

let box1 = document.querySelector(".preto");
let box2 = document.querySelector(".vermelho");
let box3 = document.querySelector(".azul");
let box4 = document.querySelector(".lilas");

  box1.addEventListener("clicar", remove)
  box2.addEventListener("clicar", remove)
  box3.addEventListener("clicar", remove)
  box4.addEventListener("clicar", remove)
  
function remove(even){

  let selectebox = document.querySelector(".selected")
  selectebox.classList.remove("selected")
    even.target.classList.add("selected")

}



//chaaama

