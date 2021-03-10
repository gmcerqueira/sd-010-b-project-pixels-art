  criaPixelBoard();

  function criaPixelBoard() {
    let pixelBoard = document.getElementById("pixel-board");

    for (let linha = 0; linha < 5; linha++) {

      let criaLinha = document.createElement("div")
      criaLinha.className = "pixel";
      pixelBoard.appendChild(criaLinha);
            
      for (let coluna = 0; coluna < 5; coluna++) {

        let criaColuna = document.createElement("div");
        criaColuna.className = "pixel";
        pixelBoard.appendChild(criaColuna);

      }

    }
  }
