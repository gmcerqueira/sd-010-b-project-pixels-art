window.onload = function () {
    let cor = 0;
    let corRGB = document.querySelectorAll('.color');
    let RGB = '';

    for (let j = 0; j < corRGB.length; j += 1) {       
        for (let i = 0; i < 3; i += 1){
            cor = Math.floor(Math.random() * 255); 
            if (i === 2){
                RGB += cor;
            } else {
                RGB += cor + ', ';
            }                    
        }
        corRGB[j].style.background = 'rgb(' + RGB + ')';
        RGB = '';
    }    
}