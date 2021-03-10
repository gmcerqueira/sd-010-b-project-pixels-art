window.onload = function (){
   
function addPaleta (){
    let ul = document.querySelector('#color-palette');
    let cores = ['black', '#92E6A0', 'pink', 'purple'];
    
    for(let i = 0; i < cores.length; i++){
        let li = document.createElement('li');
        li.className = 'color';
        li.style.backgroundColor = cores[i];
        ul.appendChild(li);
    }
}
addPaleta();

function addGrid() {
    let table = document.querySelector('#pixel-board');
    let lado = 5;
    for(let i = 0; i < lado; i++){
        let tr = document.createElement('div');
        tr.className = 'table-row';
        table.appendChild(tr);
        for(let i2 = 0; i2 < lado; i2++){
            let px = document.createElement('div');
            px.className = 'pixel';
            px.style.backgroundColor = "white";
            tr.appendChild(px);
        }
    }
}
addGrid();

//add primeira classe 'selected'
let selectedClass = document.querySelector('.color');
selectedClass.classList.add('selected');

//add event listener para todas as classes 'color'
let select = document.getElementsByClassName('color');
for(let i = 0; i < select.length; i++){
    select[i].addEventListener("click", colorSelect, selectedClass);  
    }

function rmvClass(selectedClass){
    selectedClass.classList.remove('selected');
}


function colorSelect(elementoEvento, Class){
    rmvClass(selectedClass);
    selectedClass = elementoEvento.target;
    selectedClass.classList.add('selected');
    }


//add event listener para todos os pixels
let selectPixel = document.getElementsByClassName('pixel');
for(let i = 0; i < selectPixel.length; i++){
    selectPixel[i].addEventListener("click", pintar);  
    }

function pintar(elementoEmQuestao){
    let cor = document.querySelector('.selected').style.backgroundColor;
    elementoEmQuestao.srcElement.style.backgroundColor = cor;
    console.log(cor);
}

//add event listener LIMPAR
let limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', limparFunction);

function limparFunction(){
    let pixels = document.querySelectorAll('.pixel');
    pixelColor = 'white';
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
}











}//window.onload close

