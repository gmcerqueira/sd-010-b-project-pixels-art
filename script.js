const colorsList = ['black', 'red', 'green', 'blue'];

const palletColors = document.querySelector('#color-palette');

for (let index = 0; index < colorsList.length; index += 1) {
    const color = colorsList[index];
    const palletColorItem = document.createElement('div');
    palletColorItem.classList.add('color');
    palletColorItem.style.background = color;

    palletColors.appendChild(palletColorItem);
}
