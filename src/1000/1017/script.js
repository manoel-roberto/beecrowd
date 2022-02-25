const { abort } = require("process");

const input = require("fs").readFileSync("stdin", "utf8");

const [tempo, velocidade] = input.split("\n").map(item => parseInt(item));

const kml = (tempo * velocidade)/12;

console.log(kml.toFixed(3));
