
let select = document.querySelectorAll(".color");
for (let index = 0; index < select.length; index +=1){
    select.addEventListener("click",selectColor); 
}


function selectColor(event){
    let elementSelecionado = document.querySelector('.selected'); 
    elementSelecionado.classList.remove('selected');
    event.target.classList.add('selected');
}

