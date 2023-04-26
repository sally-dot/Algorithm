const input = require('fs').readFileSync('/dev/stdin').toString().split((/,| |\n/));
const [a, b, c] = input.map(Number);

let prize;

if (a==b && b==c) {
	prize =10000+a*1000;
} else if (a===b || b===c || a===c) {
	let sameNum;
	(a===b)?(sameNum=a):((b===c)?(sameNum=b):((a===c)?sameNum=c:null))
	prize = 1000+sameNum*100
} else {
	let smallestNum = Math.max(a,b,c);
	prize = smallestNum*100;
}

console.log(prize);