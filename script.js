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