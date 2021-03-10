window.onload = function trocaCor() {
    
    preto.classList.add("selected")
  }

  let preto = document.getElementById("preto");
  

  function add(){
    let paleta = document.querySelectorAll(".color")
    

    for (let index = 0; index < paleta.length; index++) {

     paleta[index].addEventListener("click", clicado(index));
      
    }
  }

  
function clicado(i){

  let e = document.querySelectorAll(".color")

  let ed = document.getElementsByClassName("selected")

for(let i = 0 ; i < ed.length ; i ++ ) {

  ed[i].classList.remove("selected")

}



  e[i].classList.add("selected")

};

add ()





