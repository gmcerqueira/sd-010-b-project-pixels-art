/* Pegado os inputs: */
console.log('Pegando inputs:');
let inpSecond = null;
inpSecond = document.getElementById('input-second');
console.log(inpSecond);

let inpThird = null;
inpThird = document.getElementById('input-third');
console.log(inpThird);

let inpFourth = null;
inpFourth = document.getElementById('input-fourth');
console.log(inpFourth);

/* Pegado as cores dos inputs: */
console.log('Cores dos inputs:');
let inpSecondColor = null;
inpSecondColor = document.getElementById('input-second').value;
console.log(inpSecondColor);

let inpThirdColor = null;
inpThirdColor = document.getElementById('input-third').value;
console.log(inpThirdColor);

let inpFourthColor = null;
inpFourthColor = document.getElementById('input-fourth').value;
console.log(inpFourthColor);

console.log('SPANS');
/* Pegando as SPANS COLORS: */

let spanSecondColor = null;
spanSecondColor = document.getElementById('second-color').style.backgroundColor;
spanSecondColor = '#ed4e23';
console.log(spanSecondColor);

let spanThirdColor = null;
spanThirdColor = document.getElementById('third-color').style.backgroundColor;
spanThirdColor = '#3970fe';
console.log(spanThirdColor);

let spanFouthColor = document.getElementById('fourth-color').style.backgroundColor;
spanFouthColor = '#438104';
console.log(spanFouthColor);

/* Pegando as tags SPANS */
/* Pegando as SPANS COLORS: */

let spanSecond = null;
spanSecond = document.getElementById('second-color');

let spanThird = null;
spanThird = document.getElementById('third-color');

let spanFouth = null;
spanFouth = document.getElementById('fourth-color');

function changeSecondColor(element) {
  spanSecond.style.backgroundColor = element.target.value;
}

function changeThirdColor(element) {
  spanThird.style.backgroundColor = element.target.value;
}

function changeFourthColor(element) {
  spanFouth.style.backgroundColor = element.target.value;
}

inpSecond.addEventListener('change', changeSecondColor);
inpThird.addEventListener('change', changeThirdColor);
inpFourth.addEventListener('change', changeFourthColor);
