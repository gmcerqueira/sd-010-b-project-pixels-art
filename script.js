const getFirstColor = document.querySelector('#firstColor');
const getSecondColor = document.querySelector('#secondColor');
const getThirdColor = document.querySelector('#thirdColor');
const getFourthColor = document.querySelector('#fourthColor');
const getFifthColor = document.querySelector('#fifthColor');
const firstColor = window.getComputedStyle(getFirstColor).backgroundColor;
const secondColor = window.getComputedStyle(getSecondColor).backgroundColor;
const thirdColor = window.getComputedStyle(getThirdColor).backgroundColor;
const fourthColor = window.getComputedStyle(getFourthColor).backgroundColor;
const fifthColor = window.getComputedStyle(getFifthColor).backgroundColor;
const pixelList = document.querySelectorAll('.pixel');
//
window.onload = function () {
  getFirstColor.className = 'selected';
};
let colorChange = firstColor;
getFirstColor.addEventListener('click', function () {
  colorChange = firstColor;
});
getSecondColor.addEventListener('click', function () {
  colorChange = secondColor;
});
getThirdColor.addEventListener('click', function () {
  colorChange = thirdColor;
});
getFourthColor.addEventListener('click', function () {
  colorChange = fourthColor;
});
getFifthColor.addEventListener('click', function () {
  colorChange = fifthColor;
});
pixelList.forEach(function (pixel) {
  pixel.addEventListener('click', function (element) {
    element.target.style.backgroundColor = colorChange;
  })
});
