function createEl(tagName){
  let element = document.createElement(tagName)
  return element
}

window.onload = () => {
  
  setPaletteColor()
  setPixelBoard()
  
  // ---------------------------------------------------------------
  function setPaletteColor() {
    for(let index = 0; index < 4; index += 1){
      let el = createEl('span')
      el.classList.add('color')
      document.getElementById('color-palette').appendChild(el)
    }
    let cores = ['black', 'pink', 'green', 'lightblue']
    let arr = document.getElementById('color-palette').childNodes
    arr.forEach( (element, index) => element.style.backgroundColor = cores[index])
  }

  function setPixelBoard() {
    for (let index = 0; index < 5; index += 1){
      for (let index = 0; index < 5; index += 1){
        let el = createEl('span')
        el.classList.add('pixel')
        document.getElementById('pixel-board').appendChild(el)
      }
    }
  }
  

}


