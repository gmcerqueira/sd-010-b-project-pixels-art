window.onload = function () {



  const tabela = document.querySelector("#pixel-board")//chama tabela
  let tamanho = 5

  // linha.appendChild(pixel);
  //   tabela.appendChild(linha)
  for (let index = 0; index < tamanho; index += 1) {
    let linha = document.createElement('tr');//da linha
    for (let index2 = 0; index2 < tamanho; index2 += 1) {
      let pixel = document.createElement('td');// da celula
      pixel.className = 'pixel';
      linha.appendChild(pixel)// cria a celula
    }
    linha.className = 'line';
    tabela.appendChild(linha)// era pra criar as linhas
  }

}
document.prepend