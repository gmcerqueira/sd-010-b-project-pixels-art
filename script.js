function addPaleta (){
    let ul = document.querySelector('#color-palette');
    let cores = ['orange', 'green', 'pink', 'purple'];
    
    for(let i = 0; i < cores.length; i++){
        let li = document.createElement('li');
        // let cor = cores[i];
        li.className = 'color';
        li.style.backgroundColor = cores[i];
        ul.appendChild(li);
    }
}

addPaleta();