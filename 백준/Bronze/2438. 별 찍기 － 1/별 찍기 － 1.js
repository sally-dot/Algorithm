const input = require("fs").readFileSync("/dev/stdin").toString();
const num = Number(input);

let answer='';
for(let i=1; i<=num; i++) {
    answer += console.log("*".repeat(i))
}