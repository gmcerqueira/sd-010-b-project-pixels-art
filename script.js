let table = document.getElementById('pixel-board');

for (let cl = 0; cl < 6; cl += 1 ){
    let column = document.createElement('tr');
        for(let ln = 0; ln < 6; ln += 1){
           let line = document.createElement('td');
           line.setAttribute('class' , 'pixel');
           column.appendChild(line); 
        }
        table.appendChild(column);    
}
