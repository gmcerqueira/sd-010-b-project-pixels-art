// Função elaborada com a ajuda da colega de turma MAIARA BORSATTI.

function addBoxPixels() {
    
    let dad = document.getElementById('pixel-board');

    for (let index = 0; index < 5; index++) {

        for (let index = 0; index < 5; index++) {
            let box = document.createElement('div');
            box.className = 'pixel';
            dad.appendChild(box);
        }
        // O "for-filho" irá rodar 5 vezes, a cada rodada, irá adicionar 1 box à variável dad, após isto, a rotina irá executar o comando abaixo para criar uma linha de separação, concluindo o 1° ciclo do "for-pai", este por sua vez irá ser executado mais 4 vezes, até concluir as rotinas e saltar para o comando final que chama a função addBoxPixels e inclui o conteúdo da variável dad como filho da DIV pixel-board no HTML.

        let line = document.createElement('br');
        dad.appendChild(line);
    }
}
addBoxPixels()