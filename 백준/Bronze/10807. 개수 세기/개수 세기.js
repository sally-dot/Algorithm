const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, s, v] = input
const result = s.split(" ").filter((item) => item==v ).length;
console.log(result)
