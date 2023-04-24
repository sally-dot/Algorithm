const input = require("fs").readFileSync("/dev/stdin").toString().split((/,| |\n/));
const [A, B, C] = input.map(Number);
console.log(A+B+C);