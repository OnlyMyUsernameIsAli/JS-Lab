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


function func(numbers){
    debugger;
    let result = ""
    // for (let i = 0; i < numbers.length; i++) {
    //   for (let k = 0; k < numbers.length; k++) {
    //     if (numbers[i] > numbers[k]) {
    //       let x = numbers[i];
    //       numbers[i] = numbers[k];
    //       numbers[k] = x;
    //     }
    //   }
    // }
    // for (let i = numbers.length-1; i >= 0; i--) {
    //   if (i === numbers.length-1) {
    //     result = `${numbers[i]} `;
    //   }
    //   if (i === 0) {
    //     result += numbers[i];
    //   }
    // }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === " ") {
            numbers[i] = ",";
        }
        
    }
    result = Math.max(numbers);
    result += " ";
    result = Math.min(numbers);
    console.log(result);
  }

  let numbers = prompt("enter num :");
  func(numbers)

