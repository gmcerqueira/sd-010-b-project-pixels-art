let clickb = document.getElementById("color-palette");

clickb.addEventListener("click", recebeclick);

function recebeclick(eventodeorigem) {

    let botaoClicado = eventodeorigem.target;
    
for (let index = 0; index<4; index +=1) {
   if (document.getElementsByClassName("caixa")[index] = botaoClicado) {
    botaoClicado.className = "caixa color selected";
   }
else {
    botaoClicado.className = "caixa color";
}

}

console.log (botaoClicado);
console.log (document.querySelectorAll(".caixa"));
}
