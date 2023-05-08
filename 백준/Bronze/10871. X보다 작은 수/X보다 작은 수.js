const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [a, b] = input;
const nx = a.split(" ");
const arr = b.split(" ")

const answer = arr.filter((el) => Number(el)<Number(nx[1])).join(" ")
console.log(answer)