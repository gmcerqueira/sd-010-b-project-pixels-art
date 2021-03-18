// const colors = document.getElementsByClassName('color');
// function myfunction(event) {
//   let selected = document.getElementsByClassName('selected');
//   event.target.classList.remove('color');
//   event.target.classList.add('selected');

// let selected = document.getElementsByClassName('selected');

// for (let index = 0; index < colors.length; index = +1) {
//   if (colors[index] === selectedColor) {
//     alert('ping');
// surprise for next time

// document.querySelector('#color-palette').addEventListener('click', myfunction);
document.getElementsByClassName('color')[0].className = 'color selected';
