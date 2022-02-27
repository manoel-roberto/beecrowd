const input = require("fs").readFileSync("stdin", "utf8");

var [A, B, C] = input.split(" ").map(item => parseFloat(item));

var delta = Math.pow(B, 2) - 4 * A * C;

if (delta < 0 || A === 0) {
  console.log("Impossivel calcular");
}else {
  var r1 = (-B + Math.sqrt(delta)) / (2 * A);
  var r2 = (-B - Math.sqrt(delta)) / (2 * A);
  
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
}
