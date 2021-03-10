let getSection=document.getElementById('pixel-board')
let n=5;
for(let indexLine=0;indexLine<n;indexLine+=1){
    let line=document.createElement('div')
     line.className='pixel'
     getSection.appendChild(line)
    for(let indexColumn=0;indexColumn<n;indexColumn+=1){
        let container=document.createElement('div')
        container.className='pixel' //essa div tem class pixel
        line.appendChild(container)
    }
}

