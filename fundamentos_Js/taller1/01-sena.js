// Imprima 5 veces la palabra SENA

// Ciclo FOR (PARA)
console.log("----- CICLO FOR -----")
for (let contador = 1; contador <= 5; contador++) {
    // contador = 1 -> valor inicial
    // contador <= 5 -> condición se repite mientras sea verdadera
    // contador++ -> al final de cada vuelta, contador aumenta en 1
    console.log("SENA"); // esto se imprime en cada una de las 5 vueltas
}

//Ciclo WHILE (MIENTRAS)
console.log("----- CICLO WHILE -----")
let contadorwhile = 1 
while (contadorwhile <= 5) {
    // se evalua la condicion antes de entrar a repetir el bloque
    console.log("SENA")
    contadorwhile++; // muy importante: debido a que si no se incrementa se vuelve un ciclo infinito.
}

    // Ciclo DO-WHILE (REPETIR Ó HACER MIENTRAS)
    console.log("----- CICLO DO-WHILE-----")
    let contadordowhile = 1;
    do {
        console.log("SENA"); //se ejecuta primero
        contadordowhile++; // Luego se incrementa
    } while (contadordowhile <= 5); // al final evalua la condición.
