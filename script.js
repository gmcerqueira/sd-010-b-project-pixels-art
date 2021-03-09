//Elements

const palletes = Array.from(document.querySelectorAll('.color'));

//Setting pallete colors
const setPalleteColors = () => {
  let r = Math.ceil(Math.random() * 84);
  let g = Math.ceil(Math.random() * 84);
  let b = Math.ceil(Math.random() * 84);
  palletes.map((pallete, index) => {
    if (!index) {
      pallete.style.backgroundColor = 'black';
    } else {
      pallete.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r += 84;
      g += 84;
      b += 84;
    }
  });
};
setPalleteColors();
