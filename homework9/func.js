// dom nodes
let colorBox = document.querySelectorAll(".container__div--color")

// func
function func() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let changeColor = `rgb(${red}, ${green}, ${blue})`
    this.style.backgroundColor = changeColor;
}

//events
for (let index = 0; index < colorBox.length; index++) {
    colorBox[index].onclick = func;
}
