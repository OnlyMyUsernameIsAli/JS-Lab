// function CenterNum(num1, num2, num3) {
//     if (num1 > num3) {
//         let x = num3
//         num3 = num1
//         num1 = x
//     }
//     if (num1 > num2) {
//         let x = num2
//         num2 = num1
//         num1 = x
//     }
//     if (num2 > num3) {
//         let x = num2
//         num2 = num3
//         num3 = x
//     }
//     document.write("The Middle number : ", num2)
//     console.log(num1, num2, num3)
// }

// let OutNum = 0
// function Collector(InNum) {
//     if (InNum !== 0) {
//         OutNum += InNum;
//         functionCaller(InNum);
//     }
//     if(InNum === 0){
//         document.write("Total numbers : ", OutNum)
//     }
// }
// function functionCaller(InNum) {
//     InNum = Number(prompt("enter number :"))
//     Collector(InNum)
// }