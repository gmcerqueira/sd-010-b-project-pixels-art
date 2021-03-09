function titleContent() { 
  let getBody = document.querySelector('body')
  let title = document.createElement('h1')
  title.id = 'title'
  title.innerHTML = 'Paleta de Cores'
  getBody.appendChild(title)
}
titleContent()

function colorPalette() {
  let getBody = document.querySelector('body');
  let session = document.createElement('section');
  session.id = 'color-palette'
  getBody.appendChild(session)
  for (let index = 0; index < 4; index += 1){
    let square = document.createElement('div')
    let sess = document.querySelector('#color-palette')
    square.className = "color"
    sess.appendChild(square)
  }
}
colorPalette()

function applyColor() {
  let getSession = document.querySelectorAll('#color-palette>div');
  let backgroundColor = ['black', 'red', 'blue','pink'];
  getSession[0].style.backgroundColor='black'
  for(let index = 0; index < getSession.length; index +=1 ){
    for(let j = 0; j < backgroundColor.length; j +=1){
      if(index == j){
        getSession[index].style.backgroundColor = backgroundColor[j]
      }
    }
  }
}
applyColor()