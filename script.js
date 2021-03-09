window.onload = function clicarCor() {
  let button = document.getElementById("black");

  button.addEventListener("click", function () {
    if (document.getElementsByClassName("color").classList.contains('cor')) {
      document.getElementsByClassName("cor").classList.add("preto");
      document.getElementsByClassName("preto").classList.remove("cor");
    } else {
        document.getElementsByClassName("preto").classList.add("cor");
        document.getElementsByClassName("cor").classList.remove("preto");
    }
  })
}