function randomColor(opacity = 1) {
    let color = document.querySelectorAll(".color");
    for(let index = 0; index < color.length; index += 1) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let generatedColor = `rgb(${r}, ${g}, ${b}, ${opacity})`;
        color[index].style.backgroundColor = generatedColor;
    }
    color[0].style.backgroundColor = "rgba(0, 0, 0, 1)";
}