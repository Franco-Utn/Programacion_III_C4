"use strict";
// Ejercicio 1: Clases y Métodos
// Descripción: Crea una clase Coche que tenga propiedades como marca, 
// modelo y velocidad. Implementa métodos para acelerar, frenar y mostrar el estado del coche.
class Coche {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    getVelocidad() {
        return this.velocidad;
    }
    /**
     * acelerar
     */
    acelerar() {
        this.velocidad += 100;
        console.log(`El coche ${this.marca} ${this.modelo} ha acelerado a ${this.velocidad} km/h.`);
    }
}
let miCoche = new Coche("Porche", "911", 100);
miCoche.acelerar();
