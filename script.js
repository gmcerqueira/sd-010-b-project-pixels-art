window.onload = function () {

    let numberOfOption = 4;

    const elementHeader = document.createElement('header');
    document.body.appendChild(elementHeader);

    const elementTitulo = document.createElement('h1');
    elementTitulo.id = 'title';
    elementTitulo.innerText = 'Paleta de Cores';
    elementHeader.appendChild(elementTitulo);

    const sectionSelectColors = document.createElement('section');
    sectionSelectColors.className = 'color-select';
    sectionSelectColors.id = 'color-palette';
    document.body.appendChild(sectionSelectColors);

    for (let index = 0; index < numberOfOption; index++) {
        const colorOption = document.createElement('div');
        colorOption.className = 'color';
        colorOption.id = 'cor_'+(index+1);        
        sectionSelectColors.appendChild(colorOption);        
    }

    

};
