let clickb = document.getElementById("color-palette");

clickb.addEventListener("click", recebeclick);

function recebeclick(eventodeorigem) {

    let botaoClicado = eventodeorigem.target;
botaoClicado.className = "caixa color selected";
console.log (botaoClicado);


}