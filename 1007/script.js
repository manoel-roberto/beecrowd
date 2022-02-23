
var input = require("fs").readFileSync("stdin", "utf8");

var [ A, B, C, D] = input.split("\n").map(item => parseInt(item));

var DIFERENCA = (A*B - C*D)

console.log(`DIFERENCA = ${DIFERENCA}`);