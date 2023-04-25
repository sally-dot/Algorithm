const A = require("fs").readFileSync("/dev/stdin");
let R=0;
    
if(A%4==0 && A%100!=0) R=1;
if(A%400==0) R=1;
if(A%400!==0 && A%100==0) R=0;

console.log(R);
