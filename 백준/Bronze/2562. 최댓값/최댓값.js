const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)
const savedInput = [...input]
const max = input.sort((x,y)=>x-y);
const maxNum = max[max.length - 1]
const myIndex = savedInput.indexOf(maxNum) + 1
console.log(maxNum);
console.log(myIndex);