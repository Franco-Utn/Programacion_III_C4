const esPar = (numero) => {
    if (numero % 2 === 0){
        return true
    }else{
        return false
    }
}

let numero = prompt("Ingrese un número: ")
console.log("El numero",numero,"es par:" , esPar(numero));