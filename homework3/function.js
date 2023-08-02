// Reveresed String
let input = prompt("enter string :");
reverseString (input);
function reverseString(input) {
    let length = input.length;
    let reverse = "";
    for (let i = length-1; i >= 0; i--) {
        reverse += input[i];
    }
    console.log(reverse);
}