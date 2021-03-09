function createTable () {
  let table = document.getElementById('pixels-board');
  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    let tableLine = document.createElement('tr');
    table.appendChild(tableLine);
        for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
            let tableColumns = document.createElement('td');
            tableColumns.className = 'pixel';
            tableColumns.style.backgroundColor = 'white';
            tableLine.appendChild(tableColumns);
        }
  }
}

createTable();

function selectColor () {
    let pallet = document.getElementsByClassName('color');
    for (let indexPallet = 0; indexPallet < pallet.length; indexPallet += 1) {
        pallet[indexPallet].addEventListener('click',function() {
            if (pallet[indexPallet].className === 'color') {
                pallet[indexPallet].className = 'color selected';
                for (let index = 0; index < pallet.length; index += 1) {
                    if (pallet[index] !== pallet[indexPallet]) {
                        pallet[index].className = 'color';
                    }
                }
            } else { 
                pallet[indexPallet].className = 'color';
            }
        })     
    }
}

selectColor();

// function selectColor (){
//     let pallet = document.getElementById('color-palette');
//     pallet.addEventListener('click',function(event) {
//         let eventTargetClass = event.target.className
//         if (eventTargetClass === 'color selected'){
//             eventTargetClass = 'color'
//         } eventTargetClass = 'color selected'
//     })
// }

