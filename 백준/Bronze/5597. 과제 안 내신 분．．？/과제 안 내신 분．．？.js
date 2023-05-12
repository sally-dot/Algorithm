const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)
const arr = input.sort((x,y)=>x-y);

const newArr = [];
for (let i=1; i<=30; i++) {
    if (!arr.includes(i)) {
        newArr.push(i)
    }
}

console.log(newArr[0])
console.log(newArr[1])