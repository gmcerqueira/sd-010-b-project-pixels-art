//Perdi muito tempo no requisito 4 e só percebi o detalhe que estava errando com a ajuda do meu colega Vinicius Bodra
//link do PR Dele:  https://github.com/tryber/sd-010-b-project-pixels-art/pull/5/commits/5eb6bbf67744ff12a3a7df3d97f563789c25ae9a

let getTable=document.getElementById('pixel-board')
let n=5

for(let indexLine=0;indexLine<n;indexLine+=1){
    let line= document.createElement('tr')
    for(let indexColumn=0;indexColumn<n;indexColumn+=1){
        let column=document.createElement('td')
        column.className='pixel'
        line.appendChild(column)
        getTable.appendChild(line)
    }
}
//requisito 6
//esse requisito eu aprendi a fazer com meu colega Alexandre Damasceno
//link do PR: https://github.com/tryber/sd-010-b-project-pixels-art/pull/111/commits/fcaeee4424653d9d14e8074b7e12ec6e3e33b866
window.onload=function(){
    
    let allPixels=document.querySelectorAll('.pixel')
    let changeClassFirstLi = document.getElementById("color-palette").firstElementChild.className = "color selected";
    function paintBlack(){
        for(let index=0;index<allPixels.length;index+=1){
            allPixels[index].addEventListener('click',function(){
                if(allPixels[index].style.backgroundColor!='black'){
                    allPixels[index].style.backgroundColor='black'
                }
            })
        }
    }
     paintBlack()
}

//requisito 7
let squares= document.getElementById('color-palette')

for(let indice=0;indice<squares.length;indice+=1){
    squares[indice].addEventListener('click',removeClass)
}
function removeClass(){
    squares[0].classList.remove("selected")
    squares[1].classList.remove("selected")
    squares[2].classList.remove("selected")
    squares[3].classList.remove("selected")
    squares[indice].classList.add('selected')
}

