function addpixel(){

    let pixelTable = document.getElementById('pixel-board');
    //caminho para criar o append child
    

    for(let l = 0; l < 5; l += 1){
        let td = document.createElement('td');
            pixelTable.appendChild(td);
        // lines tem o td e table lines tem o caminho, sendo assim
        // o caminho recebe as linhas    
        td.className = 'pixel';                        

        }    
        
}

function stepLine(){
    let pixelTable = document.getElementById('pixel-board');
    // caminho para criar o table-row

    let td = document.createElement('tr');
     pixelTable.appendChild(td);
        // lines tem o td e table lines tem o caminho, sendo assim
        // o caminho recebe as linhas   
         

}
//criando rodando os table-row com as os pixels
for(let matrix = 0; matrix < 5; matrix += 1){
    addpixel();
    stepLine();
}
window.onload = function(){
    // Botões da paleta
    let buttonBlack =document.querySelector('#preto');
    let buttonRed =document.querySelector('#vermelho');
    let buttonBlue =document.querySelector('#azul');
    let buttonGreen =document.querySelector('#verde');

    //1. Aguardar o click na paleta com o preto selecionado
    buttonBlack.addEventListener('click',blackPaint());
    buttonBlack.addEventListener('click',blackPaint);
    buttonRed.addEventListener('click',redPaint);
    buttonBlue.addEventListener('click',bluePaint);
    buttonGreen.addEventListener('click',greenPaint);
    
}

function blackPaint(){
    console.log('black');    
    let buttonBlack =document.querySelector('#preto');
    let buttonRed =document.querySelector('#vermelho');
    let buttonBlue =document.querySelector('#azul');
    let buttonGreen =document.querySelector('#verde');

    buttonBlack.classList.add = 'selected';
    buttonBlue.classList.remove = 'selected';
    buttonGreen.classList.remove = 'selected';
    buttonRed.classList.remove = 'selected';


    }
function redPaint(){
    //estou escutando
    console.log('red');

    let buttonBlack =document.querySelector('#preto');
    let buttonRed =document.querySelector('#vermelho');
    let buttonBlue =document.querySelector('#azul');
    let buttonGreen =document.querySelector('#verde');

    buttonBlack.classList.remove = 'selected';
    buttonBlue.classList.remove = 'selected';
    buttonGreen.classList.remove = 'selected';
    buttonRed.classList.add = 'selected';
    
}
function bluePaint(){
    //estou escutando
    console.log('blue');
    let buttonBlack =document.querySelector('#preto');
    let buttonRed =document.querySelector('#vermelho');
    let buttonBlue =document.querySelector('#azul');
    let buttonGreen =document.querySelector('#verde');

    buttonBlack.classList.remove = 'selected';
    buttonBlue.classList.add = 'selected';
    buttonGreen.classList.remove = 'selected';
    buttonRed.classList.remove = 'selected';
    
}
function greenPaint(){
    //estou escutando
    console.log('green');
    let buttonBlack =document.querySelector('#preto');
    let buttonRed =document.querySelector('#vermelho');
    let buttonBlue =document.querySelector('#azul');
    let buttonGreen =document.querySelector('#verde');

    buttonBlack.classList.remove = 'selected';
    buttonBlue.classList.remove = 'selected';
    buttonGreen.classList.add = 'selected';
    buttonRed.classList.remove = 'selected';
    
}




  
  