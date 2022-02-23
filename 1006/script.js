
var input = require("fs").readFileSync("stdin", "utf8");

var [ A, B, C] = input.split("\n").map(item => parseFloat(item));

PA = 2.0;
PB = 3.0;
PC = 5.0;

MEDIA = ((A*PA)+(B*PB)+(C*PC))/(PA+PB+PC);

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);