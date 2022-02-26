const input = require("fs").readFileSync("stdin", "utf8");

var seg = parseInt(input);

const valores = [3600, 60, 1];
const resultado = [];

for (let valor of valores) {
  resultado.push( parseInt(seg / valor));
  seg = seg % valor;
}

console.log(resultado.join(":"));