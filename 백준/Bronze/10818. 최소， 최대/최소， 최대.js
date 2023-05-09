const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split((/,| |\n/)).map(Number)

const newArr = arr.sort((x,y)=>x-y);
console.log(newArr[0], newArr[n-1])