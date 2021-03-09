function inicializeColor() {
  let colorsPalet = document.querySelectorAll(".color");
  for (let color = 0; color < colorsPalet.length; color++) {
    if(color == 0){
      colorsPalet[color].style.backgroundColor = "black";
    }else if (color == 1) {
      colorsPalet[color].style.backgroundColor = "green";
    }else if(color == 2){
      colorsPalet[color].style.backgroundColor = "red";
    }else if(color == 3){
      colorsPalet[color].style.backgroundColor = "blue";
    }
  }
}

inicializeColor();