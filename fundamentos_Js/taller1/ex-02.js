// operadores matemáticos

let a,b;
let c,d;

let suma, resta, mult, div, residuo, potencia;

//Obtener los datos a trvés del usuaio
a = prompt("Ingrese un numero:");
b = prompt("Ingrese otro numero:");

// Resultado de las operaciones
suma = Number(a) + Number(b); // Aquí la operación da un error debido a que se conatenan los datos
document.writeln("La suma es: " , suma, "<br>");
console.log("La suma es:" , suma);

resta = Number(a) - Number(b);
document.writeln("La resta es: " , resta, "<br>");
console.log("La resta es: " , resta);

mult = a * b;
document.writeln("La multiplicación es: " , mult, "<br>");
console.log("La multiplicación es: " , mult);

residuo = a % b;
document.writeln("El residuo es: " , residuo, "<br>");
console.log("El residuo es: " , residuo);

//obtener los datos a través del usuario
c = parseInt(prompt("Ingrese un numero:"));
d = parseFloat(prompt("Ingrese otro numero:"));

suma = c + d;
rest = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln( "los resultados de las operaciones son: ",
    'suma: ', suma,'<br>',
    'resta: ', resta, '<br>',
    'multiplicación: ', mult, '<br>',
    'división: ', div, '<br>',
    'residuo: ', residuo, '<br>',
    'potencia: ', potencia, '<br>'
);

console.log("las operaciones resueltasson: ",
    'suma: ', suma,
    'resta: ', resta,
    'multiplicación: ', mult,
    'división: ', div,
    'residuo: ', residuo,
    'potencia: ', potencia
);  