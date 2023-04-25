const input = require('fs').readFileSync("/dev/stdin").toString().split((/,| |\n/));
const [A, B] = input.map(Number);

if (A<B) {
    console.log("<");
} if (A>B) {
    console.log(">");
} if (A==B) {
    console.log("==")
}
