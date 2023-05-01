const [N] = require("fs").readFileSync("/dev/stdin").toString().split((/,| |\n/)).map(Number);

const num = N/4;
console.log("long ".repeat(num)+"int")
