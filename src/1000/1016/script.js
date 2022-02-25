const { abort } = require("process");

const input = require("fs").readFileSync("stdin", "utf8");

const valores = input.split("\n");

const distancia = parseInt(valores);

const tempo = distancia * 2

console.log(`${tempo} minutos`);
