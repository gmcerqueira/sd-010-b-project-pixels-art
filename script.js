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