let input1 = prompt("enter : ...");
let input2= prompt("enter : ...");
let input3 = prompt("enter : ...");
let length = input1.length;
let concat = ""
for (let i = 0; i < 3; i++) {
    if (input2.length > input1.length) {
        length = input2.length;
    }
    if (input3.length > input1.length) {
        length = input3.length;
    }
}
TripleTrouble (input1, input2, input3);
function TripleTrouble(input1, input2, input3) {
    for (let i = 0; i < length; i++) {
        concat += input1[i] + input2[i] + input3[i]
    }
    console.log(concat);
}