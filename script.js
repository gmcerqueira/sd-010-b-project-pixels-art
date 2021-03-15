let colorsList = ['black', 'red', 'green', 'blue'];

let palletColors = document.querySelector("#color-palette");

for (let index = 0; index < colorsList.length; index++) {
    let color = colorsList[index];
    let palletColorItem = document.createElement('div');
    palletColorItem.classList.add("color");
    palletColorItem.style.background = color;

    palletColors.appendChild(palletColorItem);
}