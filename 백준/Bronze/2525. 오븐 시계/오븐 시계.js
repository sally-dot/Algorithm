const input = require('fs').readFileSync('/dev/stdin').toString().split((/,| |\n/));
let [A, B, C] = input.map(Number);

B += C;

if (B>=60) {
    A += Math.floor(B/60);
    B = B%60;
} if (A >= 24) {
    A = A%24
}

console.log(A,B)
