 //const pixelLenght = 5;
 //const pixelHeight = 5;
//OLD IDEAD GOT COMMENTED FOR POSSIBLE LATER REUSE
 //function createBox() {
//for (let iLenght; iLenght < pixelLenght; iLenght += 1) {
//  let box = document.createElement("div");
//  box.className = "pixel";
//  box.appendChild();
//}
//}

const boxes = 5;
const row = 5;

function creatBox(boxes) {
  let body = document.body;
  for (let i = 0; i < boxes; i += 1) {
    let creation = document.createElement("div")
    creation.className = 'pixel';
    body.appendChild(creation);
  }
}

creatBox(boxes);