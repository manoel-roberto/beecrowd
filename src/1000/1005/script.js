
var input = require("fs").readFileSync("stdin", "utf8");

var [ A, B] = input.split("\n").map(item => parseFloat(item));

PA = 3.5;
PB = 7.5;

MEDIA = ((A*PA)+(B*PB))/(PA+PB);

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);