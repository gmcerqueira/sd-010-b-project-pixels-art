

// function setBackgroundColor(color) {
//   let content = document.querySelector(".content")
//   content.style.backgroundColor = color
//   localStorage.setItem("backgroundColor", color)
// }

// function setBoxColor(color) {
//   let content = document.querySelector(".selected")
//   content.style.backgroundColor = color
//   localStorage.setItem("backgroundColor", color)
// }

// let backgroundColorSetBox = document.querySelectorAll("#color-palette>div")
//       for (let i = 0; i < backgroundColorSetBox.length; i += 1) {
//         backgroundColorSetBox[i].addEventListener("click", function(event) {
//           setBackgroundColor(event.target.innerHTML)
//         })
//       }

//       let backgroundColor = localStorage.getItem("backgroundColor")
//         if (backgroundColor) setBackgroundColor(backgroundColor)

// let blackBox = document.getElementById('blackBox');
// let blueBox = document.getElementById('blueBox');
// let redBox = document.getElementById('redBox');
// let greenBox = document.getElementById('greenBox');

// function selectedBlackBox() {
//   blackBox.className = 'color selected';
//   blueBox.className = 'color';
//   redBox.className = 'color';
//   greenBox.className = 'color';
// }

// function selectedBlueBox() {
//   blackBox.className = 'color';
//   blueBox.className = 'color selected';
//   redBox.className = 'color';
//   greenBox.className = 'color';
// }
// function selectedRedBox() {
//   blackBox.className = 'color';
//   blueBox.className = 'color';
//   redBox.className = 'color selected';
//   greenBox.className = 'color';
// }
// function selectedGreenBox() {
//   blackBox.className = 'color';
//   blueBox.className = 'color';
//   redBox.className = 'color';
//   greenBox.className = 'color selected';
// }

// blackBox.addEventListener('click', selectedBlackBox);
// blueBox.addEventListener('click', selectedBlueBox);
// redBox.addEventListener('click', selectedRedBox);
// greenBox.addEventListener('click', selectedGreenBox);


  // let selected = document.querySelector('.color');
  // for (i=0; i < selected.length; i +=1) {
  //   blackBox.addEventListener('click', selectedBox)
  // }

  // function selectedBox(event) {
  //   let boxSeleted = document.querySelector('.color');
  //   boxSeleted.classList.remove(' selected');
  //   event.target.classList.add(' selected');
  // }

let classSelected = document.querySelectorAll(".color");

for (i = 0; i < classSelected.length; i+=1) {
  classSelected[i].addEventListener("click", changeSelected)
} 

function changeSelected(event) {
  let selectBox = document.querySelector(".selected")
  selectBox.classList.remove("selected")
  event.target.classList.add("selected")
}

let pixelBox = document.querySelectorAll(".pixel");
for (i = 0; i < pixelBox.length; i += 1) {
  pixelBox[i].addEventListener("click", changeColor);
}


function changeColor(event) {
  let selectPixel = document.querySelector(".selected")
  let color = window.getComputedStyle(selectPixel).backgroundColor
  event.target.style.backgroundColor = color    
}