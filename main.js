function principal() {
    console.log("¡Hola, estudiantes!");
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
    let sumar=0;
    for (i in numeros){
        sumar=sumar+numeros[i];

    }
    if(Number.isInteger(sumar)){
        console.log(sumar);
    }else{
        console.log(parseFloat(sumar.toFixed(1)));
    }
    
    // TODO: Implementa esta función
    // Debe recibir un arreglo de números y devolver su suma
}

function multiplicarMultiplesNumeros(numeros) {
    let multi=1;
    for (i in numeros){
        multi=multi*numeros[i];

    }
    console.log(multi);
    // TODO: Implementa esta función
    // Debe recibir un arreglo de números y devolver el producto de multiplicarlos todos entre sí
}

function esPar(numero) {
    if(numero %2 === 0){
        console.log("true");    
    }else{
        console.log("false");
    }    
    // TODO: Implementa esta función
    // Debe devolver true si el número es un entero par, false en caso contrario
}

function esEntero(numero) {
    if (Number.isInteger(numero)){
        if((numero/numero)===1){
        console.log(true);
        }
        else{
        console.log(false);
        }
    // TODO: Implementa esta función
    // Debe devolver true si el número es un entero, false en caso contrario
    }else{
        console.log(false);
    }
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sumarMultiplesNumeros,
        multiplicarMultiplesNumeros,
        esPar,
        esEntero
    };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
    principal();
}