let box1 = document.getElementById("color1");
let box2 = document.getElementById("color2");
let box3 = document.getElementById("color3");
let box4 = document.getElementById("color4");

box2.addEventListener("click",selectColor);
box3.addEventListener("click",selectColor);
box4.addEventListener("click",selectColor);
box5.addEventListener("click",selectColor);


function selectColor(event){
    let elementSelecionado = document.querySelector('.selected');
    elementSelecionado.classList.remove('selected');
    event.target.classList.add('selected');
}




/* let select = document.querySelectorAll(".color");
for (let index = 0; index < select.length; index +=1){
    select.addEventListener("click",selectColor); 
}


function selectColor(event){
    for(let index = 0; index < select.length; index += 1){
        if(select[index].className() === "color selected"){
            let elementSelecionado = document.querySelector('.selected'); 
            elementSelecionado.classList.remove('selected');
            event.target.classList.add('selected');
        }
}
} 

 */