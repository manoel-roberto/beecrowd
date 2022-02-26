const { abort } = require("process");

const input = require("fs").readFileSync("stdin", "utf8");

var valor = parseInt(input);

console.log(valor);

var cedulas = [100, 50, 20, 10, 5, 2, 1]

for(let nota of cedulas){
  var qtdnotas = parseInt(valor / nota);
  console.log(`${qtdnotas} nota(s) de R$ ${nota},00`);
  valor = valor % nota;
}