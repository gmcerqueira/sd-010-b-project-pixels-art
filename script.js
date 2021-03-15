const palletes = Array.from(document.querySelectorAll('.color'));

const palleteColors = () => {
  let r = 250;
  let g = 0;
  let b = 0;
  palletes.map((pallete, index) => {
    if (!index) {
      pallete.style.backgroundColor = 'black';
    } else {
      pallete.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r += 0;
      g += 125;
      b += 35;
    }
  });
};
palleteColors();