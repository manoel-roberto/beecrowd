const input = require("fs").readFileSync("stdin", "utf8");

var valor = parseFloat(input);

var cedulas = [100, 50, 20, 10, 5, 2];

var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log(`NOTAS:`);
for(let nota of cedulas){
  var qtdnotas = parseInt(valor / nota);
  console.log(`${qtdnotas} nota(s) de R$ ${nota.toFixed(2)}`);
  valor = valor % nota;
}

console.log(`MOEDAS:`);
for(let moeda of moedas){
  var qtdmoedas = parseInt(valor / moeda);
  console.log(`${qtdmoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
  valor = valor % moeda + 0.00001;
}