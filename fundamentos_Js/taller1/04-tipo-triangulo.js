//Equilatero = tres lados iguales
// Isoceles =Dos lados iguales
// Escaleno = Todos los lados diferentes

const ladoA = 5;
const ladoB = 6;
const ladoC = 7;

// primero validamos que ningun lado sea cero o negativo
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log("Los lados deben ser mayores que cero");
    // "||" Es el operador "Ó" basta con que una de las condiciones se cumpla 
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    // Regla geométrica: La suma de los lados aiempre debe ser mayor que el tercer lado, si no , no se puede formar un triangulo real.
    console.log("Los valores no forman un triangulo valido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    // && es el operador "Y" las condiciones evaluadas deben de ser verdaderas
    console.log("el trianulo es equilatero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    // si no es quilatero, pero al menos dos de los dos coinciden, el triangulo es isoceles
    console.log("El triangulo es isoceles");
} else {
    //si no se cumple ninguna de las condiciones anteriores e decir que todos los lados son distintos.
    console.log("El triangulo es escaleno");
}
