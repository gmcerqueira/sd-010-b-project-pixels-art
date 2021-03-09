
let select = document.querySelectorAll(".color");
for (let index = 0; index < select.length; index +=1){
    select.addEventListener("click",selectColor); 
}


function selectColor(event){
    let elementSelecionado = document.querySelector('.color .selected'); 
    elementSelecionado.classList.remove('color selected');
    event.target.classList.add('color selected');
}

