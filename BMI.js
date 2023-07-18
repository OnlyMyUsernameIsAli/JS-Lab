let InBMI_Height = prompt("Ehter your height: ")
let InBMI_Weight = prompt("Ehter your Weight: ")
let reallyHeight = InBMI_Height / 100
let Result = InBMI_Weight / (reallyHeight * reallyHeight)
console.log(Result);
if (Result < 18.5) {
  console.log("Underweight!");
}
if (Result >= 18.5 && Result < 25) {
  console.log("normal!");
}
if (Result >= 25 && Result < 30) {
  console.log("Overweight!");
}
if (Result >= 30) {
  console.log("Obesity!");
}