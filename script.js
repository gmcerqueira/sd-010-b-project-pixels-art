function addpixel(){

    let quadroPixels = document.getElementById('pixel-board');
    //caminho para criar o append child
    

    for(let l = 0; l < 5; l += 1){
        let td = document.createElement('td');
        quadroPixels.appendChild(td);
        // lines tem o td e table lines tem o caminho, sendo assim
        // o caminho recebe as linhas    
        td.className = 'pixel';                        

        }    
        
}

function stepLine(){
    let quadroPixels = document.getElementById('pixel-board');
    // caminho para criar o table-row

    let td = document.createElement('tr');
        quadroPixels.appendChild(td);
        // lines tem o td e table lines tem o caminho, sendo assim
        // o caminho recebe as linhas   
         

}

for(let matrix = 0; matrix < 5; matrix += 1){
    addpixel();
    stepLine();
}

  
  