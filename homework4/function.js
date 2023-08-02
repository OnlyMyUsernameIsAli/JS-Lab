// sum of multiples
let input1 = Number(prompt("enter num1 :"));
let input2 = Number(prompt("enter num1 :"));
SumOfMultiples(input1, input2);
function SumOfMultiples(input1, input2) {
    let multiple = 0;
    for (let i = 1; (i * input1) < input2; i++) {
        multiple = input1 * i;
    }
    console.log(multiple);
}