
var input = require("fs").readFileSync("stdin", "utf8");

//separando as linhas do input
var valores = input.split("\n");

//separando os valores dentro das linhas em dois produtos p1 e p2
var p1 = valores.shift().split(" ");
var p2 = valores.shift().split(" ");

//criando o totalizador da (Quantidade * valor) de cada produto tp1 e tp2
var tp1 = (parseFloat(p1[1]))*(parseFloat(p1[2]));
var tp2 = (parseFloat(p2[1]))*(parseFloat(p2[2]));

//total a pagar
var tg = tp1 + tp2;

console.log(`VALOR A PAGAR: R$ ${tg.toFixed(2)}`);