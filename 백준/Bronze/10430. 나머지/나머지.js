const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0])
const B = parseInt(input[1])
const C = parseInt(input[2])

const num1 = (A+B)%C;
const num2 = ((A%C) + (B%C))%C;
const num3 = ((A*B)%C);
const num4 = ((A%C)*(B%C))%C;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
