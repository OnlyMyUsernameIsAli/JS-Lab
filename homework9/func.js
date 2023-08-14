// // dom nodes
// let colorBox = document.querySelectorAll(".container__div--color");

// // func
// function func() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let changeColor = `rgb(${red}, ${green}, ${blue})`;
//     this.style.backgroundColor = changeColor;
// }

// //events
// for (let index = 0; index < colorBox.length; index++) {
//     colorBox[index].onclick = func;
// }

function func(numbers) {
  // debugger;
  let x = "";
  let arr = [];
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== " ") {
        if (numbers[i] === "-") {
            x += numbers[i];
        }
        if (isFinite(numbers[i]) === true) {
            x += numbers[i];
        }
    }
    else {
        arr.push(+x);
        x = "";
    }
  }
  arr.push(+x);
  result = Math.max(...arr);
  result += " ";
  result += Math.min(...arr);
  console.log(result);
}
let numbers = prompt("enter num :");
func(numbers);
