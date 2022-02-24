
var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n")

var matricula = parseInt(valores.shift())
var horas = parseInt(valores.shift())
var salariohora = parseFloat(valores.shift())

console.log(`NUMBER = ${matricula}`)
console.log(`SALARY = U$ ${(horas*salariohora).toFixed(2)}`)