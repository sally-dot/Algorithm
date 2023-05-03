const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer='';
for (let i=1; i<=input[0]; i++) {
    num = input[i].split(' ');
    caseNum = `Case #${i}: `
    stringNum = num[0] + " + " + num[1] + " = ";
    sum = (parseInt(num[0])+parseInt(num[1]));
	answer += caseNum + stringNum + sum + "\n";
}
console.log(answer)