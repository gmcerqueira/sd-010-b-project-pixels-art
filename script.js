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
  for(let index = 0; index < getSession.length; index +=1 ){
    for(let j = 0; j < backgroundColor.length; j +=1){
      if(index == j){
        getSession[index].style.backgroundColor = backgroundColor[j]
      }
    }
  }
}
applyColor()

function createDivs() {
  let getBody = document.querySelector('body')
  let session = document.createElement('section')
  let sessionButton = document.createElement('button')
  session.id = "pixel-board"
  getBody.appendChild(session)
  sessionButton.id = "clear-board"
  getBody.appendChild(sessionButton)
  }
createDivs()

function createPixel() {
  let getSession = document.querySelector('#pixel-board')
  let pixelSize = 5;
  for (let index = 0; index < pixelSize * pixelSize; index += 1){
    let createDiv = document.createElement('div')
    createDiv.className = 'pixel'
    getSession.appendChild(createDiv)
  }
}
createPixel()

function allWhite() {
  let get
}

function createButton() {
let getButton = document.querySelector('#clear-board')
getButton.innerHTML = "Reset"
getButton.addEventListener('click', function(){
  let getPixel = document.querySelector('.pixel')
    getPixel.style.backgroundColor='white'
})
}
createButton()

window.onload = function () {
  let getBlack = document.getElementById('color-palette')
  let newBlack = getBlack.childNodes[0]
  newBlack.className += ' selected'
}






