let clickb = document.getElementById("color-palette");
clickb.addEventListener("click", recebeclick);
function recebeclick(eventodeorigem) {

    let botaoClicado = eventodeorigem.target;
    let classe = document.querySelectorAll(".caixa");
for(let index = 0; index < classe.length; index +=1) {
let corClicada = classe[index];

if (corClicada != botaoClicado){
corClicada.className = "caixa color";
}

else {
    corClicada.className = "caixa color selected";
}
}
}




