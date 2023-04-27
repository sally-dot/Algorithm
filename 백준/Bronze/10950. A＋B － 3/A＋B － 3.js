const input = require("fs").readFileSync("/dev/stdin").toString().split((/,| |\n/));
const test = input.map(Number);

for (let i=1; i<test[0]*2; i++) {
 if (i%2 === 1) {
    console.log(test[i]+test[i+1]); 
 }
}