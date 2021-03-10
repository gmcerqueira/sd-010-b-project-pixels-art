let pixel = document.getElementById("pixel-board");


function matrix () {
for(index = 0; index < 5; index += 1) {
    let square = document.createElement("div");
    pixel.appendChild(square);
    
    for ( index2 = 0; index2 < 5; index2 += 1) {
        let variable = document.createElement("div");
        square.appendChild(variable);
        variable.className = "pixel"
        };
    };
};
matrix ()
//questão resolvida com a ajuda do colega durante grupo de estudos;
