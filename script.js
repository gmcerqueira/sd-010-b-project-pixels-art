const palletes = Array.from(document.querySelectorAll('.color'));

const palleteColors = () => {
  let r = Math.ceil(Math.random() * 100);
  let g = Math.ceil(Math.random() * 30);
  let b = Math.ceil(Math.random() * 0);
  palletes.map((pallete, index) => {
    if (!index) {
      pallete.style.backgroundColor = 'black';
    } else {
      pallete.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r += 55;
      g += 75;
      b += 105;
    }
  });
};
palleteColors();