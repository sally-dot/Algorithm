const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer="";
for (let i=1; i<=input[0] ;i++) {
    num = input[i].split(' ');
    answer += parseInt(num[0]) + parseInt(num[1]) + " "
}

let result = answer.split(" ").map(Number);
for (let i=1; i<=input[0] ; i++) {
    casenum = `Case #${i}: `+ result[i-1];
    console.log(casenum)
}
