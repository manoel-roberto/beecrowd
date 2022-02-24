
var input = require("fs").readFileSync("stdin", "utf8");

var raio = parseFloat(input);

var n = 3.14159;

var area = n* Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);