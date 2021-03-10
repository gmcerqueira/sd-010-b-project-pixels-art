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
    console.log(selectedClass);
    selectedClass.classList.add('selected');




    // console.log(elementoEvento.target);
    // console.log(elementoEvento.type);

    // let class2 = document.elementoEvento;
    // console.log(class2);
    }

}

