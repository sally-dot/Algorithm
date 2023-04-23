const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const answer = A*B;
console.log(answer);