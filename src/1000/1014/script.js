const { abort } = require("process");

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var distancia = parseInt(valores[0]);
var combustivel = parseFloat(valores[1]);

var consumoMedio = distancia/combustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);