function criarDivs() {
  // chama minha div htm id pixel-bord
  let pixel = document.getElementById('pixel-board');
  //criação das novas divs no for
  for (index = 0; index < 25; index += 1) {
    let cd = document.createElement('div'); //variavel cd recebe as novas divs criadas
    cd.className = 'pixel'; // cd.className recebe a class pixel
    pixel.appendChild(cd); //pixel é adicionado na variavel cd
  }
}
   
     

 window.onload = criarDivs();
