const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = input[0];
  const y = input[1];
  
  let N
  if (x>0 && y>0) N=1;
  if (x<0 && y>0) N=2;
  if (x<0 && y<0) N=3;
  if (x>0 && y<0) N=4;
  console.log(N);

  /////////////////////////////
  process.exit();
});