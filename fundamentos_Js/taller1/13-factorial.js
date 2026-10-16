// Escribe el factorial de un numero

const n = 5;

console.log("----- CICLO PARA -----");
let factorialfor =  1;
for (let i=1; i <= n; i++) {
    factorialfor *= i;
}
console.log("El factorial de 5 es: " , factorialfor);

console.log("----- CICLO MIENTRAS -----");
let factorialwhile = 1
let i = 1;
while (i <= n) {
    factorialwhile *= i;
    i++;
}
console.log("El factorial de ", "es:", factorialwhile);

console.log("-----CICLO DO_WHILE-----")
let contadordowhile = 1

