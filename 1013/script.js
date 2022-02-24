const { abort } = require("process");

var input = require("fs").readFileSync("stdin", "utf8");

var [ a, b, c] = input.split(" ").map(item => parseInt(item));

var maiorAB = (a+b+Math.abs(a-b))/2;

var maiorABC = (maiorAB+c+Math.abs(maiorAB-c))/2;

console.log(`${maiorABC} eh o maior`);

