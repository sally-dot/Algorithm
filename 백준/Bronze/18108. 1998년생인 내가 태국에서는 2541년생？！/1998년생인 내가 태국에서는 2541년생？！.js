const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const x = parseInt(input);
const y = x - 544 + 1;

console.log(y)