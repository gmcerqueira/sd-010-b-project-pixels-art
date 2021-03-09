
    let encotraQuadro = document.getElementById("pixel-board");
    for(let colona = 0;colona < 5;colona++){
   for(let linha = 0;linha < 5;linha++){
    let criarDiv = document.createElement('div');
        criarDiv.classList.add("pixel");
        encotraQuadro.appendChild(criarDiv);
    }
    let criaBr = document.createElement("br");
    encotraQuadro.appendChild(criaBr);
}

