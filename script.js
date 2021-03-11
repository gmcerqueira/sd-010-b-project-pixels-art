function recuperaN() {
  const n = Number(sessionStorage.getItem('n'));
  if (n < 5) {
    sessionStorage.setItem('n', '5');
  }
  if (n > 50) {
    sessionStorage.setItem('n', '50');
  }
  return Number(sessionStorage.getItem('n'));
}