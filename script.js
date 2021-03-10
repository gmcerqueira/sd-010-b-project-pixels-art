function  criarDivs(){
    let pixel = document.getElementById("pixel-board");
    for (index = 0; index < 25; index +=1){
        let cd= document.createElement("div");
        cd.className = 'pixel';
        pixel.appendChild(cd);
    }

}
window.onload = criarDivs();



