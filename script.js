window.onload = function trocaCor() {
    
    preto.classList.add("selected")
  }

  let preto = document.getElementById("preto");
  
  let paleta = document.querySelectorAll(".color")

  paleta.addEventListener("click",clicado)

function clicado(remover){
  

   
for(let i in remover ){


  remover[i].classList.remove("selected")
}
};



