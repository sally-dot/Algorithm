const input = require("fs").readFileSync("/dev/stdin").toString().split((/,| |\n/))
const [num1, num2] = input.map(Number);
const math = Array.from(String(num2))

const answer3 = num1 * parseInt(math[2]);
const answer4 = num1 * parseInt(math[1]);
const answer5 = num1 * parseInt(math[0]);
const answer6 = num1 * num2
console.log(answer3);
console.log(answer4);
console.log(answer5);
console.log(answer6);