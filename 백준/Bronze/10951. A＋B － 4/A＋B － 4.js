const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const count = input.length;

for (let i=0;i<count;i++ ) {
    let [a,b] = input[i].split(' ').map(Number);
    console.log(`${a+b}`);
}