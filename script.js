// Tabela 1
let paleta = document.createElement("table");
paleta.id = "color-palette";
document.body.appendChild(paleta);

for(index = 0; index < 4; index += 1){
    let criaColuna = document.createElement("td");
    criaColuna.className = "color";
    paleta.appendChild(criaColuna);

}
// Edita tabela 1
// criaColuna.style.backgroundColor = "black";
let colunaPaleta = document.getElementsByClassName("color");
// letcolunaPaleta = document.getElementsByClassName("color");
colunaPaleta[0].style.backgroundColor = "black";
colunaPaleta[0].className = "selected color";
colunaPaleta[1].style.backgroundColor = "green";
colunaPaleta[2].style.backgroundColor = "blue";
colunaPaleta[3].style.backgroundColor = "yellow";

// if (colunaPaleta[0].style.backgroundColor == "black"){
//     colunaPaleta.className = "selected color";
// }

/////////////////////////////////////////////////////////////////////////////////////////

// colunaPaleta2 = document.getElementsByClassName("pixel");
// colunaPaleta2[0].style.backgroundColor = "white";
// colunaPaleta2[1].style.backgroundColor = "white";
// colunaPaleta2[2].style.backgroundColor = "white";
// colunaPaleta2[3].style.backgroundColor = "white";

// Tabela 2
let quadrado = document.createElement("table");
quadrado.id = "pixel-board";
document.body.appendChild(quadrado);

for(i = 0;i < 5;i += 1){
    let linhaTabela = document.createElement("tr");
    linhaTabela.className = "linha descendo";

for(j = 0;j < 5;j += 1){
    let criaColuna2 = document.createElement("td");
    criaColuna2.className = "pixel";
    linhaTabela.appendChild(criaColuna2);
    quadrado.appendChild(linhaTabela);
 }
}
//////////////////////////////////////////////////////////////////////////
// for (let index = 0; index < colunaPaleta.length; index += 1){
//     colunaPaleta[index].addEventListener("click", function (){
//         colunaPaleta[index].style.backgroundColor = "blue";
//     });
// }


// function addClassToPaletteBox() {
//     let pegaPaleta = document.getElementsByClassName("color"); 
//     for (let index = 0; index < pegaPaleta.length; index += 1){
//         // pegaPaleta[index].classList.add(`color${index + 1}`);

//         if (getComputedStyle(pegaPaleta[index]).backgroundColor === 'rgb(0, 0, 0)') {
//             pegaPaleta[index].classList.add('selected');
//           }
//     }
// }

// adiciona e remove classe
function clickPaletteBox(event) {
    const pegaSelected = document.querySelector('.selected');
    pegaSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

function addBoxClickEvent() {
    const paleta = document.getElementsByClassName('color');
    for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', clickPaletteBox);
  }
}

// const colorPalette = 'color-palette';

window.onload = 
    // addClassToPaletteBox();
    addBoxClickEvent();
    
    // let selectedColor = document.querySelector('.selected').style.backgroundColor;
  
/////////////////////////////////////////////////////////////////////////////////////////////
//pinta pixel
  function pinta() {
    const cor = document.querySelectorAll('.pixel');
    for (let index = 0; index < cor.length; index += 1) {
        cor[index].addEventListener('click', function (event)  {
        // const element = event;
        const corSelecionada = document.querySelector('.selected').style.backgroundColor;
        event.target.style.backgroundColor = corSelecionada;
      }) 
    }
  }
  
  pinta();

// document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
// document.getElementsByClassName('color')[0].className += ' selected';
// document.getElementsByClassName('color')[1].style.backgroundColor = 'red';


let botaoLimpa = document.createElement("button");
botaoLimpa.innerText = "Clique para Limpar";
document.body.appendChild(botaoLimpa);


botaoLimpa.addEventListener("click", function () {
  let pegaQuadro = document.querySelectorAll(".pixel");
  for  (let index = 0; index < pegaQuadro.length; index += 1){ 
    pegaQuadro[index].style.backgroundColor = "white";
  }
});