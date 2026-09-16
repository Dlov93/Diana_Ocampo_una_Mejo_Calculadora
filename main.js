function principal() {
    console.log("¡Hola, estudiantes!");
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
    
    const suma= numeros.reduce((acomulador,valor)=>acomulador+valor,0);
      if(Number.isInteger(suma)){
        return(suma)
        
    }else{
        return(suma)
        
    }
    
    // TODO: Implementa esta función
    // Debe recibir un arreglo de números y devolver su suma
}

function multiplicarMultiplesNumeros(numeros) {
    
    const mult= numeros.reduce((acomulador,valor)=>acomulador*valor,1);
    return(mult)
    

}

function esPar(numero) {
    if(numero %2 === 0){
        return(true)  
    }else{
        return(false)
    }    
    // TODO: Implementa esta función
    // Debe devolver true si el número es un entero par, false en caso contrario
}

function esEntero(numero) {
    if (Number.isInteger(numero)){
        if((numero/numero)===1){
        return(true)
        }
        else{
        return(false)
        }
    // TODO: Implementa esta función
    // Debe devolver true si el número es un entero, false en caso contrario
    }else{
        return(false)
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