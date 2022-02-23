
var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var salarioFixo = parseFloat(valores[1]);
var vendas = parseFloat(valores[2]);

var tSalario = salarioFixo+(vendas*0.15);

console.log(`TOTAL = R$ ${tSalario.toFixed(2)}`);